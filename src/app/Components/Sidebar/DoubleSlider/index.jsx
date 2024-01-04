'use client'
import { useEffect, useState } from 'react';
import './style.css';
import { useRouter } from 'next/navigation';
import _debounce from 'lodash/debounce';

export default function DoubleSlider({minPrice, maxPrice}) {
    const router = useRouter();
    const [min, setMin] = useState(minPrice);
    const [max, setMax] = useState(maxPrice);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const minParam = urlParams.get('min');
        const maxParam = urlParams.get('max');
        if ( minParam != '0'&& minParam !== null ) {
          setMin(Number(minParam));
        } else{
            setMin(minPrice)
        }
      
        if ( maxParam != '100' && maxParam !== null ) {
          setMax(Number(maxParam));
        }else{
            setMax(maxPrice)
        }
      }, [minPrice, maxPrice]);
      

    const debouncedPushToRouter = () => {
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set('min', min);
        queryParams.set('max', max);
        router.push(`${window.location.pathname}?${queryParams.toString()}`);
    };



    return (
        <>
            <div className="range_container pt-4 pb-3 pl-5 pr-5 bg-color-prim1 mb-auto rounded-xs text-white">
                <div className="form_control flex justify-between items-center">
                    <p>{min} грн - {max} грн</p>
                    <button onClick={debouncedPushToRouter} className=' text-xl cursor-pointer px-3 text-black py-1 bg-gray-200 opacity-90 rounded-lg'>Ок</button>
                </div>
                <div className="sliders_control">
                    <input
                        id="fromSlider"
                        type="range"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                        min={minPrice}
                        max={maxPrice}
                    />
                    <input
                        id="toSlider"
                        type="range"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                        min={minPrice}
                        max={maxPrice}
                    />
                </div>
            </div>
        </>
    );
}
