import React, { memo } from 'react';

import './index.scss'

type TileForm = 'square' | 'circle';

interface TileProps {
  color: Array<number>,
  formType: TileForm
}

const Tile = ({ color, formType }: TileProps) => {

  if (!color || !formType) return null;
  return (
    <div className={`tile__${formType}`}></div>
  );
};

export default memo(Tile);
