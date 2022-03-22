import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

type Props = {
  lat: number;
  long: number;
};

const MapFindAddressBtn = ({ lat, long }: Props) => {
  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: lat as number,
        longitude: long as number,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0021,
      }}
      zoomEnabled={true}
      showsScale={true}
    >
      <Marker
        coordinate={{
          latitude: lat as number,
          longitude: long as number,
        }}
        title={'현재위치'}
        description={'현재위치'}
        pinColor={'blue'}
      />
    </MapView>
  );
};

export default MapFindAddressBtn;
