import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { Space, Form, Button, Icon, Collapse, Row, Col, Input, Layout, Radio, Upload } from '@kdcloudjs/kdesign'
import E from 'wangeditor'
import { getFormPreview } from '@/services/form'

import formStyles from '../index.less'
import styles from './index.less'

interface DataProps {
  id: number
  title?: string
  desc?: string
  image?: string
  author?: string
  describe?: string
}

const { Sider, Content } = Layout

function getBase64(img: any, callback: any) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function beforeUpload(file: any) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
  if (!isJpgOrPng) {
    console.error('You can only upload JPG/PNG file!')
  }
  const isLt2M = file.size / 1024 / 1024 < 2
  if (!isLt2M) {
    console.error('Image must smaller than 2MB!')
  }
  return isJpgOrPng && isLt2M
}

const ArticleForm = (props: any) => {
  const { article, data, changeData } = props

  const [value, setValue] = useState(data.find((item: any) => item.id === article)?.image)
  const [formData, setFormData] = useState<DataProps>({ id: 0 })
  const [loading, setLoading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  useEffect(() => {
    setValue(data.find((item: any) => item.id === article)?.image)
    setFormData(data.find((item: any) => item.id === article) || {})
  }, [article, data])

  const handleChange = (info: any) => {
    if (info.file.status === 'uploading') {
      setLoading(true)
      setImageUrl('')
    } else if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, (iu: string) => {
        setLoading(false)
        setImageUrl(iu)
      })
    }
  }

  const handleOnChange = (v: string, key: keyof DataProps) => {
    changeData(key, v)
  }

  const uploadButton = (
    <div>
      {loading ? (
        <Icon type="loadding-circle" spin />
      ) : (
        <Icon type="add" style={{ fontSize: 16, color: '#666', fontWeight: 'bolder' }} />
      )}
      <div>自定义背景图</div>
    </div>
  )

  return (
    <>
      <Row gutter={[80, 22]} className={formStyles.row}>
        <Col span={8}>
          <Form.Item required label="标题" name="title" validateTrigger="onBlur">
            <Input value={formData?.title} onChange={(e) => handleOnChange(e.target.value, 'title')} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label="作者" name="author" defaultValue="9724811212" validateTrigger="onBlur">
            <Input value={formData?.author} onChange={(e) => handleOnChange(e.target.value, 'author')} />
          </Form.Item>
        </Col>
        <Col span={8} />
        <Col span={8}>
          <Form.Item label="描述" name="desc" required defaultValue="我就是描述文本" validateTrigger="onBlur">
            <Input value={formData?.desc} onChange={(e) => handleOnChange(e.target.value, 'desc')} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="背景图选择" name="background" required>
            <Radio.Group
              className={styles.selectBg}
              value={value}
              onChange={(e) => {
                handleOnChange(e.target.value, 'image')
                setValue(e.target.value)
              }}
            >
              {[1, 2, 3, 4].map((item) => (
                <Radio key={item} value={item}>
                  <img src={require(`../../../../assets/images/bg_0${item}.png`)} />
                </Radio>
              ))}
              <Radio value="customer">
                <Upload
                  name="avatar"
                  listType="picture"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  beforeUpload={beforeUpload}
                  onChange={handleChange}
                  style={{ display: 'inline-block' }}
                >
                  {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                </Upload>
              </Radio>
            </Radio.Group>
          </Form.Item>
          <span className={styles.describe}>建议尺寸：461*461，支持JPG、PNG格式，大小不超过2M</span>
        </Col>
        <Col span={24}>
          <div className={styles.text}>正文</div>
          <div className={styles.editor} id="wang-editor" />
        </Col>
      </Row>
    </>
  )
}

