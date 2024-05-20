import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { Space, Button, Icon, Pagination, Table, Filter } from '@kdcloudjs/kdesign'
import { useIntl } from 'umi'
import { getListBasic } from '@/services/list'

import globalStyles from '@/layouts/global.less'
import listStyles from '../index.less'

export default () => {
  const { formatMessage, locale: lang } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [listBasic, setListBasic] = useState<{ [key: string]: any }>({})

  const views = [
    { type: 'list', icon: 'classify' },
    { type: 'card', icon: 'more-item' },
    { type: 'chart', icon: 'waiting' },
  ]

  const searchProps = {
    tags: [
      { value: 'label', tag: i18n('list.basic1') },
      { value: 'code', tag: i18n('list.basic2') },
    ],
  }

  const columns = [
    { code: 'index', lock: true, width: 60, name: '#' },
    { code: 'date', width: 100, name: i18n('list.basic3') },
    {
      code: 'number',
      width: 200,
      name: i18n('list.basic4'),
      render: (text: string) => (
        <a href="true" style={{ color: '#0E5FD8' }} onClick={(e) => e.preventDefault()}>
          {text}
        </a>
      ),
    },
    { code: 'subject', width: 200, name: i18n('list.basic5') },
    { code: 'reimburse', width: 100, name: i18n('list.basic6') },
    { code: 'vouch', width: 100, name: i18n('list.basic7') },
    { code: 'cash', width: 150, name: i18n('list.basic8') },
    {
      code: 'current',
      width: 250,
      name: i18n('list.basic9'),
      render: (text: string) => (
        <a href="true" style={{ color: '#0E5FD8' }} onClick={(e) => e.preventDefault()}>
          {text}
        </a>
      ),
    },
    {
      code: 'status',
      width: 150,
      name: i18n('list.basic10'),
      render: (text: string) => (
        <span
          style={text === i18n('list.basic11') ? { color: '#1BA854' } : { color: '#666666' }}
          onClick={(e) => e.preventDefault()}
        >
          {text}
        </span>
      ),
    },
    { code: 'department', width: 220, name: i18n('list.basic12') },
  ]

  async function initPage() {
    const data = await getListBasic()
    setListBasic(data)
  }

  useEffect(() => {
    initPage()
  }, [lang])

  const { filterConditions, filterDefaultValue, dataSource } = listBasic

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

  const dropdownProps: any = { getPopupContainer: () => document.body }

  return (
    <div className={listStyles.container}>
      <div className={listStyles.panel}>
        <div className={listStyles.filter}>
          {filterConditions && (
            <Filter
              style={{ width: '100%' }}
              title={i18n('list.basic13')}
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
          <Button type="primary">{i18n('list.basic14')}</Button>
          <Button.Dropdown
            type="similar"
            overlay={[
              { value: 'cancel', label: i18n('list.basic15') },
              { value: 'abandon', label: i18n('abandon') },
            ]}
          >
            {i18n('commit')}
          </Button.Dropdown>
          <Button.Dropdown type="similar" overlay={[{ value: 'checked', label: i18n('list.basic16') }]}>
            {i18n('list.basic17')}
          </Button.Dropdown>
          <Button.Dropdown
            type="similar"
            overlay={[
              { value: 'setting', label: i18n('list.basic18') },
              { value: 'print', label: i18n('list.basic19') },
            ]}
          >
            {i18n('list.basic20')}
          </Button.Dropdown>
          <Button type="primary">{i18n('list.basic21')}</Button>
          <Button type="primary">{i18n('list.basic22')}</Button>
          <Button.Dropdown
            overlay={[
              { value: 'step', label: i18n('list.basic23') },
              { value: 'video', label: i18n('list.basic24') },
            ]}
          >
            {i18n('list.basic25')}
          </Button.Dropdown>
          <Button type="primary">{i18n('refresh')}</Button>
          <Button type="primary">{i18n('back')}</Button>
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
              {i18n('list.basic26')}
              {rows?.length}
              {i18n('list.basic27')}，{i18n('list.basic28')}
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
              columnResize
            />
          )}
        </div>
      </div>
    </div>
  )
}
