import React, { useState } from 'react';
import { FaMapPin } from 'react-icons/fa';
import ReactMapGl, { Marker } from 'react-map-gl';
import { theme } from '../../theme';

interface MapContainerProps {}

const MapContainer: React.FC<MapContainerProps> = () => {
  const [viewPort, setViewPort] = useState({
    width: '100vw',
    height: '65vh',
    latitude: 45.47652760153343,
    longitude: -73.61335607391834,
    zoom: 17,
  });
  return (
    <ReactMapGl
      {...viewPort}
      mapboxApiAccessToken='pk.eyJ1IjoiaXpzayIsImEiOiJja2JzNjI2OWIwMGphMnJvMzRqbmMyenN0In0.LbZxD4c_6i8AtMZ6sm4s5g'
      onViewportChange={(viewport) => setViewPort(viewport as any)}
      mapStyle='mapbox://styles/izsk/cjvwhrg9j559w1cn5tfedlugx'
      doubleClickZoom
    >
      <Marker longitude={-73.61339970803832} latitude={45.47660537976073}>
        <FaMapPin color={theme.colors.thirdColor} size={25} />
      </Marker>
    </ReactMapGl>
  );
};

export { MapContainer };
