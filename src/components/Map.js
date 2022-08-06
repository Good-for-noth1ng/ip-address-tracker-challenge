import React, { useRef, useEffect } from 'react'
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { MAPBOX_API_TOKEN } from '../env.json'
import { setZoom, setLat, setLng } from '../redux/dataSlice'
import { useSelector, useDispatch } from 'react-redux'

mapboxgl.accessToken = MAPBOX_API_TOKEN 

function Map() {
    const mapContainer = useRef(null)
    const map = useRef(null)
    const dispatch = useDispatch()
    const lng = useSelector(state => state.ipInfo.data.location.lng)
    const lat = useSelector(state => state.ipInfo.data.location.lat)
    const zoom = useSelector(state => state.ipInfo.zoom)
    
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
            dispatch(setLng(map.current.getCenter().lng.toFixed(4)));
            dispatch(setLat(map.current.getCenter().lat.toFixed(4)));
            dispatch(setZoom(map.current.getZoom().toFixed(2)));
        });
    })
    return (
        <div ref={mapContainer} style={{ height: '100vh' }}/>
    )
}

export default Map