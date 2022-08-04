import React, { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { MAPBOX_API_TOKEN } from '../env.json'
import { useSelector } from 'react-redux'

mapboxgl.accessToken = MAPBOX_API_TOKEN

function Map() {
    const mapContainer = useRef(null)
    const map = useRef(null)
    const data = useSelector(state => state.data.data)
    
    useEffect(() => {
        if (!data.loading) {
            return
        }
        setLng(data.location.lng)
        setLat(data.location.lat)      
    })

    const [lng, setLng] = useState(0)
    const [lat, setLat] = useState(0)
    const [zoom, setZoom] = useState(9)

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        })
    })

    useEffect(() => {
        if (!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    })
    
    return (
        <div>
            <div ref={mapContainer} style={{ height: '65vh' }}/>
        </div>
    )
}

export default Map