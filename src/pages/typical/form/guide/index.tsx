import { useState } from 'react'
import { Icon, Steps, Step, Button, Space } from '@kdcloudjs/kdesign'
import classnames from 'classnames'
import Goods from './goods'
import Contact from './contact'
import Proof from './proof'
import formStyles from '../index.less'
import styles from './index.less'

export default function (props: any) {
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
          {['商品信息', '联系信息', '凭证材料'].map((title, index) => (
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
          上一步
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
          下一步
        </Button>
      </Space>
    </div>
  )
}
