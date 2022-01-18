import React from 'react'
import { PlusOutlined } from '@ant-design/icons';
import '../css/addCity.scss';
import { NavLink } from 'react-router-dom';

export default function AddCityIcon() {
    const addIcon = 
    <div className='functionalDiv addIconDiv'>
        <NavLink to={'/addCity'}>
            <PlusOutlined className='addIcon'/>
        </NavLink>
    </div>

    // console.log(cities);
    return (
        <>
            {addIcon} 
        </>
    )
}
