"use client"
import { useDispatch, useSelector } from "react-redux"
import { selectIsLoading, setLoading } from "../../redux/slices/flagSlice"
import { useEffect } from "react"

export default function Loading() {
  const dispatch = useDispatch()
  
  useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    dispatch(setLoading(true))
        return ()=>{
          dispatch(setLoading(false))
        }
  },[])
    const isLoading = useSelector(selectIsLoading)
    if (isLoading){return (
    <div className="absolute overscroll-none z-[100] w-screen h-[100vh] top-0 bg-loading flex justify-center items-center max-[400px]:w-[400px] max-[400px]:h-[140%]">
            <span className="loading loading-bars w-[50px] "></span>
    </div>
  )}
  else{
    return
  }
}
