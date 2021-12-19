import './styles.scss';
import React, { useState } from 'react';
import { LoadScript, GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import markersIcon from 'assets/icons/markers-icon.png';
import Card from 'components/card';


const Maps = ({data}) => {
 const GOOGLE_API = process.env.REACT_GOOGLE_API_KEY;
 const [activeMarker, setActiveMarker] = useState(null);
  
 // Line 14-25 inspired from stack-overflow discussion 
 // https://stackoverflow.com/questions/67277194/how-to-set-start-point-in-react-google-maps
  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);   
  };

  const handleOnLoad = (map) => {
    const bounds = new window.google.maps.LatLngBounds();
    data.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  return (
    <LoadScript googleMapsApiKey={GOOGLE_API}>
        <GoogleMap
            zoom={15}
            onLoad={handleOnLoad}
            mapContainerStyle={{ width: "74vw", height: "90vh"}}
        >
        {data.map(({ id, name, position, description, image, link, address }) => (
            <Marker
                key={id}
                position={position}
                onClick={() => handleActiveMarker(id)}
                icon={markersIcon}
                label={{text: `${name}`, className:"label", color:"$secondary-2", fontSize: '$text-sm'}}
            >
            {activeMarker === id  ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                 <div style={{ opacity: 1, padding: 12, marginLeft: "0.25rem", textAlign:"left" }}>
                   <div style={{ fontSize: "$text-base"}}>
                     <p>{name}</p>
                     <p>{address}</p>
                   </div>
                 </div>
                </InfoWindow>               
            ) : null }
            {activeMarker === id  ? (
              <Card
                onCloseClick={() => setActiveMarker(null)}
                src={image}
                alt={name}
                name={name}
                desc={description}
                href={link}
                address= {address}
              />
            ) : null }
            </Marker>
        ))}
        </GoogleMap>
    </LoadScript>
  );

}

export default Maps;
