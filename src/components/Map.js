// import React from 'react'
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import { useState } from "react";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({ eventData, center, zoom }) => {

    const [locationInfo, setLocationInfo] = useState(null)
    const markers = eventData.map(ev => {
        if (ev.categories[0].id === 8) {
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]} onClick={ () => setLocationInfo({id: ev.id, title: ev.title})}/>
            
        }
    })
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBMj8PKlDu7nnbhThbMt5K_LWsUrQ_no8Q" }}
        defaultCenter={center}
        defaultZoom={zoom}
          >
              {markers}
              
          </GoogleMapReact>
          
          {locationInfo && <LocationInfoBox info={ locationInfo}/>}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
        // lat: 31.9024,
        // lng: -6.1968,
  },
  zoom: 6,
};

export default Map;
// 34.02383981670299, -5.015803331607232
// 49.27010014916835, 4.036142037066591
//31.90249444527823, -6.196899055995552