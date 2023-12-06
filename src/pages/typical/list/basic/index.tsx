import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { Space, Button, Icon, Pagination, Table, Filter } from '@kdcloudjs/kdesign'
import { getListBasic } from '@/services/list'

import globalStyles from '@/layouts/global.less'
import listStyles from '../index.less'

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

const columns = [
  { code: 'index', lock: true, width: 60, name: '#' },
  { code: 'date', width: 100, name: '申请日期' },
  {
    code: 'number',
    width: 200,
    name: '单据编号',
    render: (text: string) => (
      <a href="true" style={{ color: '#0E5FD8' }} onClick={(e) => e.preventDefault()}>
        {text}
      </a>
    ),
  },
  { code: 'subject', width: 200, name: '事由' },
  { code: 'reimburse', width: 100, name: '报销金额' },
  { code: 'vouch', width: 100, name: '核定金额' },
  { code: 'cash', width: 100, name: '付现金额' },
  {
    code: 'current',
    width: 200,
    name: '当前处理人',
    render: (text: string) => (
      <a href="true" style={{ color: '#0E5FD8' }} onClick={(e) => e.preventDefault()}>
        {text}
      </a>
    ),
  },
  {
    code: 'status',
    width: 70,
    name: '状态',
    render: (text: string) => (
      <span style={text === '已提交' ? { color: '#1BA854' } : { color: '#666666' }} onClick={(e) => e.preventDefault()}>
        {text}
      </span>
    ),
  },
  { code: 'department', width: 200, name: '部门' },
]

export default () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setViewType] = useState('list')
  const [listBasic, setListBasic] = useState<{ [key: string]: any }>({})

  async function initListBasic() {
    const data = await getListBasic()
    setListBasic(data)
  }

  useEffect(() => {
    initListBasic()
  }, [])

  const { filterConditions, filterDefaultValue, dataSource } = listBasic

  const handleChangeView = (type: string) => {
    setViewType(type)
  }

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
      const keys = Object.keys(dataSource)
      setRows(keys)
    }
  }
  return (
    <div className={listStyles.container}>
      <div className={listStyles.panel}>
        <div className={listStyles.filter}>
          {filterConditions && (
            <Filter
              style={{ width: '100%' }}
              title="差旅报销"
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
          <Button type="primary">删除</Button>
          <Button.Dropdown
            type="similar"
            overlay={[
              { value: 'cancel', label: '撤销' },
              { value: 'abandon', label: '废弃' },
            ]}
          >
            提交
          </Button.Dropdown>
          <Button.Dropdown type="similar" overlay={[{ value: 'checked', label: '下查' }]}>
            上查
          </Button.Dropdown>
          <Button.Dropdown
            type="similar"
            overlay={[
              { value: 'setting', label: '设置' },
              { value: 'print', label: '打印预览' },
            ]}
          >
            打印
          </Button.Dropdown>
          <Button type="primary">费用分摊</Button>
          <Button type="primary">费用预提</Button>
          <Button.Dropdown
            overlay={[
              { value: 'step', label: '查看流程图' },
              { value: 'video', label: '查看影像' },
            ]}
          >
            更多
          </Button.Dropdown>
          <Button type="primary">刷新</Button>
          <Button type="primary">退出</Button>
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
              {rows?.length}
              条数据，共
              {dataSource?.length}
            </span>
            <Button type="text" onClick={handleSelectAll}>
              {rows.length === dataSource?.length ? '取消选择' : '选择全部'}
            </Button>
          </Space>
          <Pagination defaultCurrent={6} total={200} dropdownProps={{ getPopupContainer: () => document.body }} />
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
              columnResize
            />
          )}
        </div>
      </div>
    </div>
  )
}
