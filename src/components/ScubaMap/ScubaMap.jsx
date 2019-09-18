import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoidW5pdGVkb2ZtdSIsImEiOiJjazBveHQxZHEwZWZuM2NzMzVnbjF5Nnk2In0.8lOAZOIsof6LwWgVvb7mkw',
  minZoom: 1,
});

const ScubaMap = () => (
  <Map
    style="mapbox://styles/mapbox/streets-v10"
    center={[ -122.3421, 47.6075]}
    containerStyle={{
      height: '100vh',
      width: '100vw'
    }}
  >
    <Layer type="symbol" id="marker" layout={{ "icon-image": "harbor-15" }}>
      <Feature coordinates={[-122.3421, 47.6075]} />
    </Layer>
  </Map>
);

export default ScubaMap;
