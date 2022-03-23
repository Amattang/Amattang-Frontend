import React from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

type Props = {
  lat: number;
  long: number;
};

// 좌표를 무조건 넘겨줘야 함
const MapTemplate = ({ lat, long }: Props) => {
  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0021,
      }}
      zoomEnabled={true}
      showsScale={true}
    >
      <Marker
        coordinate={{
          latitude: lat,
          longitude: long,
        }}
        title={'현재위치'}
        description={'현재위치'}
        image={require('../../assets/images/map/mapCenter3.png')}
      />
    </MapView>
  );
};

export default MapTemplate;
