import { Controls as ControlsRoot, ControlProps } from 'reactflow'

const Controls: React.FC<ControlProps> = ({ ...props }: ControlProps) => {
  return <ControlsRoot {...props} />
}

export { Controls }
