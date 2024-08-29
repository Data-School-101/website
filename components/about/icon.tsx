import React from 'react'

interface IconProps {
  pathData: string
  style?: React.CSSProperties
}

const IconComponent: React.FC<IconProps> = ({ pathData, style }) => {
  const defaultStyle = {
    color: '#1473e6',
    fill: '#1473e6',
    fontSize: '3rem', // Using rem units instead of pixels for scalability
    width: '3rem', // 48px in rem
    height: '3rem', // 48px in rem
  }

  return (
    <svg style={{ ...defaultStyle, ...style }} viewBox="0 0 512 512">
      <path d={pathData}></path>
    </svg>
  )
}

export default IconComponent
