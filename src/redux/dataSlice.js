import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import IPIFY_API_KEY from '../env.json';

export const fetchInitData = createAsyncThunk(
    'data/fetchInitData',
    async () => {
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${IPIFY_API_KEY.IPIFY_API_KEY}`;
        let response = await fetch(url)
        return response.json()
    }
)

export const fetchByIp = createAsyncThunk(
    'data/fetchByIp',
    async (ipAddress) => {
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${IPIFY_API_KEY.IPIFY_API_KEY}&ipAddress=${ipAddress}`;
        const response = await fetch(url)
        return response.json()
    }
)

export const fetchByDomain = createAsyncThunk(
    'data/fetchByDomain',
    async (domain) => {
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${IPIFY_API_KEY.IPIFY_API_KEY}&domain=${domain}`;
        const response = await fetch(url)
        return response.json()
    }
)

export const dataSlice = createSlice({
    name: 'ipInfo',
    initialState: {
        data: {
            ip: "",
            location: {
                country: "",
                region: "",
                city: "",
                lat: 0,
                lng: 0,
                postalCode: "",
                timezone: "",
                geonameId: 0,
            },
            domains: [],
            as: {
                asn: 0,
                name: "",
                route: "",
                domain: "",
                type: ""
            },
            isp: ""
        },
        loading: false,
        error: "",
        zoom: 10
    },

    reducers: {
        setLat: (state, action) => {
            state.data.location.lat = action.payload
        },
        setLng: (state, action) => {
            state.data.location.lng = action.payload
        },
        setZoom: (state, action) => {
            state.zoom = action.payload
        }
    },

    extraReducers: (builder) => {
        builder.addCase(fetchInitData.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchInitData.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
        })
        builder.addCase(fetchInitData.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(fetchByIp.fulfilled, (state, action) => {
            state.loading = false
            if (action.payload.code === 422) {
                state.error = action.payload.messages
            } else {
                state.data = action.payload
                state.error = ""
            }
        })
        builder.addCase(fetchByIp.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(fetchByIp.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchByDomain.fulfilled, (state, action) => {
            state.loading = false
            if (action.payload.code === 422) {
                state.error = action.payload.messages
            } else {
                state.data = action.payload
                state.error = ""
            } 
        })
        builder.addCase(fetchByDomain.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        builder.addCase(fetchByDomain.pending, (state) => {
            state.loading = true
        })
    }
})

export const { setLat, setLng, setZoom } = dataSlice.actions;
 
export default dataSlice.reducer;
