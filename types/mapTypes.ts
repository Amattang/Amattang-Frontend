export interface IPick {
  latitude: number;
  longitude: number;
}

export interface ILocations {
  latlng: IPick;
  title: string;
  description: string;
  text: string;
  id: number;
  center: boolean;
}