export default () => {
  const [form] = Form.useForm()

  const [article, setArticle] = useState(1)
  const [data, setData] = useState<DataProps[]>([])

  async function init() {
    const d = await getFormPreview()
    const { previewData } = d
    setData(previewData)
  }

  useEffect(() => {
    init()
    const editor = new E('#wang-editor')
    editor.config.menus = [
      'bold',
      'fontSize',
      'fontName',
      'italic',
      'underline',
      'strikeThrough',
      'indent',
      'lineHeight',
      'foreColor',
      'backColor',
      'justify',
    ]
    editor.create()
    return () => {
      editor.destroy()
    }
  }, [])

  const handleDel = () => {
    const curData: DataProps[] = data.filter((_item, index) => index !== article - 1)
    setData(curData)
    if (curData.length) {
      // @ts-ignore
      setArticle(curData[0].id)
    }
  }

  const handleAdd = () => {
    const copyData = [...data]
    let addData = copyData.find((item) => item.id === article)
    if (addData) {
      addData = { ...addData, id: data.length + 1 }
      setData([...copyData, addData])
    }
  }

  const handleMove = (type: string) => {
    const copyData = [...data]
    const indx = copyData.findIndex((item) => item.id === article)
    if (type === 'up' && indx > 0) {
      // eslint-disable-next-line prefer-destructuring
      copyData[indx] = copyData.splice(indx - 1, 1, copyData[indx])[0]
      setData(copyData)
    }

    if (type === 'down' && indx < data.length - 1) {
      // eslint-disable-next-line prefer-destructuring
      copyData[indx] = copyData.splice(indx + 1, 1, copyData[indx])[0]
      setData(copyData)
    }
  }

  const changeData = (key: string, value: string) => {
    const indx = data.findIndex((item) => item.id === article)
    const copyData = [...data]
    // @ts-ignore
    copyData[indx][key] = value
    setData(copyData)
  }

  return (
    <Form className={formStyles.form} form={form} labelWidth={100}>
      <Space className={formStyles.operation} size={12}>
        <Button type="primary" htmlType="submit">
          保存
        </Button>
        <Button type="primary">退出</Button>
      </Space>

      <Collapse className={formStyles.collapse} defaultActiveKey={['basic']}>
        <Collapse.Panel header="模板基本信息区域" panelKey="basic">
          <Row gutter={[80, 22]} className={formStyles.row}>
            <Col span={6}>
              <Form.Item required label="创建业务单元" name="unit" defaultValue="请选择" validateTrigger="onBlur">
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="所属模块" name="module" required defaultValue="衣食住行玩" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="模版编码" name="code" required defaultValue="9724811212" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item label="模版名称" name="name" required defaultValue="9724811212" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="使用描述" name="describe" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Collapse.Panel>
      </Collapse>
      <Layout className={styles.article}>
        <Sider className={styles.catalog} width={336}>
          <h3>文章列表</h3>
          <Space className={styles.operation} split={<span className={formStyles.split} />} size={16}>
            <Button type="text" onClick={handleAdd}>
              新增
            </Button>
            <Button type="text" onClick={() => handleMove('up')}>
              上移
            </Button>
            <Button type="text" onClick={() => handleMove('down')}>
              下移
            </Button>
            <Button type="text" onClick={handleDel}>
              删除
            </Button>
          </Space>
          <ul className={styles.list}>
            {data.map(({ title, desc, image, id }, index) => (
              <li
                key={index}
                className={classnames({ [styles.active]: article === id })}
                onClick={() => {
                  setArticle(id)
                }}
              >
                <img src={require(`../../../../assets/images/card_0${image}.png`)} alt="bg" />
                <div className={styles.desc}>
                  <h4 title={title}>{title}</h4>
                  <p dangerouslySetInnerHTML={{ __html: desc || '' }} className={styles.desc_content} />
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.preview}>
            <Button type="primary" size="large">
              全部预览
            </Button>
          </div>
        </Sider>
        <Content className={styles.cont}>
          <ArticleForm article={article} data={data} changeData={changeData} />
        </Content>
      </Layout>
    </Form>
  )
}
