import IconComponent from './icon-builder'

const styles = {
  Icon: {
    color: '#1473e6',
    fill: '#1473e6',
    fontSize: '38px',
    top: '16px',
    left: '20px',
    width: '38px',
    height: '36px',
  },
}

const Icon = ({ IconComponentProp }) => {
  const Component = IconComponentProp || IconComponent
  return <Component style={styles.Icon} />
}

export default Icon