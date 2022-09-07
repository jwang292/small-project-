import React, { useEffect, useState } from 'react'

export default function useScroll() {
  const [scroll, setScroll] = useState({ top: 0, left: 0 })
  useEffect(() => {
    const scrollMove = () => {
      setScroll({
        //scroll 必须用window注册事件
        top: window.pageYOffset,
        left: window.pageXOffset,
      })
    }
    window.addEventListener('scroll', scrollMove)
    return () => window.removeEventListener('scroll', scrollMove)
  }, [])
  return scroll
}
