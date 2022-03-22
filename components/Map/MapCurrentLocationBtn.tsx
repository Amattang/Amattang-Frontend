import React, { useState } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { IHere } from '../../types/mapTypes';

type Props = {
  lat: number;
  long: number;
};

const MapCurrentLocationBtn = ({ lat, long }: Props) => {
  const [here, setHere] = useState<IHere>({
    latitude: lat,
    longitude: long,
  });

  return (
    <MapView
      style={{ flex: 1 }}
      provider={PROVIDER_GOOGLE}
      region={{
        latitude: here.latitude as number,
        longitude: here.longitude as number,
        latitudeDelta: 0.0122,
        longitudeDelta: 0.0021,
      }}
      zoomEnabled={true}
      showsScale={true}
    >
      <Marker
        coordinate={{
          latitude: here.latitude as number,
          longitude: here.longitude as number,
        }}
        title={'현재위치'}
        description={'현재위치'}
        pinColor={'blue'}
      />
    </MapView>
  );
};

export default MapCurrentLocationBtn;
