type TileForm = 'square' | 'circle';

export interface TileProps {
  color: Array<number>,
  formType: TileForm
}