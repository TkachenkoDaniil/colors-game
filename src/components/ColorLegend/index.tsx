import { memo } from 'react';
import './index.scss';

import Tile from '../Tile';

interface Legend {
  userId: string,
  maxMoves: number,
  target: Array<number>
}

const ColorLegend = ({ userId, maxMoves, target }: Legend) => {

  return (
    <div className='legend'>
      <p>User Id: {userId}</p>
      <p>Moves left: {maxMoves}</p>
      <div className='legend__target'>
        <div>Target color:</div>
        &nbsp;
        <Tile
          color={target}
          formType="square"
        />
      </div>
      <p>Closest color:</p>
    </div>
  );
};

export default memo(ColorLegend);
