import React, { useEffect, useState } from 'react';
import "../css/preloader.scss";
import SunIcon from './Icon';
import CloudIcon from './CloudIcon';
import ThunderIcon from './ThunderIcon';
import RainyIcon from './RainyIcon';

const loaderIcon = [
    <SunIcon width={65} height={65}/>,
    <CloudIcon width={65} height={65}/>,
    <ThunderIcon width={65} height={65}/>,
    <RainyIcon width={65} height={65}/>
]

export default function Loader() {
    const [idx,setIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIdx(prev => (prev+1)%4);
        },600);

        return(() => clearInterval(interval));
    });
  return (
    <div className='loader'>
        {loaderIcon[idx]}
    </div>
  );
}
