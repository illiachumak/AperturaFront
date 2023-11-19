'use client'
import { useEffect, useState } from 'react';
import './style.css';
import { useRouter } from 'next/navigation';
import _debounce from 'lodash/debounce';

export default function DoubleSlider() {
    const router = useRouter();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(100);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const minParam = urlParams.get('min');
        const maxParam = urlParams.get('max');

        if (minParam !== null) {
            setMin(Number(minParam));
        }

        if (maxParam !== null) {
            setMax(Number(maxParam));
        }
    }, []);

    useEffect(() => {
        debouncedPushToRouter();
    }, [min, max]);

    const debouncedPushToRouter = _debounce(() => {
        const queryParams = new URLSearchParams(window.location.search);
        queryParams.set('min', min);
        queryParams.set('max', max);
        router.push(`${window.location.pathname}?${queryParams.toString()}`);
    }, 100);

    const handleMinChange = (e) => {
        setMin(e.target.value);
    };

    const handleMaxChange = (e) => {
        setMax(e.target.value);
    };

    return (
        <>
            <div className="range_container pt-4 pb-3 pl-5 pr-5 bg-color-prim1 mb-auto rounded-xs text-white">
                <div className="form_control">
                    <div className="flex items-center">
                        <div className="mr-2">Від</div>
                        <input
                            type="text"
                            placeholder="min"
                            className="input input-bordered custom-input text-black"
                            value={min}
                            onChange={handleMinChange}
                        />
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">До</div>
                        <input
                            type="text"
                            placeholder="max"
                            className="input input-bordered custom-input text-black"
                            value={max}
                            onChange={handleMaxChange}
                        />
                    </div>
                </div>
                <div className="sliders_control">
                    <input
                        id="fromSlider"
                        type="range"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                        min="0"
                        max="100"
                    />
                    <input
                        id="toSlider"
                        type="range"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                        min="0"
                        max="100"
                    />
                </div>
            </div>
        </>
    );
}
