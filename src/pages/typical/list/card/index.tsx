import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { Space, Button, Icon, Pagination, Card, Row, Col, Filter, Checkbox } from '@kdcloudjs/kdesign'
import { useIntl } from 'umi'
import { getListCard } from '@/services/list'

import listStyles from '../index.less'
import styles from './index.less'

const views = [
  { type: 'list', icon: 'classify' },
  { type: 'card', icon: 'all-border' },
  { type: 'chart', icon: 'chart' },
]

export default () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [viewType, setViewType] = useState('card')
  const [data, setData] = useState<any[]>([])
  const [filterConditions, setFilterConditions] = useState([])
  const [filterDefaultValue, setFilterDefaultValue] = useState([])
  const searchProps = {
    tags: [
      { value: 'label', tag: i18n('list.card1') },
      { value: 'code', tag: i18n('list.card2') },
    ],
  }
  async function initListBasic() {
    const glc = await getListCard()
    setData(glc.dataSource)
    setFilterConditions(glc.filterConditions)
    setFilterDefaultValue(glc.filterDefaultValue)
  }

  useEffect(() => {
    initListBasic()
  }, [])
  const handleChangeView = (type: string) => {
    setViewType(type)
  }

  const handleChange = (key: string) => {
    const nextData = data.map((item) => {
      if (item.key === key) {
        item.checked = !item.checked
      }
      return item
    })
    setData(nextData)
  }

  const handleSelectAll = () => {
    let nextData = null
    if (selectedItems.length === data.length) {
      nextData = data.map((item) => {
        item.checked = false
        return item
      })
    } else {
      nextData = data.map((item) => {
        item.checked = true
        return item
      })
    }
    setData(nextData)
  }

  const selectedItems = data.filter((item) => item.checked)

  return (
    <div className={listStyles.container}>
      <div className={listStyles.panel}>
        <div className={listStyles.filter}>
          {filterConditions && (
            <Filter
              style={{ width: '100%' }}
              title={i18n('list.card3')}
              search={searchProps}
              conditions={filterConditions}
              defaultValue={filterDefaultValue as any}
              onSchemeSave={() => {}}
            />
          )}
        </div>
        <Space className={listStyles.operation} size={12}>
          <Button type="primary">{i18n('add')}</Button>
          <Button type="primary">{i18n('save')}</Button>
          <Button type="primary">{i18n('commit')}</Button>
          <Button type="primary">{i18n('delete')}</Button>
          <Button type="primary">{i18n('list.card4')}</Button>
          <Button type="primary">{i18n('list.card5')}</Button>
          <Button.Dropdown
            overlay={[
              { value: 'approve', label: i18n('approve') },
              { value: 'reject', label: i18n('list.card6') },
            ]}
          >
            {i18n('more')}
          </Button.Dropdown>
          <Space className={listStyles.viewSwitch}>
            {views.map(({ type, icon }) => (
              <Icon
                key={type}
                type={icon}
                className={classnames({ active: type === viewType })}
                onClick={handleChangeView.bind(null, type)}
              />
            ))}
          </Space>
        </Space>
      </div>
      <div className={listStyles.main} style={{ backgroundColor: 'transparent' }}>
        <div className={listStyles.pagination}>
          <Space className={listStyles.notify} size={8}>
            <span>
              {i18n('selected')}
              {selectedItems.length}
              {i18n('list.card7')}，{i18n('list.card8')}
              {data.length}
            </span>
            <Button type="text" onClick={handleSelectAll}>
              {selectedItems.length === data?.length ? i18n('selectCancel') : i18n('selectAll')}
            </Button>
          </Space>
          <Pagination defaultCurrent={1} total={data.length} />
        </div>
        <div className={styles.cardList}>
          <Row gutter={[10, 10]}>
            {data.map(({ key, checked, title, name, dep, way, time, cost }, index) => (
              <Col span={6} key={index}>
                <Card title={title} style={{ width: '100%' }} hoverable>
                  <ul className={styles.attr}>
                    <li>{name + dep}</li>
                    <li>{way}</li>
                    <li>{time}</li>
                    <li className={styles.amount}>{cost}</li>
                  </ul>

                  <Checkbox className={styles.checkbox} checked={checked} onChange={() => handleChange(key)} />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}
