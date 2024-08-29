import React from 'react'

interface TextComponentProps {
  text?: string
  fontSize?: string
  fontWeight?: number
  lineHeight?: string
}

const TextComponent: React.FC<TextComponentProps> = ({
  text = 'Default Text',
  fontSize = '3rem', // default to 48px / 16
  fontWeight = 700,
  lineHeight = '3rem', // default to 48px / 16
}) => {
  const styles = {
    text: {
      // color: '#ffffff',
      fontSize: fontSize,
      paddingTop: "2rem",
      paddingLeft: "14rem",
      paddingRight: "14rem",
      // fontFamily: 'Source Sans Pro, sans-serif',
      fontWeight: fontWeight,
      lineHeight: lineHeight,
      textAlign: 'center',
    },
  }

  return <div style={styles.text}>{text}</div>
}

export default TextComponent
