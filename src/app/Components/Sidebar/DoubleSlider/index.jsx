'use client'
import { useEffect, useState } from 'react';
import './style.css'

export default function DoubleSlider() {
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(100)
    useEffect(()=>{
        if(min>max || max<min){
            setMax(100)

        }
    },[min,max])
    return(
        <>
            <div className="range_container pt-4 pb-3 pl-5 pr-5 mr-8 bg-color-prim1 mb-auto rounded-xs text-white">
                <div className="form_control">
                    <div className="flex items-center">
                        <div className="mr-2">Від</div>
                        <input type="text" placeholder="min" className="input input-bordered custom-input text-black" value={min}/>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">До</div>
                        <input type="text" placeholder="max" className="input input-bordered custom-input text-black" value={max}/>
                    </div>
                </div>
                <div className="sliders_control">
                    <input id="fromSlider" type="range" value={min} onChange={(e) => setMin(e.target.value)} min="0" max="100"/>
                    <input id="toSlider" type="range" value={max} onChange={(e) => {
                        setMax(e.target.value)}} min="0" max="100"/>
                </div>
            </div>
        </>
    );
}
