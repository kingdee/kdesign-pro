import styles from './global.less'
import { IRouteComponentProps } from 'umi'

export default function (props: IRouteComponentProps) {
  return <div className={styles.content}>{props.children}</div>
}
