import { history, useIntl } from 'umi'
import { Button } from '@kdcloudjs/kdesign'
import styles from './exception.less'

interface IExceptionProps {
  status: string
  message: string
}

export default ({ status, message }: IExceptionProps) => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

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
          {i18n('homepage')}
        </Button>
      </li>
    </ul>
  )
}
