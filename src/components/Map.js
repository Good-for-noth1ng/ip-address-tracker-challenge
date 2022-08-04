import React, { useRef, useState, useEffect } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { MAPBOX_API_TOKEN } from '../env.json'
mapboxgl.accessToken = MAPBOX_API_TOKEN

function Map({longitude, latitude}) {
    const mapContainer = useRef(null)
    const map = useRef(null)
    const [lng, setLng] = useState(longitude)
    const [lat, setLat] = useState(latitude)
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
        <div ref={mapContainer} style={{ height: '65vh' }}/>
    )
}

export default Map