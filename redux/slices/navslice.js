import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    origin:null,
    destination:null,
    traveltimeInformation:null,
}

export const navslice = createSlice({
    name:'nav',
    initialState,
    reducer:{
        setOrigin: (state, action) => {
            state.origin =  action.payload
        },
        setDestination: (state, action) => {
            state.destination =  action.payload
        },
        settraveltimeInformation: (state, action) => {
            state.traveltimeInformation =  action.payload
        },
    }
})


export const {setOrigin, setDestination, settraveltimeInformation} = navslice.actions;

// Selectors

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTraveltimeDestination = (state) => state.nav.traveltimeInformation;

export default navslice.reducer;