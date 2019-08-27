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

  return [width, height]
}

export function useHover() {
  const [hovering, setHovering] = React.useState(false)

  let id

  const onMouseOver = () => {
    setHovering(true)
    window.clearTimeout(id)
  }
  const onMouseOut = () => {
    id = window.setTimeout(() => {
      setHovering(false)
    }, 400)
  }

  return [
    hovering,
    {
      onMouseOut,
      onMouseOver,
    },
  ]
}
