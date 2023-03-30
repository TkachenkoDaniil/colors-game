import { memo } from 'react';

import { TileInfo, TileCoordinates } from '../types';
import './index.scss';

interface TileProps extends TileInfo {
  onClick?(e: any): void
}

const Tile = ({ color, formType, onClick, position }: TileProps) => {

  const onTileClick = (e: any) => {
    if (onClick) onClick(position);
  };

  if (!color || !formType) return null;
  return (
    <>
      {
        formType === 'none' ? (
          <div style={{ width: '20px', height: '20px' }}></div>
        ) : (
          <div
            className={`tile__${formType}`}
            style={{ background: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}
            onClick={(e) => onTileClick(e)}
          />
        )
      }
    </>
  );
};

export default memo(Tile);
