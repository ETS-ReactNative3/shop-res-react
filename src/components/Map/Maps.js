import React from "react";
import { YMaps, Map } from "react-yandex-maps";


const Maps = () => {
  return (
    <YMaps >
      <Map className='yandexMaps' defaultState={{ center: [41.311158, 69.279737], zoom: 9 }} />
    </YMaps>
  );
};


export default Maps;
