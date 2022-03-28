// export interface IHere {
//   latitude: number | null;
//   longitude: number | null;
// }

// 체크리스트 매물들
export interface ILocations {
  id: number;
  imgUri: null;
  mainTitle: string;
  address: string;
  location: ILocation;
  distance: string;
  roomType: string;
  area: string;
  form: string;
  pinned: boolean;
  center: boolean;
}

// 위치 좌표
export interface ILocation {
  latitude: number;
  longitude: number;
}
