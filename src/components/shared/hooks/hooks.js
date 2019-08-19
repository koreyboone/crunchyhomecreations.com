import React from 'react'

export function useWindowDimensions() {
  const [width, setWidth] = React.useState(0)
  const [height, setHeight] = React.useState(0)

  React.useEffect(() => {

    const listener = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }

    window.addEventListener('resize', listener)

    listener()

    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  return [
    width,
    height
  ]
}
