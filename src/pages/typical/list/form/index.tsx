import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { Space, Button, Pagination, Filter, Icon, Table } from '@kdcloudjs/kdesign'
import { getListForm } from '@/services/list'

import globalStyles from '@/layouts/global.less'
import listStyles from '../index.less'
import styles from './index.less'

const views = [
  { type: 'list', icon: 'classify' },
  { type: 'card', icon: 'more-item' },
  { type: 'chart', icon: 'waiting' },
]

const searchProps = {
  tags: [
    { value: 'label', tag: '名称' },
    { value: 'code', tag: '编码' },
  ],
}

const detailColumns = [
  { code: 'code', width: 100, name: '商品编码', align: 'left' },
  { code: 'name', width: 100, name: '商品名称', align: 'left' },
  { code: 'property', width: 100, name: '商品属性', align: 'left' },
  { code: 'quantity', width: 100, name: '商品数量', align: 'right' },
  { code: 'unit', width: 100, name: '计量单位', align: 'left' },
  { code: 'price', width: 100, name: '单价', align: 'right' },
  { code: 'sum', width: 100, name: '金额', align: 'right' },
  { code: 'existQuantity', width: 100, name: '已发数量', align: 'left' },
  { code: 'steamQuantity', width: 100, name: '待发数量', align: 'left' },
  { code: 'address', width: 100, name: '发货地点', align: 'left' },
  { code: 'memo', width: 100, name: '备注', align: 'left' },
]

export default () => {
  const [listForm, setListForm] = useState<{ [key: string]: any }>({})
  const [openKeys, setOpenKeys] = useState<string[]>(['2'])

  async function initListForm() {
    const data = await getListForm()
    setListForm(data)
  }

  useEffect(() => {
    initListForm()
  }, [])

  const { filterConditions, filterDefaultValue, dataSource, detailData } = listForm

  const [rows, setRows] = useState<string[]>([])

  const rowSelection = {
    type: 'checkbox',
    value: rows,
    onChange: setRows,
    checkboxPlacement: 'start',
    clickArea: 'checkbox',
    checkboxColumn: { lock: true },
    highlightRowWhenSelected: true,
  }

  const handleSelectAll = () => {
    if (rows.length === dataSource.length) {
      setRows([])
    } else {
      const keys = dataSource.map((item: any) => item.index)
      setRows(keys)
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setViewType] = useState('list')

  const handleChangeView = (type: string) => {
    setViewType(type)
  }

  const handleSwitchDetail = (key: string, e: any) => {
    e.stopPropagation()
    const isOpened = openKeys.find((item) => item === key)
    if (isOpened) {
      const nextOpenKeys = openKeys.filter((item) => item !== key)
      setOpenKeys(nextOpenKeys)
    } else {
      const nextOpenKeys = [...openKeys, key]
      setOpenKeys(nextOpenKeys)
    }
  }

  const columns = [
    { code: 'index', lock: true, width: 60, name: '#', align: 'left' },
    { code: 'date', width: 100, name: '申请日期' },
    {
      code: 'number',
      width: 150,
      name: '单据编号',
      render: (text: string) => (
        <a href="true" style={{ color: '#0E5FD8' }} onClick={(e) => e.preventDefault()}>
          {text}
        </a>
      ),
    },
    { code: 'time', width: 180, name: '下单时间' },
    { code: 'principal', width: 100, name: '负责人' },
    { code: 'name', width: 100, name: '客户名称' },
    { code: 'amount', width: 150, name: '订单金额', align: 'right' },
    {
      code: 'status',
      width: 100,
      name: '订单状态',
      render: (text: string) => (
        <a href="true" style={{ color: '#5582F3' }} onClick={(e) => e.preventDefault()}>
          {text}
        </a>
      ),
    },
    {
      code: 'spread',
      width: 100,
      name: '',
      align: 'center',
      render: (key: string) => (
        <Button type="text" onClick={(e) => handleSwitchDetail(key, e)}>
          {openKeys.find((item) => item === key) ? '收起' : '展开'}
          <Icon
            type={openKeys.find((item) => item === key) ? 'arrow-up' : 'arrow-down'}
            style={{ marginLeft: 5, fontSize: 14 }}
          />
        </Button>
      ),
    },
  ]

  const rowDetail = {
    clickArea: 'content',
    stopClickEventPropagation: true,
    defaultOpenKeys: openKeys,
    expandColumnCode: 'spread',
    renderDetail() {
      return (
        <Table
          style={{ flex: '1 1 100px', overflow: 'auto' }}
          className={styles.detail}
          dataSource={detailData}
          columns={detailColumns as any}
          useOuterBorder={false}
          columnResize
        />
      )
    },
  }

  return (
    <div className={listStyles.container}>
      <div className={listStyles.panel}>
        <div className={listStyles.filter}>
          {filterConditions && (
            <Filter
              style={{ width: '100%' }}
              title="订单中心"
              search={searchProps}
              conditions={filterConditions}
              defaultValue={filterDefaultValue as any}
              onSchemeSave={() => {}}
            />
          )}
        </div>
        <Space className={listStyles.operation} size={12}>
          <Button type="primary">新增</Button>
          <Button type="primary">取消订单</Button>
          <Button type="primary">确认订单</Button>
          <Button type="primary">取消确认</Button>
          <Button type="primary">查看评价</Button>
          <Button type="primary">收获</Button>
          <Button type="primary">发货</Button>
          <Button type="primary">变更</Button>
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
                className={classnames({ active: type === 'list' })}
                onClick={handleChangeView.bind(null, type)}
              />
            ))}
          </Space>
        </Space>
      </div>
      <div className={listStyles.main}>
        <div className={listStyles.pagination}>
          <Space className={listStyles.notify} size={8}>
            <span>
              已选
              {rows.length}
              条数据，共
              {dataSource?.length}
            </span>
            <Button type="text" onClick={handleSelectAll}>
              {rows.length === dataSource?.length ? '取消选择' : '选择全部'}
            </Button>
          </Space>
          <Pagination defaultCurrent={6} total={200} />
        </div>
        <div className={globalStyles.tableContainer}>
          <div className={globalStyles.settings}>
            <Icon type="setting" style={{ fontSize: 14, cursor: 'pointer' }} />
          </div>
          {dataSource && (
            <Table
              useOuterBorder={false}
              style={{ flex: '1 1 100px', overflow: 'auto' }}
              dataSource={dataSource}
              columns={columns as any}
              rowSelection={rowSelection as any}
              primaryKey="index"
              rowDetail={rowDetail as any}
              columnResize
            />
          )}
        </div>
      </div>
    </div>
  )
}
