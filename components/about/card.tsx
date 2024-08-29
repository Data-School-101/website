import React from 'react'

interface CardProps {
  children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ children }) => {
  const styles = {
    card: {
      top: '7.25rem', // 116px / 16
      left: '1.5rem', // 24px / 16
      width: '87rem', // 1392px / 16
      height: '43.75rem', // 700px / 16
      backgroundColor: '#00063332',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }

  return <div style={styles.card}>{children}</div>
}

export default Card
