import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import {
  Space,
  Button,
  Icon,
  Pagination,
  Checkbox,
  Row,
  Col,
  Tag,
  Filter,
  Popconfirm,
  Message,
} from '@kdcloudjs/kdesign'
import { getListBanner } from '@/services/list'

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

const fields: Record<string, string> = {
  picture: '照片',
  name: '名称',
  code: '编码',
  standard: '规范',
  color: '颜色',
  size: '尺寸',
  order: '下单',
  confirmSize: '确认',
  price: '价格',
  originPrice: '原价',
  status: '状态',
}

export default () => {
  const [viewType, setViewType] = useState('list')
  const [data, setData] = useState<any[]>([])
  const [filterConditions, setFilterConditions] = useState([])
  const [filterDefaultValue, setFilterDefaultValue] = useState([])

  async function initListBasic() {
    const glb = await getListBanner()
    setData(glb.dataSource)
    setFilterConditions(glb.filterConditions)
    setFilterDefaultValue(glb.filterDefaultValue)
  }

  useEffect(() => {
    initListBasic()
  }, [])
  const handleChangeView = (type: string) => {
    setViewType(type)
  }

  const handleChange = (key: string) => {
    const nextData: any = data.map((item: any) => {
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

  function confirm() {
    Message.success({
      content: '点击了确定',
      closable: true,
    })
  }

  function cancel() {
    Message.success({
      content: '点击了取消',
      closable: true,
    })
  }

  const selectedItems = data.filter((item) => item.checked)

  return (
    <div className={listStyles.container}>
      <div className={listStyles.panel}>
        <div className={listStyles.filter}>
          {filterConditions && (
            <Filter
              style={{ width: '100%' }}
              title="商品管理123"
              search={searchProps}
              conditions={filterConditions}
              defaultValue={filterDefaultValue as any}
              onSchemeSave={() => {}}
            />
          )}
        </div>
        <Space className={listStyles.operation} size={12}>
          <Button.Dropdown type="similar" overlay={[{ value: 'copy', label: '复制' }]}>
            新增
          </Button.Dropdown>
          <Button type="primary">取消订单</Button>
          <Button.Dropdown
            overlay={[
              { value: 'input', label: '引入数据' },
              { value: 'output', label: '引出数据' },
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
              已选
              {selectedItems.length}
              条数据，共
              {data.length}
            </span>
            <Button type="text" onClick={handleSelectAll}>
              {selectedItems.length === data?.length ? '取消选择' : '选择全部'}
            </Button>
          </Space>
          <Pagination defaultCurrent={1} total={data.length} />
        </div>
        <ul className={styles.cardList}>
          {data.map(
            ({
              key,
              checked,
              picture,
              name,
              code,
              standard,
              color,
              size,
              order,
              confirmSize,
              price,
              originPrice,
              status,
              promotion,
            }) => (
              <li key={key} className={styles.item}>
                <Checkbox className={styles.checkbox} checked={checked} onChange={() => handleChange(key)} />
                <Row>
                  <Col span={2}>
                    <div className={styles.picture}>
                      <img src={require(`@/assets/images/${picture}.png`)} alt={picture} />
                    </div>
                  </Col>
                  <Col span={5}>
                    <ul>
                      <li>{`${fields.name}：${name}`}</li>
                      <li>{`${fields.code}：${code}`}</li>
                      <li>
                        {`${fields.standard}：${standard}  ${
                          promotion && <span className={styles.promotion}>促</span>
                        }`}
                      </li>
                    </ul>
                  </Col>
                  <Col span={5}>
                    <ul>
                      <li>{`${fields.color}：${color}`}</li>
                      <li>{`${fields.size}：${size}`}</li>
                      <li>{`${fields.order}：${order}`}</li>
                    </ul>
                  </Col>
                  <Col span={5}>{`${fields.confirmSize}：${confirmSize}`}</Col>
                  <Col span={5}>
                    <span className={styles.price}>{`￥${price}`}</span>
                    <span className={styles.originPrice}>{`￥${originPrice}`}</span>
                  </Col>
                  <Col span={2}>
                    <Tag type="status" color={status === '已上架' ? 'success' : 'expired'}>
                      {status}
                    </Tag>
                  </Col>
                </Row>
                <div className={styles.actions}>
                  <Icon type="put-on" />
                  <Icon type="edit-border" />
                  <Popconfirm message="你确定要删除吗？" onConfirm={confirm} onCancel={cancel} placement="topLeft">
                    <Icon type="delete" />
                  </Popconfirm>
                </div>
              </li>
            ),
          )}
        </ul>
      </div>
    </div>
  )
}
