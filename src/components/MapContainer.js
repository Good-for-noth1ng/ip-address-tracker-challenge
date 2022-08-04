import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Map from './Map'
import { ClipLoader } from 'react-spinners'


function MapContainer() {
    const data = useSelector(state => state.data)
    
    useEffect(() => {
        if (!data.loading) {
            return
        }    
    }, [data])
    
    return (
        <div>
            {data.loading ? <ClipLoader /> : <Map longitude={data.data.location.lng} latitude={data.data.location.lat}/>}            
        </div>
    )
}

export default MapContainer