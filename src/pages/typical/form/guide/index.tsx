import { useState } from 'react'
import { Icon, Steps, Step, Button, Space } from '@kdcloudjs/kdesign'
import classnames from 'classnames'
import { useIntl } from 'umi'
import Goods from './goods'
import Contact from './contact'
import Proof from './proof'
import formStyles from '../index.less'
import styles from './index.less'

export default () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [current, setCurrent] = useState<number>(0)

  const mapCont: Record<string, any> = {
    0: <Goods />,
    1: <Contact />,
    2: <Proof />,
  }

  return (
    <div className={classnames(formStyles.form, styles.container)}>
      <div className={formStyles.panel}>
        <Steps className={formStyles.steps} current={current} icons={{ finish: <Icon type="right-bold" /> }}>
          {[i18n('form.guid.index1'), i18n('form.guid.index2'), i18n('form.guid.index3')].map((title, index) => (
            <Step key={title} onClick={setCurrent.bind(null, index)} title={title} />
          ))}
        </Steps>
      </div>
      {mapCont[current]}
      <Space className={styles.buttons} size={12}>
        <Button
          type="primary"
          disabled={current === 0}
          onClick={() => {
            const c = current - 1
            if (c >= 0) {
              setCurrent(c)
            }
          }}
        >
          {i18n('form.guid.index4')}
        </Button>
        <Button
          type="primary"
          disabled={current === 2}
          onClick={() => {
            const c = current + 1
            if (c < 3) {
              setCurrent(c)
            }
          }}
        >
          {i18n('form.guid.index5')}
        </Button>
      </Space>
    </div>
  )
}
