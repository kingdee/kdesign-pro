import { Spin } from '@kdcloudjs/kdesign'

export interface ILoading {
  type?: 'page' | 'container' | undefined
}

export default ({ type = 'page' }: ILoading) => {
  const styles = {
    flex: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: type === 'page' ? '100vh' : '100%',
  }

  return (
    <div style={styles}>
      <Spin type={type} />
    </div>
  )
}
