"use client"
import { useRouter } from "next/navigation"
import { useLayoutEffect } from "react"
import Loading from "../Components/Loading"
/*
    * Redirecting for actual shop page with categories
*/
export default function Shop() {
  const router = useRouter()

  useLayoutEffect(()=> {
    router.push('/shop/1')
  },[])

  return (
    <div className="h-screen">
      <Loading/> 
    </div>
  )
}
    