import { memo, useCallback, useMemo, useState } from "react";

import { TileInfo, TileCoordinates } from '../types';
import Tile from "../Tile";
import './index.scss';

interface MatrixSize {
  height: number,
  width: number,
}

const initializeMatrix = (height: number, width: number) => (
  Array(height + 2).fill(null).map((row, rowIndex) => {
    if (rowIndex === 0 || rowIndex === height + 1) {
      return Array(width + 2).fill(null).map((item, itemIndex) => {
        if (itemIndex === 0 || itemIndex === width + 1) return { color: [0, 0, 0], formType: 'none' };
        return { color: [0, 0, 0], formType: 'circle', position: { row: rowIndex, column: itemIndex } };
      })
    }
    return Array(width + 2).fill(null).map((item, itemIndex) => {
      if (itemIndex === 0 || itemIndex === width + 1) {
        return { color: [0, 0, 0], formType: 'circle', position: { row: rowIndex, column: itemIndex } };
      }
      return { color: [0, 0, 0], formType: 'square', position: { row: rowIndex, column: itemIndex } }; 
    });
  })
)

const GameMatrix = ({ height, width }: MatrixSize) => {
  const [cellsData, setCellsData] = useState(() => initializeMatrix(height, width));
  const [rgbCounter, setRgbCounter] = useState([[255, 0, 0], [0, 255, 0], [0, 0, 255]]);

  const calculateTileColor = (tileColor: Array<number>, distance: number, color: Array<number>) => {
    const delimiter = (height + 1 - distance)/(height + 1);
    return [color[0] * delimiter, color[1] * delimiter, color[2]* delimiter];
  }

  const onTileClick = useCallback(({ row, column }: TileCoordinates) => {

    if (column === 0 || column === width + 1) {
      const primaryRow = cellsData[row];
      const color = rgbCounter[0];
      const coloredRow = primaryRow.map((tile, index) => {
        const distance = column === 0 ? index : column - index;
        return {
          ...tile,
          color: calculateTileColor(tile.color, distance, color),
        }
      })
      cellsData[row] = coloredRow;
      setCellsData([...cellsData])
      rgbCounter.shift()
      setRgbCounter([...rgbCounter]);
    }
    // todo: change column color

  }, []);

  const tileMatrix = useMemo(() => {
    return (
      <>
        {
          // todo: chenge any to Array<TileInfo>
          cellsData.map((row: any, rowNumber: number) => (
            <div className="matrix__row" key={rowNumber}>
              {
                row.map((item: TileInfo, columnNumber: number) => {
                  return (
                    <Tile
                      color={item.color}
                      formType={item.formType}
                      key={`${rowNumber}${columnNumber}`}
                      position={item.position}
                      onClick={item.formType === 'circle' ? onTileClick : undefined}
                    />
                  )
                })
              }
            </div>
          ))
        }
      </>
    );
  }, [height, width, cellsData]);

  return (
    <div className="matrix">
      {tileMatrix}
    </div>
  );
};

export default memo(GameMatrix);
