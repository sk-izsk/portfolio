import React, { useState } from 'react';
import { FaMapPin } from 'react-icons/fa';
import ReactMapGl, { Marker } from 'react-map-gl';
import styled from 'styled-components';
import { theme } from '../../theme';

interface MapContainerProps {}
const ReactMapModified = styled.div`
  overflow: hidden;
  display: flex;
  width: 100%;
  .mapboxgl-map {
    border-radius: 10px;
  }
`;

const UnMemoizedMapContainer: React.FC<MapContainerProps> = () => {
  const [viewPort, setViewPort] = useState({
    width: '100vw',
    height: '65vh',
    latitude: 45.47652760153343,
    longitude: -73.61335607391834,
    zoom: 17,
  });
  return (
    <ReactMapModified>
      <ReactMapGl
        {...viewPort}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_BOX_ACCESS_TOKEN}
        onViewportChange={(viewport: any) => setViewPort(viewport as any)}
        mapStyle='mapbox://styles/izsk/cjvwhrg9j559w1cn5tfedlugx'
        doubleClickZoom
      >
        <Marker longitude={-73.61339970803832} latitude={45.47660537976073}>
          <FaMapPin color={theme.colors.thirdColor} size={25} />
        </Marker>
      </ReactMapGl>
    </ReactMapModified>
  );
};

const MapContainer: React.NamedExoticComponent<MapContainerProps> = React.memo(UnMemoizedMapContainer);

export { MapContainer };
