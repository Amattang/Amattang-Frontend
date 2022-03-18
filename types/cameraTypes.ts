export type cameraTypes = {
  assets: cameraAssetsTypes[];
};

export type cameraAssetsTypes = {
  fileSize: number;
  uri: string;
  timestamp: string;
  type: string;
  width: number;
  id: string;
  fileName: string;
  height: number;
};
