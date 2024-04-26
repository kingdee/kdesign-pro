import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { Space, Button, Icon, Pagination, Input, Tree, Filter, Table } from '@kdcloudjs/kdesign'
import { useIntl } from 'umi'
import { getListTree } from '@/services/list'

import globalStyles from '@/layouts/global.less'
import listStyles from '../index.less'
import styles from './index.less'

const views = [
  { type: 'list', icon: 'classify' },
  { type: 'card', icon: 'more-item' },
  { type: 'chart', icon: 'waiting' },
]

export default () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [expandedKeys, setExpandedKeys] = useState(['1', '1-1'])
  const [selectedKeys, setSelectedKeys] = useState(['1-1'])
  const [listTree, setListTree] = useState<{ [key: string]: any }>({})

  const searchProps = {
    tags: [
      { value: 'label', tag: i18n('list.tree1') },
      { value: 'code', tag: i18n('list.tree2') },
    ],
  }

  const columns = [
    { code: 'index', lock: true, width: 60, name: '#', align: 'center' },
    {
      code: 'number',
      width: 150,
      name: i18n('list.tree3'),
      render: (text: string) => (
        <a href="true" style={{ color: '#0E5FD8' }} onClick={(e) => e.preventDefault()}>
          {text}
        </a>
      ),
    },
    { code: 'name', width: 400, name: i18n('list.tree1') },
    { code: 'type', width: 200, name: i18n('list.tree4'), align: 'center' },
    { code: 'flow', width: 100, name: i18n('list.tree5'), align: 'center' },
    {
      code: 'business',
      width: 100,
      name: i18n('list.tree6'),
      align: 'center',
      render: () => <img src={require('../../../../assets/images/right.png')} style={{ width: '16px' }} />,
    },
  ]

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
              title={i18n('list.tree7')}
              search={searchProps}
              conditions={filterConditions}
              defaultValue={filterDefaultValue as any}
              onSchemeSave={() => {}}
            />
          )}
        </div>
        <Space className={listStyles.operation} size={12}>
          <Button type="primary">{i18n('add')}</Button>
          <Button type="primary">{i18n('delete')}</Button>
          <Button.Dropdown type="similar" overlay={[{ value: 'enabled', label: i18n('list.tree8') }]}>
            {i18n('list.tree9')}
          </Button.Dropdown>
          <Button.Dropdown type="similar" overlay={[{ value: 'cancel', label: i18n('list.tree10') }]}>
            {i18n('list.tree11')}
          </Button.Dropdown>
          <Button.Dropdown
            overlay={[
              { value: 'input', label: i18n('list.tree12') },
              { value: 'output', label: i18n('list.tree13') },
            ]}
          >
            {i18n('more')}
          </Button.Dropdown>
          <Button type="primary">{i18n('refresh')}</Button>
          <Button type="primary">{i18n('back')}</Button>
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
          <Input
            placeholder={`${i18n('list.tree14')}/${i18n('list.tree1')}`}
            borderType="bordered"
            prefix={<Icon type="search" />}
          />
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
                {i18n('selected')}
                {rows.length}
                {i18n('list.tree15')}，{i18n('list.tree16')}
                {dataSource?.length}
              </span>
              <Button type="text" onClick={handleSelectAll}>
                {rows.length === dataSource?.length ? i18n('selectCancel') : i18n('selectAll')}
              </Button>
            </Space>
            <Pagination
              defaultCurrent={6}
              total={200}
              // @ts-ignore
              dropdownProps={{ getPopupContainer: () => document.body }}
            />
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
