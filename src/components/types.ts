type TileForm = 'square' | 'circle' | 'none';

export interface TileCoordinates {
  row: number;
  column: number;
}

export interface TileInfo {
  color: Array<number>,
  formType: TileForm,
  position?: TileCoordinates,
}
