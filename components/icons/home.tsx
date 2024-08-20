import IconComponent from './icon-builder'

const styles = {
  Icon: {
    color: '#1473e6',
    fill: '#1473e6',
    fontSize: '2.375rem', // 38px / 16
    top: '1rem', // 16px / 16
    left: '1.25rem', // 20px / 16
    width: '2.375rem', // 38px / 16
    height: '2.25rem', // 36px / 16
  },
}

interface IconProps {
  IconComponentProp?: React.FC<React.SVGProps<SVGSVGElement>>
}

const Icon: React.FC<IconProps> = ({ IconComponentProp }) => {
  const Component = IconComponentProp || IconComponent
  return <Component style={styles.Icon} />
}

export default Icon