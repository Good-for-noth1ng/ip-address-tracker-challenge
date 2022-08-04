import React from 'react'
import { useSelector } from 'react-redux'
import Map from './Map'

function MapContainer() {
    
    const data = useSelector(state => state.data)
    
    return (
        <div>
            {data.loading ?
                '' : 
            <Map longitude={data.data.location.lng} latitude={data.data.location.lat}/>
            }            
        </div>
    )
}

export default MapContainer