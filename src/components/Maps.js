import React from "react";
import { YMaps, Map, ZoomControl, FullscreenControl } from "react-yandex-maps";

const Maps = () => {
  return (
    <div>
      <YMaps>
        <Map
          className="yandexMaps"
          defaultState={{
            center: [41.311158, 69.279737],
            zoom: 13,
            controls: [],
          }}
        >
          <ZoomControl options={{ float: "right" }} />
          <FullscreenControl />
        </Map>
      </YMaps>
    </div>
  );
};

export default Maps;
