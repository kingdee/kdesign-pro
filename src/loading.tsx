import { Spin } from '@kdcloudjs/kdesign'

type TType = 'page' | 'container' | 'component' | undefined

interface IProps {
  type?: TType
}

export default function ({ type = 'page' }: IProps) {
  const styles = {
    flex: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  }

  return (
    <div style={styles}>
      <Spin type={type} />
    </div>
  )
}
