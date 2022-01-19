import { useSelector } from 'react-redux';

export const AllCitySelector = () => {
    return useSelector((state) => state.city);
}

export const CitySelector = (lat,lng) => {
    return useSelector((state) => state.city.filter((item) => item.lat==lat && item.lng==lng?item:null));
    
}