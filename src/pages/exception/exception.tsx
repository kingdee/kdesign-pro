import { history } from 'umi'
import { Button } from '@kdcloudjs/kdesign'
import styles from './exception.less'

interface IExceptionProps {
  status: string
  message: string
}

export default ({ status, message }: IExceptionProps) => {
  const handleBackHome = () => {
    history.push('/')
  }
  return (
    <ul className={styles.exception}>
      <li className={styles.img}>
        <img src={require(`@/assets/images/${status}.png`)} alt={String(status)} height="160" />
      </li>
      <li className={styles.status}>{status}</li>
      <li className={styles.message}>{message}</li>
      <li>
        <Button type="primary" onClick={handleBackHome}>
          返回主页
        </Button>
      </li>
    </ul>
  )
}
