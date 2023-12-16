"use client"
import { useSelector } from "react-redux"
import { selectIsLoading } from "../../redux/slices/flagSlice"

export default function Loading() {
    const isLoading = useSelector(selectIsLoading)
    if (isLoading){return (
    <div className="absolute overscroll-none z-[100] w-screen h-screen top-0 bg-loading flex justify-center items-center">
            <span className="loading loading-bars w-[50px] "></span>
    </div>
  )}
  else{
    return
  }
}
