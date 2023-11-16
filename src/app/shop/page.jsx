"use client"
import { useRouter } from "next/navigation"
import { useLayoutEffect } from "react"
/*
    * Redirecting for actual shop page with categories
*/
export default function Shop() {
  const router = useRouter()

  useLayoutEffect(()=> {
    router.push('/shop/doors')
  },[])

  return (
    <>
    </>
  )
}
    