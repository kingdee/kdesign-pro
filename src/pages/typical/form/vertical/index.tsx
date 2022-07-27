import {
  Icon,
  Row,
  Col,
  Input,
  Switch,
  Button,
  Space,
  Tabs,
  Select,
  Form,
  Empty,
  Upload,
} from '@kdcloudjs/kdesign'
import classnames from 'classnames'

import globalStyles from '@/layouts/global.less'
import formStyles from '../index.less'
import styles from './index.less'

const { Option } = Select

const panes = ['支付主体', '发薪核算组', '计薪人员组']

const OperationRecord = () => {
  return (
    <>
      <div className={styles.box}>
        <div className={styles.rules}>
          <span className={styles.label}>默认值：</span>
          <Row gutter={10} style={{ width: '60%' }}>
            <Col span={6}>
              <Input defaultValue="录入内容" borderType="bordered" suffix={<Icon type="search" />} />
            </Col>
            <Col span={5}>
              <Select borderType="bordered" style={{ width: '100%' }} size="small">
                {['等于', '大于', '小于'].map((value) => (
                  <Select.Option key={value} value={value}>
                    {value}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={5}>
              <Select borderType="bordered" style={{ width: '100%' }} defaultValue="值" size="small">
                {['值'].map((value) => (
                  <Select.Option key={value} value={value}>
                    {value}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={8}>
              <Input borderType="bordered" />
            </Col>
          </Row>
          <span className={styles.switch}>
            是否通用 <Switch defaultChecked={true} />
          </span>
        </div>
      </div>
      <div className={styles.box}>
        <header className={styles.head}>
          <span>特殊规则一</span>
          <a href="true" onClick={(e) => e.preventDefault()}>
            删除
          </a>
        </header>
        <div className={styles.cont}>
          <div className={styles.rules}>
            <span className={styles.label}>条件：</span>
            <Row gutter={[10, 10]} style={{ width: '60%', marginBottom: 20 }}>
              <Col span={6}>
                <Input defaultValue="薪资核算组" borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="等于" style={{ width: '100%' }} size="small">
                  {['等于', '大于', '小于'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Input borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="并且" style={{ width: '100%' }} size="small">
                  {['并且', '而且', '或者'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>

              <Col span={6}>
                <Input defaultValue="行政组织" borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="等于" style={{ width: '100%' }} size="small">
                  {['等于', '大于', '小于'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Input borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="并且" style={{ width: '100%' }} size="small">
                  {['并且', '而且', '或者'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>

              <Col span={6}>
                <Input defaultValue="薪资核算组" borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="等于" style={{ width: '100%' }} size="small">
                  {['等于', '大于', '小于'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Input borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="并且" style={{ width: '100%' }} size="small">
                  {['并且', '而且', '或者'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>

              <Col span={6}>
                <Button ghost type="primary">
                  <Icon type="add" /> 添加条件
                </Button>
              </Col>
            </Row>
          </div>
          <div className={styles.rules}>
            <span className={styles.label}>结果：</span>
            <Row gutter={[10, 10]} style={{ width: '60%' }}>
              <Col span={6}>
                <Input defaultValue="薪资核算组" borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="等于" style={{ width: '100%' }} size="small">
                  {['等于', '大于', '小于'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Input borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="并且" style={{ width: '100%' }} size="small">
                  {['并且', '而且', '或者'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        <header className={styles.head}>
          <span>特殊规则二</span>
          <a href="true" onClick={(e) => e.preventDefault()}>
            删除
          </a>
        </header>
        <div className={styles.cont}>
          <div className={styles.rules}>
            <span className={styles.label}>条件：</span>
            <Row gutter={[10, 10]} style={{ width: '60%', marginBottom: 20 }}>
              <Col span={6}>
                <Input defaultValue="薪资核算组" borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="等于" style={{ width: '100%' }} size="small">
                  {['等于', '大于', '小于'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Input borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="并且" style={{ width: '100%' }} size="small">
                  {['并且', '而且', '或者'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>

              <Col span={6}>
                <Button ghost type="primary">
                  <Icon type="add" /> 添加条件
                </Button>
              </Col>
            </Row>
          </div>
          <div className={styles.rules}>
            <span className={styles.label}>默认值：</span>
            <Row gutter={[10, 10]} style={{ width: '60%' }}>
              <Col span={6}>
                <Input defaultValue="薪资核算组" borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="等于" style={{ width: '100%' }} size="small">
                  {['等于', '大于', '小于'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col span={8}>
                <Input borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select borderType="bordered" defaultValue="并且" style={{ width: '100%' }} size="small">
                  {['并且', '而且', '或者'].map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div>
        <Button type="primary" ghost className={styles.add}>
          <Icon type="add" /> 添加特殊规则
        </Button>
      </div>
    </>
  )
}

const PaymentSubject = () => {
  const [form] = Form.useForm()
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
    <Form labelWidth={160} form={form} className={styles.subject}>
      <h3 className={styles.title}>企业信息</h3>
      <Row gutter={[30, 22]} className={styles.inputs}>
        <Col span={6}>
          <Form.Item required label="组织编码" name="code" validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="组织名称" name="name" required validateTrigger="onBlur">
            <Input suffix={<Icon type="search" />} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="企业名称" name="enterprise" required validateTrigger="onBlur">
            <Select placeholder="请选择" style={{ width: '100%' }}>
              <Option value="default">默认企业</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="企业税号" name="tax" required validateTrigger="onBlur">
            <Input suffix={<Icon type="search" />} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="联系人" name="contact" required validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="企业邮箱" name="email" validateTrigger="onBlur">
            <Select style={{ width: '100%' }}>
              <Option value="default">XXX@YYYY.com</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="企业资质" name="certification" validateTrigger="onBlur">
            <Select style={{ width: '100%' }}>
              <Option value="default">XXXXX</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="认证类型" name="type" validateTrigger="onBlur">
            <Select style={{ width: '100%' }}>
              <Option value="default">XXXXX</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="电子凭证会计数据试点企业" name="test" validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={18}>
          <Form.Item label="备注" name="memo" validateTrigger="onBlur">
            <Input placeholder="请输入内容" />
          </Form.Item>
        </Col>
      </Row>
      <h3 className={styles.title}>CA签章</h3>
      <Row gutter={[30, 22]} className={styles.inputs}>
        <Col span={6}>
          <Form.Item required label="法人名称" name="legal" validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="CA证书状态" name="status" required validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="有效期" name="validity" required validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <h3 className={styles.title}>营业执照</h3>
      <Upload {...uploadProps} style={{ display: 'inline-block' }}>
        <Button type="ghost" icon={<Icon type="upload" />}>
          上传文件
        </Button>
      </Upload>
      <span style={{ fontSize: 12, color: '#999', marginLeft: 20 }}>支持ctrl+v粘贴截图</span>
      <Upload.Dragger {...uploadProps} style={{ width: '100%', marginTop: 10 }}>
        {dragButton}
      </Upload.Dragger>
    </Form>
  )
}

const PersonGroup = () => {
  const [form] = Form.useForm()
  return (
    <Form labelWidth={160} form={form} className={styles.subject}>
      <h3 className={styles.title}>企业信息</h3>
      <Row gutter={[30, 22]} className={styles.inputs}>
        <Col span={6}>
          <Form.Item required label="联系人" name="contact" validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="联系部门" name="depart" required validateTrigger="onBlur">
            <Input suffix={<Icon type="search" />} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="联系人职务" name="job" required validateTrigger="onBlur">
            <Select placeholder="请选择" style={{ width: '100%' }}>
              <Option value="default">默认职务</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="联系办公电话" name="phone" required validateTrigger="onBlur">
            <Input suffix={<Icon type="search" />} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="联系人手机" name="mobile" required validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label="联系人邮箱" name="email" validateTrigger="onBlur">
            <Select style={{ width: '100%' }}>
              <Option value="default">XXX@YYYY.com</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="其他" name="other" validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default function (props: any) {
  const mapCont: Record<string, JSX.Element> = {
    '支付主体': <PaymentSubject />,
    '发薪核算组': <OperationRecord />,
    '计薪人员组': <PersonGroup />,
  }

  return (
    <div className={classnames(formStyles.form, styles.container)}>
      <div className={formStyles.panel}>
        <Space size={12} style={{ padding: '10px 40px 10px 18px' }}>
          <Button type="primary">上一步</Button>
          <Button type="primary">下一步</Button>
          <Button type="primary">保存</Button>
          <Button type="primary">退出</Button>
        </Space>
      </div>
      <div className={classnames(globalStyles.container, styles.tabs)}>
        <div className={styles.actions}>
          <span>字段</span>
          <Icon type="delete" />
          <Icon type="add" />
        </div>
        <Tabs type="card" position="left" defaultActiveKey={'支付主体'}>
          {panes.map((pane: string) => (
            <Tabs.TabPane key={pane} tab={pane}>
              {mapCont[pane]}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
