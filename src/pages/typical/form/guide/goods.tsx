import { useState } from 'react'
import { Icon, Collapse, Row, Col, Input, Form, Button, Switch, Space, Upload, Table } from '@kdcloudjs/kdesign'
import formStyles from '../index.less'
import styles from './index.less'

export default function Goods() {
  const [form] = Form.useForm()
  const [index, setIndex] = useState(1)
  const [selected, setSelected] = useState<number[]>([])
  const [state, setState] = useState<any[]>([{ index, goods: '显示屏', subject: '电子产品', dimension: '自定义' }])

  const addItem = () => {
    const i = index + 1
    const list = [
      ...state,
      {
        index: i,
        goods: `显示屏${i}`,
        subject: '电子产品',
        dimension: '自定义',
      },
    ]
    setState(list)
    setIndex(i)
  }

  const delItem = () => {
    if (selected.length) {
      const list = state.filter((d) => !selected.includes(d.index))
      setState(list)
      setSelected([])
    } else {
      alert('请选中后删除')
    }
  }

  const customerColumns = [
    { code: 'goods', width: 150, name: '商品' },
    { code: 'subject', width: 150, name: '科目' },
    { code: 'currency', width: 150, name: '币种' },
    { code: 'origin', width: 150, name: '产地' },
    { code: 'no', width: 150, name: '货号' },
    { code: 'dimension', width: 150, name: '核算维度' },
    { code: 'unit', width: 150, name: '计量单位' },
  ]

  const rowSelection = {
    type: 'checkbox',
    value: selected,
    onChange: setSelected,
  }

  const dragButton = (
    <div>
      <Icon type="add" style={{ fontSize: 16, color: '#666', fontWeight: 'bolder' }} />
      <div>点击或拖拽上传</div>
    </div>
  )

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      const { status } = info.file
      if (status === 'done') {
        console.info(`${info.file.name} file uploaded successfully.`)
      } else if (status === 'error') {
        console.error(`${info.file.name} file upload failed.`)
      }
    },
  }

  return (
    <Collapse
      className={formStyles.collapse}
      defaultActiveKey={['info', 'features', 'bar', 'attachment']}
      style={{ overflow: 'overlay' }}
    >
      <Collapse.Panel header="商品信息" panelKey="info">
        <Form form={form} labelWidth={100}>
          <Row gutter={[80, 22]} className={formStyles.row}>
            <Col span={6}>
              <Form.Item required label="标题内容" name="title" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="商品名称" name="name" required validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="商品类别" name="category" required validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="商品标签" name="tags" required validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="条形码" name="barCode" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="规格型号" name="size" validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="品牌" name="brand" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="产地" name="origin" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="助记码" name="aid" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="计量单位" name="unit" validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="款式" name="type" validateTrigger="onBlur">
                <Switch defaultChecked />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="款式" name="type" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Collapse.Panel>
      <Collapse.Panel header="商品特性" panelKey="features">
        <Space size={60} className={styles.features}>
          <div>
            序列号管理
            <Switch defaultChecked className={styles.switch} />
          </div>
          <div>
            批次管理
            <Switch defaultChecked className={styles.switch} />
          </div>
          <div>
            可销售
            <Switch defaultChecked className={styles.switch} />
          </div>
          <div>
            可采购
            <Switch defaultChecked className={styles.switch} />
          </div>
          <div>
            可为子件
            <Switch defaultChecked className={styles.switch} />
          </div>
          <div>
            可为组件
            <Switch defaultChecked className={styles.switch} />
          </div>
        </Space>
        <Space size={60} className={styles.features}>
          <div>
            保质期管理
            <Switch defaultChecked className={styles.switch} />
          </div>
        </Space>
        <Space size={60} className={styles.features}>
          <div>
            辅助属性管理
            <Switch defaultChecked className={styles.switch} />
          </div>
        </Space>
      </Collapse.Panel>
      <Collapse.Panel
        header="条码信息"
        panelKey="bar"
        extra={
          <Space className={formStyles.extra} size={16}>
            <button onClick={addItem}>增行</button>
            <i className={formStyles.split} />
            <button onClick={delItem}>删行</button>
          </Space>
        }
      >
        <Table dataSource={state} columns={customerColumns} rowSelection={rowSelection as any} primaryKey="index" />
      </Collapse.Panel>
      <Collapse.Panel header="附件" panelKey="attachment">
        <Upload {...uploadProps} style={{ display: 'inline-block' }}>
          <Button type="ghost" icon={<Icon type="upload" />}>
            上传文件
          </Button>
        </Upload>
        <span style={{ fontSize: 12, color: '#999', marginLeft: 20 }}>支持ctrl+v粘贴截图</span>
        <Upload.Dragger {...uploadProps} style={{ width: '100%', marginTop: 10 }}>
          {dragButton}
        </Upload.Dragger>
      </Collapse.Panel>
    </Collapse>
  )
}
