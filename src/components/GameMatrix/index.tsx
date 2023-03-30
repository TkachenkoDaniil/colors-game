import { memo, useMemo, useState } from "react";

import { TileProps } from '../../types';
import Tile from "../Tile";
import './index.scss';

interface MatrixSize {
  height: number,
  width: number,
}

const initializeMatrix = (height: number, width: number) => (
  Array(height + 2).fill(null).map(() => (
    Array(width + 2).fill({ color: [0, 0, 0], formType: 'square' })
  ))
)

const GameMatrix = ({ height, width }: MatrixSize) => {
  const [cellsData, setCellsData] = useState(() => initializeMatrix(height, width));

  const tileMatrix = useMemo(() => {
    return (
      <>
        {
          cellsData.map((row: Array<TileProps>, rowNumber: number) => (
            <div className="matrix__row" key={rowNumber}>
              {
                row.map((item: TileProps, columnNumber: number) => {
                  if (
                    (rowNumber === 0 && columnNumber === 0)
                    || (rowNumber === 0 && columnNumber === row.length - 1)
                    || (rowNumber === cellsData.length - 1 && columnNumber === 0)
                    || (rowNumber === cellsData.length - 1 && columnNumber === row.length - 1)
                  ) {
                    return <div style={{ width: '20px', height: '20px' }}></div>
                  }
                  if (
                    (rowNumber === 0 || rowNumber === cellsData.length - 1)
                    || (columnNumber === 0 || columnNumber === row.length - 1 )
                  ) {
                    return <Tile color={item.color} formType="circle" key={`${rowNumber}${columnNumber}`}></Tile>
                  }
                  return <Tile color={item.color} formType={item.formType} key={`${rowNumber}${columnNumber}`}></Tile>
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
