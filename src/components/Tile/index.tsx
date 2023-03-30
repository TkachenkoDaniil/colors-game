import { memo } from 'react';

import { TileProps } from '../../types'
import './index.scss'

const Tile = ({ color, formType }: TileProps) => {

  if (!color || !formType) return null;
  return (
    <div className={`tile__${formType}`} style={{ background: `rgb(${color[0]}, ${color[1]}, ${color[2]})` }}></div>
  );
};

export default memo(Tile);
