import React from 'react'
import { useSelector } from 'react-redux'
import Map from './Map'

function MapContainer() {
    
    const ipInfo = useSelector(state => state.ipInfo)
    
    return (
        <div>
            {
                ipInfo.loading ?
                    '' : 
                <Map longitude={ipInfo.data.location.lng} latitude={ipInfo.data.location.lat}/>
            }            
        </div>
    )
}

export default MapContainer