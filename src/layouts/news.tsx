import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useIntl } from 'umi'
import classnames from 'classnames'
import { Tabs, Icon, Button, Empty } from '@kdcloudjs/kdesign'
import { getUserTasks, getUserMessages } from '@/services/user'

import styles from './news.less'

export default function News() {
  const intl = useIntl()
  const [exist, setExist] = useState(false)
  const [visible, setVisible] = useState(false)
  const handleClose = () => setVisible(false)
  const handleSwitchBar = () => setVisible(!visible)

  const handleClick = () => {
    if (exist) {
      handleSwitchBar()
    } else {
      setExist(true)
      setTimeout(() => setVisible(true), 0)
    }
  }

  const [tasks, setTasks] = useState<Record<string, any>[]>([])
  const [messages, setMessages] = useState<Record<string, any>[]>([])

  async function getNews() {
    const ts = await getUserTasks()
    setTasks(ts)

    const msg = await getUserMessages()
    setMessages(msg)
  }

  useEffect(() => {
    getNews()
  }, [])

  const NewsHandle = (
    <div className={styles.newsHandle} onClick={handleClick}>
      <Icon type="bellOutlined" className={styles.icon} />
      <i className={styles.count}>{tasks.length + messages.length}</i>
    </div>
  )

  const NewsBar = (
    <div className={classnames(styles.news, { [styles.visible]: visible })}>
      <div className={styles.mask} onClick={handleClose} />
      <div className={styles.bar}>
        <Tabs>
          <Tabs.TabPane key="task" tab={intl.formatMessage({ id: 'header.news.task', defaultMessage: '任务' })}>
            {tasks.length > 0 ? (
              <ul className={styles.list}>
                {tasks.map(({ title, time, code, status }) => (
                  <li className={styles.item} key={code}>
                    <div className={styles.header}>
                      <h3 className={styles.title}>{title}</h3>
                      <span className={styles.time}>{time}</span>
                    </div>
                    <div className={styles.content}>
                      <span className={styles.code}>
                        {`${intl.formatMessage({ id: 'header.news.code', defaultMessage: '单据编号' })}：${code}`}
                      </span>
                      <span className={styles.status}>{status}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <Empty className={styles.empty} />
            )}
          </Tabs.TabPane>
          <Tabs.TabPane key="message" tab={intl.formatMessage({ id: 'header.news.message', defaultMessage: '消息' })}>
            {messages.length > 0 ? (
              <ul className={styles.list}>
                {messages.map(({ title, time, message, code }) => (
                  <li className={styles.item} key={code}>
                    <div className={styles.header}>
                      <h3 className={styles.title}>{title}</h3>
                      <span className={styles.time}>{time}</span>
                    </div>
                    <div className={styles.content}>
                      <span className={styles.message}>{message}</span>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <Empty className={styles.empty} />
            )}
          </Tabs.TabPane>
        </Tabs>
        <Button type="text" className={styles.more}>
          {intl.formatMessage({ id: 'header.news.more', defaultMessage: '更多' })}
        </Button>
      </div>
    </div>
  )

  return (
    <>
      {NewsHandle}
      {exist && ReactDOM.createPortal(NewsBar, document.body)}
    </>
  )
}
