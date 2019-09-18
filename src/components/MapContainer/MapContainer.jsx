import React from 'react';
import { Provider } from 'mobx-react';

import Header from "../Header/Header";
import ScubaMap from "../ScubaMap/ScubaMap";
import RootStore from './stores';
import transport from '../../lib/services/transport';

const rootStore = new RootStore({ transport });

const MapContainer = () => (
  <Provider store={rootStore} >
    <div>
      <Header />
      <ScubaMap />
    </div>
  </Provider>
);

export default MapContainer;
