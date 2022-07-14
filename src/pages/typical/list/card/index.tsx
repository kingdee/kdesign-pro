import React from 'react'
import classnames from 'classnames'
import { Space, Button, Icon, Pagination, Card, Row, Col, Filter, Checkbox } from '@kdcloudjs/kdesign'
import { getListCard } from '@/services/list'

import listStyles from '../index.less'
import styles from './index.less'

const views = [
  { type: 'list', icon: 'classify' },
  { type: 'card', icon: 'all-border' },
  { type: 'chart', icon: 'chart' },
]
const searchProps = {
  tags: [
    { value: 'label', tag: '名称' },
    { value: 'code', tag: '编码' },
  ],
}

export default function (props: any) {
  const [viewType, setViewType] = React.useState('card')
  const [data, setData] = React.useState([])
  const [filterConditions, setFilterConditions] = React.useState([])
  const [filterDefaultValue, setFilterDefaultValue] = React.useState([])

  async function initListBasic() {
    const { filterConditions, filterDefaultValue, dataSource } = await getListCard()
    setData(dataSource)
    setFilterConditions(filterConditions)
    setFilterDefaultValue(filterDefaultValue)
  }

  React.useEffect(() => {
    initListBasic()
  }, [])
  const handleChangeView = (type: string) => {
    setViewType(type)
  }

  const handleChange = (key: string, checked: boolean) => {
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
              title="任务审批"
              search={searchProps}
              conditions={filterConditions}
              defaultValue={filterDefaultValue}
              onSchemeSave={() => {}}
            />
          )}
        </div>
        <Space className={listStyles.operation} size={12}>
          <Button type="primary">新增</Button>
          <Button type="primary">保存</Button>
          <Button type="primary">提交</Button>
          <Button type="primary">删除</Button>
          <Button type="primary">审核</Button>
          <Button type="primary">影像查看</Button>
          <Button.Dropdown
            overlay={[
              { value: 'approve', label: '审批' },
              { value: 'reject', label: '驳回' },
            ]}
          >
            更多
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
              已选{selectedItems.length}条数据，共{data.length}条
            </span>
            <Button type="text" onClick={handleSelectAll}>
              {selectedItems.length === data?.length ? '取消选择' : '选择全部'}
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
                    <li>
                      {name} {dep}
                    </li>
                    <li>{way}</li>
                    <li>{time}</li>
                    <li className={styles.amount}>{cost}</li>
                  </ul>

                  <Checkbox
                    className={styles.checkbox}
                    checked={checked}
                    onChange={handleChange.bind(null, key, checked)}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  )
}
