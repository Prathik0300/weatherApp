import React, { useEffect } from 'react'
import { Route,Routes,useNavigate } from 'react-router';
import AddCity from './AddCity';
import DetailedReport from './DetailedReport';
import Navbar from './Navbar';
import Settings from './Settings';

export default function Container() {
    const Navigate = useNavigate();

    useEffect(() => {
        if(window.location.pathname === "/"){
            Navigate("weatherApp")
        }
    },[])

    return (
        <>
            <Routes>
                <Route path="weatherApp" element={<Navbar/>}/>
                <Route path="/weatherApp/Settings" element={<Settings/>}/>
                <Route path="/weatherApp/:lat/:lng" element={<DetailedReport/>}/>
                <Route path="/addCity" element={<AddCity/>}/>
            </Routes>
            
        </>
    )
}
