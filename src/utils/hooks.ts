import { useState, useEffect } from 'react'

export function useFullScreen(selector: string) {
  const [fullScreen, setFullScreen] = useState(false)

  function enterFullScreen() {
    const element = document.querySelector(selector) as any
    if (element.webkitRequestFullscreen) {
      element.webkitRequestFullScreen()
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen()
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen()
    } else if (element.requestFullscreen) {
      element.requestFullscreen()
    }
  }

  function exitFullScreen() {
    const doc = document as any
    if (doc.webkitCancelFullScreen) {
      doc.webkitCancelFullScreen()
    } else if (doc.exitFullscreen) {
      doc.exitFullscreen()
    } else if (doc.mozCancelFullScreen) {
      doc.mozCancelFullScreen()
    } else if (doc.msExitFullscreen) {
      doc.msExitFullsreen()
    }
  }

  function changeFullscreen() {
    setFullScreen((fullScreen) => !fullScreen)
  }

  useEffect(() => {
    document.addEventListener('webkitfullscreenchange', changeFullscreen)
  }, [])

  return { fullScreen, enterFullScreen, exitFullScreen }
}
