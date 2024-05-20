import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { Space, Button, Pagination, Filter, Icon, Table } from '@kdcloudjs/kdesign'
import { useIntl } from 'umi'
import { getListForm } from '@/services/list'

import globalStyles from '@/layouts/global.less'
import listStyles from '../index.less'
import styles from './index.less'

const views = [
  { type: 'list', icon: 'classify' },
  { type: 'card', icon: 'more-item' },
  { type: 'chart', icon: 'waiting' },
]

export default () => {
  const { formatMessage, locale: lang } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [listForm, setListForm] = useState<{ [key: string]: any }>({})
  const [openKeys, setOpenKeys] = useState<string[]>(['2'])

  async function initPage() {
    const data = await getListForm()
    setListForm(data)
  }

  useEffect(() => {
    initPage()
  }, [lang])

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

  const searchProps = {
    tags: [
      { value: 'label', tag: i18n('list.form1') },
      { value: 'code', tag: i18n('list.form2') },
    ],
  }

  const detailColumns = [
    { code: 'code', width: 100, name: i18n('list.form3'), align: 'left' },
    { code: 'name', width: 200, name: i18n('list.form4'), align: 'left' },
    { code: 'property', width: 200, name: i18n('list.form5'), align: 'left' },
    { code: 'quantity', width: 100, name: i18n('list.form6'), align: 'right' },
    { code: 'unit', width: 100, name: i18n('list.form7'), align: 'left' },
    { code: 'price', width: 100, name: i18n('list.form8'), align: 'right' },
    { code: 'sum', width: 100, name: i18n('list.form9'), align: 'right' },
    { code: 'existQuantity', width: 100, name: i18n('list.form10'), align: 'left' },
    { code: 'steamQuantity', width: 100, name: i18n('list.form11'), align: 'left' },
    { code: 'address', width: 200, name: i18n('list.form12'), align: 'left' },
    { code: 'memo', width: 200, name: i18n('remark'), align: 'left' },
  ]

  const handleSelectAll = () => {
    if (rows.length === dataSource.length) {
      setRows([])
    } else {
      const keys = dataSource.map((item: any) => item.index)
      setRows(keys)
    }
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
    { code: 'date', width: 100, name: i18n('list.form13') },
    {
      code: 'number',
      width: 150,
      name: i18n('list.form14'),
      render: (text: string) => (
        <a href="true" style={{ color: '#0E5FD8' }} onClick={(e) => e.preventDefault()}>
          {text}
        </a>
      ),
    },
    { code: 'time', width: 180, name: i18n('list.form15') },
    { code: 'principal', width: 100, name: i18n('list.form16') },
    { code: 'name', width: 200, name: i18n('list.form17') },
    { code: 'amount', width: 150, name: i18n('list.form18'), align: 'right' },
    {
      code: 'status',
      width: 200,
      name: i18n('list.form19'),
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
          {openKeys.find((item) => item === key) ? i18n('list.form20') : i18n('list.form21')}
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

  const dropdownProps: any = { getPopupContainer: () => document.body }

  return (
    <div className={listStyles.container}>
      <div className={listStyles.panel}>
        <div className={listStyles.filter}>
          {filterConditions && (
            <Filter
              style={{ width: '100%' }}
              title={i18n('list.form22')}
              search={searchProps}
              conditions={filterConditions}
              defaultValue={filterDefaultValue as any}
              onSchemeSave={() => {}}
            />
          )}
        </div>
        <Space className={listStyles.operation} size={12}>
          <Button type="primary">{i18n('add')}</Button>
          <Button type="primary">{i18n('list.form23')}</Button>
          <Button type="primary">{i18n('list.form24')}</Button>
          <Button type="primary">{i18n('list.form25')}</Button>
          <Button type="primary">{i18n('list.form26')}</Button>
          <Button type="primary">{i18n('list.form27')}</Button>
          <Button type="primary">{i18n('list.form28')}</Button>
          <Button type="primary">{i18n('list.form29')}</Button>
          <Button.Dropdown
            overlay={[
              { value: 'input', label: i18n('list.form30') },
              { value: 'output', label: i18n('list.form31') },
            ]}
          >
            {i18n('more')}
          </Button.Dropdown>
          <Space className={listStyles.viewSwitch}>
            {views.map(({ type, icon }) => (
              <Icon key={type} type={icon} className={classnames({ active: type === 'list' })} />
            ))}
          </Space>
        </Space>
      </div>
      <div className={listStyles.main}>
        <div className={listStyles.pagination}>
          <Space className={listStyles.notify} size={8}>
            <span>
              {i18n('selected')}
              {rows.length}
              {i18n('list.form32')}，{i18n('list.form33')}
              {dataSource?.length}
            </span>
            <Button type="text" onClick={handleSelectAll}>
              {rows.length === dataSource?.length ? i18n('selectCancel') : i18n('selectAll')}
            </Button>
          </Space>
          <Pagination defaultCurrent={6} total={200} dropdownProps={dropdownProps} />
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
