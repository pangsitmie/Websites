import { useMemo, useState } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";


import React from 'react'

const Maps = () => {
    //GOOGLE MAP
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyA_GZSFTz3_7EEx8vtqjNwkN7I3T-uInYc",
        // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

    const [selected, setSelected] = useState(null);


    const center = useMemo(() => ({ lat: 24.1043367, lng: 120.6 }), []);
    return (
        <>
            <div className="places-container">
                <usePlacesAutocomplete setSelected={setSelected} />
            </div>

            <GoogleMap
                zoom={12}
                center={center}
                mapContainerClassName="map-container"
            >
                {/* {selected && <Marker position={selected} />} */}
            </GoogleMap>

        </>

    )
}



export default Maps