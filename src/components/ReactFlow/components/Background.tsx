import { Background as BackgroundRoot, BackgroundProps } from 'reactflow'

const Background: React.FC<BackgroundProps> = ({
  ...props
}: BackgroundProps) => {
  return <BackgroundRoot {...props} />
}

export { Background }
