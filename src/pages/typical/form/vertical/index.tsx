import { Icon, Row, Col, Input, Switch, Button, Space, Tabs, Select, Form, Upload } from '@kdcloudjs/kdesign'
import classnames from 'classnames'

import { useIntl } from 'umi'
import globalStyles from '@/layouts/global.less'
import formStyles from '../index.less'
import styles from './index.less'

const { Option } = Select

const OperationRecord = () => {
  const { formatMessage, locale: lang } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const option678 = [i18n('form.vertical6'), i18n('form.vertical7'), i18n('form.vertical8')]

  const option151617 = [i18n('form.vertical15'), i18n('form.vertical17')]

  return (
    <>
      <div className={styles.box}>
        <div className={styles.rules}>
          <span className={styles.label}>{i18n('form.vertical4')}：</span>
          <Row gutter={10} style={{ width: '60%' }}>
            <Col span={6}>
              <Input defaultValue={i18n('form.vertical5')} borderType="bordered" suffix={<Icon type="search" />} />
            </Col>
            <Col span={5}>
              <Select
                placeholder={i18n('form.vertical28')}
                borderType="bordered"
                style={{ width: '100%' }}
                size="small"
              >
                {option678.map((value) => (
                  <Select.Option key={value} value={value}>
                    {value}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col span={5}>
              <Select
                borderType="bordered"
                style={{ width: '100%' }}
                defaultValue={i18n('form.vertical9')}
                size="small"
              >
                {[i18n('form.vertical9')].map((value) => (
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
            {i18n('form.vertical10')}
            <Switch defaultChecked />
          </span>
        </div>
      </div>
      <div className={styles.box}>
        <header className={styles.head}>
          <span>{i18n('form.vertical11')}</span>
          <a href="true" onClick={(e) => e.preventDefault()}>
            {i18n('form.vertical12')}
          </a>
        </header>
        <div className={styles.cont}>
          <div className={styles.rules}>
            <span className={styles.label}>{i18n('form.vertical13')}：</span>
            <Row gutter={[10, 10]} style={{ width: '60%', marginBottom: 20 }}>
              <Col span={6}>
                <Input defaultValue={i18n('form.vertical14')} borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select
                  borderType="bordered"
                  defaultValue={i18n('form.vertical6')}
                  style={{ width: '100%' }}
                  size="small"
                >
                  {option678.map((value) => (
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
                <Select
                  borderType="bordered"
                  defaultValue={i18n('form.vertical15')}
                  style={{ width: '100%' }}
                  size="small"
                >
                  {option151617.map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>

              <Col span={6}>
                <Input defaultValue={i18n('form.vertical18')} borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select
                  borderType="bordered"
                  defaultValue={i18n('form.vertical6')}
                  style={{ width: '100%' }}
                  size="small"
                >
                  {option678.map((value) => (
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
                <Select
                  borderType="bordered"
                  defaultValue={i18n('form.vertical15')}
                  style={{ width: '100%' }}
                  size="small"
                >
                  {option151617.map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>

              <Col span={6}>
                <Input defaultValue={i18n('form.vertical14')} borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select
                  borderType="bordered"
                  defaultValue={i18n('form.vertical6')}
                  style={{ width: '100%' }}
                  size="small"
                >
                  {option678.map((value) => (
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
                <Select
                  borderType="bordered"
                  defaultValue={i18n('form.vertical15')}
                  style={{ width: '100%' }}
                  size="small"
                >
                  {option151617.map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>

              <Col span={6}>
                <Button ghost type="primary">
                  <Icon type="add" />
                  {i18n('form.vertical19')}
                </Button>
              </Col>
            </Row>
          </div>
          <div className={styles.rules}>
            <span className={styles.label}>{i18n('form.vertical20')}：</span>
            <Row gutter={[10, 10]} style={{ width: '60%' }}>
              <Col span={6}>
                <Input defaultValue={i18n('form.vertical14')} borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select
                  borderType="bordered"
                  defaultValue={i18n('form.vertical6')}
                  style={{ width: '100%' }}
                  size="small"
                >
                  {option678.map((value) => (
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
                <Select
                  borderType="bordered"
                  defaultValue={i18n('form.vertical15')}
                  style={{ width: '100%' }}
                  size="small"
                >
                  {option151617.map((value) => (
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
          <span>{i18n('form.vertical21')}</span>
          <a href="true" onClick={(e) => e.preventDefault()}>
            {i18n('form.vertical12')}
          </a>
        </header>
        <div className={styles.cont}>
          <div className={styles.rules}>
            <span className={styles.label}>{i18n('form.vertical13')}：</span>
            <Row gutter={[10, 10]} style={{ width: '60%', marginBottom: 20 }}>
              <Col span={6}>
                <Input defaultValue={i18n('form.vertical14')} borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select
                  borderType="bordered"
                  defaultValue={i18n('form.vertical6')}
                  style={{ width: '100%' }}
                  size="small"
                >
                  {option678.map((value) => (
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
                <Select
                  borderType="bordered"
                  defaultValue={i18n('form.vertical15')}
                  style={{ width: '100%' }}
                  size="small"
                >
                  {option151617.map((value) => (
                    <Select.Option key={value} value={value}>
                      {value}
                    </Select.Option>
                  ))}
                </Select>
              </Col>

              <Col span={6}>
                <Button ghost type="primary">
                  <Icon type="add" />
                  {i18n('form.vertical19')}
                </Button>
              </Col>
            </Row>
          </div>
          <div className={styles.rules}>
            <span className={styles.label}>{i18n('form.vertical4')}：</span>
            <Row gutter={[10, 10]} style={{ width: '60%' }}>
              <Col span={6}>
                <Input defaultValue={i18n('form.vertical14')} borderType="bordered" suffix={<Icon type="search" />} />
              </Col>
              <Col span={5}>
                <Select
                  borderType="bordered"
                  defaultValue={i18n('form.vertical6')}
                  style={{ width: '100%' }}
                  size="small"
                >
                  {option678.map((value) => (
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
                <Select
                  borderType="bordered"
                  defaultValue={i18n('form.vertical15')}
                  style={{ width: '100%' }}
                  size="small"
                >
                  {option151617.map((value) => (
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
          <Icon type="add" />
          {i18n('form.vertical22')}
        </Button>
      </div>
    </>
  )
}

const PaymentSubject = () => {
  const { formatMessage, locale: lang } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [form] = Form.useForm()
  const dragButton = (
    <div>
      <Icon type="add" style={{ fontSize: 16, color: '#666', fontWeight: 'bolder' }} />
      <div>{i18n('form.vertical23')}</div>
    </div>
  )

  const uploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info: any) {
      const { status } = info.file
      if (status === 'done') {
        console.info('file uploaded successfully.')
      } else if (status === 'error') {
        console.error('file upload failed.')
      }
    },
  }
  return (
    <Form labelWidth={160} form={form} className={styles.subject}>
      <h3 className={styles.title}>{i18n('form.vertical24')}</h3>
      <Row gutter={[30, 22]} className={styles.inputs}>
        <Col span={6}>
          <Form.Item required label={i18n('form.vertical25')} name="code" validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical26')} name="name" required validateTrigger="onBlur">
            <Input suffix={<Icon type="search" />} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical27')} name="enterprise" required validateTrigger="onBlur">
            <Select placeholder={i18n('form.vertical28')} style={{ width: '100%' }}>
              <Option value="default">{i18n('form.vertical29')}</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical30')} name="tax" required validateTrigger="onBlur">
            <Input suffix={<Icon type="search" />} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical31')} name="contact" required validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical32')} name="email" validateTrigger="onBlur">
            <Select style={{ width: '100%' }} defaultValue="default">
              <Option value="default">XXX@YYYY.com</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical33')} name="certification" validateTrigger="onBlur">
            <Select style={{ width: '100%' }} defaultValue="default">
              <Option value="default">XXXXX</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical34')} name="type" validateTrigger="onBlur">
            <Select style={{ width: '100%' }} defaultValue="default">
              <Option value="default">XXXXX</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical35')} name="test" validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={18}>
          <Form.Item label={i18n('remark')} name="memo" validateTrigger="onBlur">
            <Input placeholder={i18n('form.vertical36')} />
          </Form.Item>
        </Col>
      </Row>
      <h3 className={styles.title}>CA{i18n('form.vertical37')}</h3>
      <Row gutter={[30, 22]} className={styles.inputs}>
        <Col span={6}>
          <Form.Item required label={i18n('form.vertical38')} name="legal" validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={`CA${i18n('form.vertical39')}`} name="status" required validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical40')} name="validity" required validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <h3 className={styles.title}>{i18n('form.vertical41')}</h3>
      <Upload {...uploadProps} style={{ display: 'inline-block' }}>
        <Button type="ghost" icon={<Icon type="upload" />}>
          {i18n('form.vertical42')}
        </Button>
      </Upload>
      <span style={{ fontSize: 12, color: '#999', marginLeft: 20 }}>
        {i18n('form.vertical43')}ctrl+v{i18n('form.vertical44')}
      </span>
      <Upload.Dragger {...uploadProps} style={{ width: '100%', marginTop: 10 }}>
        {dragButton}
      </Upload.Dragger>
    </Form>
  )
}

const PersonGroup = () => {
  const { formatMessage, locale: lang } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [form] = Form.useForm()
  return (
    <Form labelWidth={160} form={form} className={styles.subject}>
      <h3 className={styles.title}>{i18n('form.vertical24')}</h3>
      <Row gutter={[30, 22]} className={styles.inputs}>
        <Col span={6}>
          <Form.Item required label={i18n('form.vertical31')} name="contact" validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical45')} name="depart" required validateTrigger="onBlur">
            <Input suffix={<Icon type="search" />} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical46')} name="job" required validateTrigger="onBlur">
            <Select placeholder={i18n('form.vertical28')} style={{ width: '100%' }} defaultValue="default">
              <Option value="default">{i18n('form.vertical47')}</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical48')} name="phone" required validateTrigger="onBlur">
            <Input suffix={<Icon type="search" />} />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical49')} name="mobile" required validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label={i18n('form.vertical50')} name="email" validateTrigger="onBlur">
            <Select placeholder={i18n('form.vertical28')} style={{ width: '100%' }} defaultValue="default">
              <Option value="default">XXX@YYYY.com</Option>
            </Select>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label={i18n('form.vertical51')} name="other" validateTrigger="onBlur">
            <Input />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default () => {
  const { formatMessage, locale: lang } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const mapCont: Record<string, JSX.Element> = {
    [i18n('form.vertical1')]: <PaymentSubject />,
    [i18n('form.vertical2')]: <OperationRecord />,
    [i18n('form.vertical3')]: <PersonGroup />,
  }

  return (
    <div className={classnames(formStyles.form, styles.container)}>
      <div className={formStyles.panel}>
        <Space size={12} style={{ padding: '10px 40px 10px 18px' }}>
          <Button type="primary">{i18n('form.vertical52')}</Button>
          <Button type="primary">{i18n('form.vertical53')}</Button>
          <Button type="primary">{i18n('save')}</Button>
          <Button type="primary">{i18n('back')}</Button>
        </Space>
      </div>
      <div className={classnames(globalStyles.container, styles.tabs)}>
        <div className={styles.actions}>
          <span>{i18n('form.vertical54')}</span>
          <Icon type="delete" />
          <Icon type="add" />
        </div>
        <Tabs type="card" position="left" defaultActiveKey={i18n('form.vertical1')}>
          {[i18n('form.vertical1'), i18n('form.vertical2'), i18n('form.vertical3')].map((pane: string) => (
            <Tabs.TabPane key={pane} tab={pane}>
              {mapCont[pane]}
            </Tabs.TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  )
}
