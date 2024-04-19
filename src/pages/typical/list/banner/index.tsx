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
import { useIntl } from 'umi'
import { getListBanner } from '@/services/list'

import listStyles from '../index.less'
import styles from './index.less'

export default () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [viewType, setViewType] = useState('list')
  const [data, setData] = useState<any[]>([])
  const [filterConditions, setFilterConditions] = useState([])
  const [filterDefaultValue, setFilterDefaultValue] = useState([])

  const views = [
    { type: 'list', icon: 'classify' },
    { type: 'card', icon: 'all-border' },
    { type: 'chart', icon: 'chart' },
  ]
  const searchProps = {
    tags: [
      { value: 'label', tag: i18n('list.banner1') },
      { value: 'code', tag: i18n('list.banner2') },
    ],
  }
  const fields: Record<string, string> = {
    picture: i18n('list.banner3'),
    name: i18n('list.banner1'),
    code: i18n('list.banner2'),
    standard: i18n('list.banner4'),
    color: i18n('list.banner5'),
    size: i18n('list.banner6'),
    order: i18n('list.banner7'),
    confirmSize: i18n('list.banner8'),
    price: i18n('list.banner9'),
    originPrice: i18n('list.banner10'),
    status: i18n('list.banner11'),
  }

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
      content: i18n('list.banner12'),
      closable: true,
    })
  }

  function cancel() {
    Message.success({
      content: i18n('list.banner13'),
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
              title={`${i18n('list.banner14')}123`}
              search={searchProps}
              conditions={filterConditions}
              defaultValue={filterDefaultValue as any}
              onSchemeSave={() => {}}
            />
          )}
        </div>
        <Space className={listStyles.operation} size={12}>
          <Button.Dropdown type="similar" overlay={[{ value: 'copy', label: i18n('copy') }]}>
            {i18n('add')}
          </Button.Dropdown>
          <Button type="primary">{i18n('list.banner15')}</Button>
          <Button.Dropdown
            overlay={[
              { value: 'input', label: i18n('list.banner16') },
              { value: 'output', label: i18n('list.banner17') },
            ]}
          >
            {i18n('list.banner18')}
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
              {i18n('list.banner19')}
              {selectedItems.length}
              {i18n('list.banner20')}，{i18n('list.banner21')}
              {data.length}
            </span>
            <Button type="text" onClick={handleSelectAll}>
              {selectedItems.length === data?.length ? i18n('selectCancel') : i18n('selectAll')}
            </Button>
          </Space>
          <Pagination
            defaultCurrent={1}
            total={data.length}
            // @ts-ignore
            dropdownProps={{ getPopupContainer: () => document.body }}
          />
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
              statusStr,
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
                    <Tag type="status" color={status}>
                      {statusStr}
                    </Tag>
                  </Col>
                </Row>
                <div className={styles.actions}>
                  <Icon type="put-on" />
                  <Icon type="edit-border" />
                  <Popconfirm
                    message={`${i18n('list.banner24')}？`}
                    onConfirm={confirm}
                    onCancel={cancel}
                    placement="topLeft"
                  >
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
