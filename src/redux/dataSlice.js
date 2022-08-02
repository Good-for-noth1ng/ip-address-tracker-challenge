import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import IPIFY_API_KEY from '../env.json';

export const fetchInitData = createAsyncThunk(
    'data/fetchInitData',
    async () => {
        const url = `https://geo.ipify.org/api/v2/country?apiKey=${IPIFY_API_KEY.IPIFY_API_KEY}`;
        return fetch(url)
            .then((response) => response.json())
    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState: {
        data: {
            ip: "",
            location: {
                country: "",
                region: "",
                timezone: "",
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
        error: ''
    },
    reducers: {
        setData: (state, action) => {
            state.data = action.payload
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
    }
})

export const { setData } = dataSlice.actions;
 
export default dataSlice.reducer;
