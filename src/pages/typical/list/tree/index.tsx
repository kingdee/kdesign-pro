import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { Space, Button, Icon, Pagination, Input, Tree, Filter, Table } from '@kdcloudjs/kdesign'
import { getListTree } from '@/services/list'

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

const columns = [
  { code: 'index', lock: true, width: 60, name: '#', align: 'center' },
  {
    code: 'number',
    width: 100,
    name: '单据编号',
    render: (text: string) => (
      <a href="true" style={{ color: '#0E5FD8' }} onClick={(e) => e.preventDefault()}>
        {text}
      </a>
    ),
  },
  { code: 'name', width: 200, name: '名称' },
  { code: 'type', width: 100, name: '项目类别', align: 'center' },
  { code: 'flow', width: 100, name: '资金流向', align: 'center' },
  {
    code: 'business',
    width: 100,
    name: '经营活动',
    align: 'center',
    render: () => <img src={require(`../../../../assets/images/right.png`)} style={{ width: '16px' }} />,
  },
]

export default () => {
  const [expandedKeys, setExpandedKeys] = useState(['1', '1-1'])
  const [selectedKeys, setSelectedKeys] = useState(['1-1'])
  const [listTree, setListTree] = useState<{ [key: string]: any }>({})

  async function initListTree() {
    const data = await getListTree()
    setListTree(data)
  }

  useEffect(() => {
    initListTree()
  }, [])

  const { filterConditions, filterDefaultValue, dataSource, treeData } = listTree

  const onSelect = (sks: string[]) => {
    setSelectedKeys(sks)
  }

  const onExpand = (eks: string[]) => {
    setExpandedKeys(eks)
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setViewType] = useState('list')

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
              title="项目流量现金"
              search={searchProps}
              conditions={filterConditions}
              defaultValue={filterDefaultValue as any}
              onSchemeSave={() => {}}
            />
          )}
        </div>
        <Space className={listStyles.operation} size={12}>
          <Button type="primary">新增</Button>
          <Button type="primary">删除</Button>
          <Button.Dropdown type="similar" overlay={[{ value: 'enabled', label: '启用' }]}>
            禁用
          </Button.Dropdown>
          <Button.Dropdown type="similar" overlay={[{ value: 'cancel', label: '取消分配' }]}>
            分配
          </Button.Dropdown>
          <Button.Dropdown
            overlay={[
              { value: 'input', label: '引入数据' },
              { value: 'output', label: '引出数据' },
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
      <div className={styles.content}>
        <div className={styles.sider}>
          <Input placeholder="请输入编码/名称" borderType="bordered" prefix={<Icon type="search" />} />
          <div className={globalStyles.container} style={{ margin: '21px -18px 0', fontSize: '12px' }}>
            <Tree
              treeData={treeData}
              selectedKeys={selectedKeys}
              expandedKeys={expandedKeys}
              onSelect={onSelect}
              onExpand={onExpand}
              virtual={false}
            />
          </div>
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
    </div>
  )
}
