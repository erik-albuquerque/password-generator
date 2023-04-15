import { ControlProps, Controls as ControlsRoot } from 'reactflow'

const Controls: React.FC<ControlProps> = ({ ...props }: ControlProps) => {
  return <ControlsRoot {...props} />
}

export { Controls }
