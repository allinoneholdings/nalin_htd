    import React from 'react';
    import { APIProvider, Map } from '@vis.gl/react-google-maps';

    const MapComponent = ({ apiKey, center, zoom }) => {
      return (
        <APIProvider apiKey={apiKey}>
          <Map
            defaultCenter={center}
            defaultZoom={zoom}
            gestureHandling={'greedy'}
            disableDefaultUI={true} // Optional: disables default UI controls
          />
        </APIProvider>
      );
    };

    export default MapComponent;