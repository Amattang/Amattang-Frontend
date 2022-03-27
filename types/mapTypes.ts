export interface IPick {
  latitude: number;
  longitude: number;
}

export interface IHere {
  latitude: number | null;
  longitude: number | null;
}

// 체크리스트 매물들
export interface ILocations {
  latlng: IPick;
  title: string;
  description: string;
  text: string;
  id: number;
  center: boolean;
}

// 위치 좌표
export interface ILocation {
  latitude: number;
  longitude: number;
}
