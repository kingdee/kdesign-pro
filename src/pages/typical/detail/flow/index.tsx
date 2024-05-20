/* eslint-disable react/jsx-one-expression-per-line */
import { useEffect, useState } from 'react'
import classnames from 'classnames'
import {
  Space,
  Steps,
  Step,
  Button,
  Collapse,
  Row,
  Col,
  Input,
  Table,
  Icon,
  Pagination,
  Upload,
} from '@kdcloudjs/kdesign'

import { useIntl } from 'umi'
import globalStyles from '@/layouts/global.less'
import detailStyles from '../index.less'
import styles from './index.less'
import { icon1, icon2, icon6 } from './steps-icon'
import { getDetailFlow } from '@/services/detail'

export default () => {
  const { formatMessage, locale: lang } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [current, setCurrent] = useState(0)
  const [dataSource, setDataSource] = useState<any>([])

  async function initPage() {
    const { dataSource: ds } = await getDetailFlow()
    setDataSource(ds)
  }

  useEffect(() => {
    initPage()
  }, [lang])

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

  const columns = [
    { code: 'index', lock: true, width: 60, name: '#' },
    {
      code: 'code',
      width: 200,
      name: i18n('detail.flow1'),
      render: (text: string) => (
        <a href="true" style={{ color: '#0E5FD8' }} onClick={(e) => e.preventDefault()}>
          {text}
        </a>
      ),
    },
    { code: 'supplier', width: 200, name: i18n('detail.flow2') },
    { code: 'date', width: 200, name: i18n('detail.flow3') },
  ]

  const uploadProps = {
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange({ file, fileList }: Record<string, any>) {
      if (file.status !== 'uploading') {
        console.info(file, fileList)
      }
    },
    defaultFileList: [
      {
        uid: '1',
        size: '11429478.4',
        status: 'done',
        name: `${i18n('detail.flow4')}.ppt`,
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        size: '11429478.4',
        status: 'done',
        name: `${i18n('detail.flow5')}.ppt`,
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        size: '11429478.4',
        status: 'done',
        name: `${i18n('detail.flow6')}.ppt`,
        url: 'http://www.baidu.com/zzz.png',
      },
    ],
  }

  const mapCont: Record<string, JSX.Element> = {
    0: (
      <Collapse className={detailStyles.collapse} defaultActiveKey={['invite', 'bid']}>
        <Collapse.Panel header={i18n('detail.flow66')} panelKey="invite">
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow8')}</span>
                <Input value={`${i18n('detail.flow9')}ISC`} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow10')}</span>
                <Input value="ZC2007090001" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow89')}</span>
                <Input value={i18n('detail.flow90')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow85')}</span>
                <Input value={i18n('detail.flow86')} />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow54')}</span>
                <Input value={i18n('detail.flow16')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow87')}</span>
                <Input value={i18n('detail.flow88')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow57')}</span>
                <Input value="2022-07-05" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow83')}</span>
                <Input value={i18n('detail.flow84')} />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow60')}</span>
                <Input value={i18n('detail.flow61')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow62')}</span>
                <Input value="5,998,000.00" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow63')}</span>
                <Input value="10,000.00" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow64')}</span>
                <Input value="5,000.00" />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow65')}</span>
                <Input value={i18n('detail.flow28')} />
              </div>
            </Col>
            <Col span={18}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow29')}</span>
                <Input value={i18n('detail.flow30')} />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={24}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow31')}</span>
                <Input value={i18n('detail.flow32')} />
              </div>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel header={i18n('detail.flow33')} panelKey="bid">
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow67')}</span>
                <Input value={i18n('detail.flow68')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow85')}</span>
                <Input value={i18n('detail.flow37')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow89')}</span>
                <Input value={i18n('detail.flow39')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow71')}</span>
                <Input value={i18n('detail.flow84')} />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow73')}</span>
                <Input value="2022-07-31 10:50:33" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow74')}</span>
                <Input value={i18n('empty')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow75')}</span>
                <Input value={i18n('empty')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow76')}</span>
                <Input value={i18n('empty')} />
              </div>
            </Col>
          </Row>
        </Collapse.Panel>
      </Collapse>
    ),
    1: (
      <>
        <div className={styles.pagination}>
          <Space className={styles.notify} size={8}>
            <span>
              {i18n('detail.flow46')}
              {rows?.length}
              {i18n('detail.flow47')}，{i18n('detail.flow48')}
              {dataSource?.length}
              {i18n('detail.flow49')}
              （1
              {i18n('detail.flow50')}
            </span>
            <Button type="text" onClick={handleSelectAll}>
              {rows.length === dataSource?.length ? i18n('detail.flow51') : i18n('detail.flow52')}
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
              columnResize
            />
          )}
        </div>
      </>
    ),
    2: (
      <Collapse className={detailStyles.collapse} defaultActiveKey={['open', 'invite', 'attachment']}>
        <Collapse.Panel header={i18n('detail.flow53')} panelKey="open">
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow54')}</span>
                <Input value={i18n('empty')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow87')}</span>
                <Input value={i18n('detail.flow88')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow57')}</span>
                <Input value="2022-07-05" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow83')}</span>
                <Input value={i18n('detail.flow84')} />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow60')}</span>
                <Input value={i18n('detail.flow61')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow62')}</span>
                <Input value="5,998,000.00" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow63')}</span>
                <Input value="10,000.00" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow64')}</span>
                <Input value="5,000.00" />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow65')}</span>
                <Input value={i18n('empty')} />
              </div>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel header={i18n('detail.flow66')} panelKey="invite">
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow67')}</span>
                <Input value={i18n('detail.flow68')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow85')}</span>
                <Input value={i18n('empty')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow89')}</span>
                <Input value={i18n('empty')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow71')}</span>
                <Input value={i18n('detail.flow84')} />
              </div>
            </Col>
          </Row>
          <Row gutter={80} className={detailStyles.row}>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow73')}</span>
                <Input value="2022-07-31 10:50:33" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow74')}</span>
                <Input value="2022" />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow75')}</span>
                <Input value={i18n('empty')} />
              </div>
            </Col>
            <Col span={6}>
              <div>
                <span className={detailStyles.label}>{i18n('detail.flow76')}</span>
                <Input value={i18n('empty')} />
              </div>
            </Col>
          </Row>
        </Collapse.Panel>
        <Collapse.Panel header={i18n('detail.flow77')} panelKey="attachment">
          <div className={styles.attachment}>
            <Space size={20} className={styles.action}>
              <Button icon={<Icon type="upload" />}>{i18n('detail.flow78')}</Button>
              <span style={{ fontSize: 12, color: '#999' }}>
                {i18n('detail.flow79')}
                ctrl+v
                {i18n('detail.flow80')}
              </span>
            </Space>
            <Upload {...(uploadProps as any)} className={detailStyles.row}>
              <Button icon={<Icon type="upload" />}>{i18n('detail.flow81')}</Button>
            </Upload>
          </div>
        </Collapse.Panel>
      </Collapse>
    ),
  }

  return (
    <div className={classnames(globalStyles.container, styles.container)}>
      <div className={styles.card}>
        <Space className={styles.title} size={20}>
          <span>{i18n('detail.flow82')}</span>
          <span>00-00001-2020-00000042</span>
        </Space>
        <Space className={styles.attr} size={20}>
          <div>
            <span>{i18n('detail.flow83')}：</span>
            {i18n('detail.flow84')}
          </div>
          <div>
            <span>{i18n('detail.flow85')}：</span>
            {i18n('detail.flow86')}
          </div>
          <div>
            <span>{i18n('detail.flow87')}：</span>
            {i18n('detail.flow88')}
          </div>
          <div>
            <span>{i18n('detail.flow89')}：</span>
            {i18n('detail.flow90')}
          </div>
        </Space>
      </div>
      <Steps className={styles.steps} current={current} status="process" onChange={setCurrent}>
        <Step title={i18n('detail.flow91')} icon={icon1} />
        <Step title={i18n('detail.flow92')} icon={icon2} />
        <Step title={i18n('detail.flow93')} icon={icon6} />
      </Steps>
      <Space className={detailStyles.operation} size={12}>
        <Button.Dropdown type="similar" overlay={[{ value: 'reversal', label: i18n('reapprove') }]}>
          {i18n('approve')}
        </Button.Dropdown>
        <Button type="primary">{i18n('abandon')}</Button>
        <Button type="primary">{i18n('detail.flow94')}</Button>
        <Button type="primary">{i18n('detail.flow95')}</Button>
        <Button.Dropdown
          type="similar"
          overlay={[
            { value: 'setting', label: i18n('detail.flow96') },
            { value: 'print', label: i18n('detail.flow97') },
          ]}
        >
          {i18n('detail.flow98')}
        </Button.Dropdown>
        <Button type="primary">{i18n('refresh')}</Button>
        <Button type="primary">{i18n('quit')}</Button>
      </Space>
      {Array(3)
        .fill(null)
        .map((_, index) => {
          const stepConClass = classnames(styles.stepCon, { [styles.active]: index === current })
          return (
            <div key={index} className={stepConClass}>
              <div className={styles.stepPanel}>{mapCont[index]}</div>
            </div>
          )
        })}
    </div>
  )
}
