import { createSlice } from "@reduxjs/toolkit";

const state = [];
const citySlice = createSlice({
    name:"city",
    initialState:state,
    reducers:{
        storeCityDetails: (state,action) => {
            const stateVal = state.filter((item) => {
                if(action.payload.city === item.city){
                    return item
                }
            })
            console.log("action.payload.weather \n",action.payload.temp);
            if(stateVal.length<1){
                const city = {
                    "city":action.payload.city,
                    "country":action.payload.country,
                    "lat":action.payload.lat,
                    "lng":action.payload.lng,
                    "temp":action.payload.temp,
                    "weather":action.payload.weather
                };
                state.push(city);
            }
        }
    }
});

export const { storeCityDetails } = citySlice.actions;
export default citySlice.reducer;