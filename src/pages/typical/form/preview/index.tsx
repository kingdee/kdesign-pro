import React, { useEffect, useState } from 'react'
import classnames from 'classnames'
import { Space, Form, Button, Icon, Collapse, Row, Col, Input, Layout, Radio, Upload } from '@kdcloudjs/kdesign'
import E from 'wangeditor'
import i18next from 'i18next'
import { useIntl } from 'umi'
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
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

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
      <div>{i18n('form.preview1')}</div>
    </div>
  )

  return (
    <>
      <Row gutter={[80, 22]} className={formStyles.row}>
        <Col span={8}>
          <Form.Item required label={i18n('form.preview2')} name="title" validateTrigger="onBlur">
            <Input value={formData?.title} onChange={(e) => handleOnChange(e.target.value, 'title')} />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item label={i18n('form.preview3')} name="author" defaultValue="9724811212" validateTrigger="onBlur">
            <Input value={formData?.author} onChange={(e) => handleOnChange(e.target.value, 'author')} />
          </Form.Item>
        </Col>
        <Col span={8} />
        <Col span={8}>
          <Form.Item
            label={i18n('form.preview4')}
            name="desc"
            required
            defaultValue={i18n('form.preview5')}
            validateTrigger="onBlur"
          >
            <Input value={formData?.desc} onChange={(e) => handleOnChange(e.target.value, 'desc')} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label={i18n('form.preview6')} name="background" required>
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
          <span className={styles.describe}>
            {i18n('form.preview7')}：461*461，{i18n('form.preview8')}JPG、PNG{i18n('form.preview9')}，
            {i18n('form.preview10')}2M
          </span>
        </Col>
        <Col span={24}>
          <div className={styles.text}>{i18n('form.preview11')}</div>
          <div className={styles.editor} id="wang-editor" />
        </Col>
      </Row>
    </>
  )
}

export default () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  const [form] = Form.useForm()

  const [article, setArticle] = useState(1)
  const [data, setData] = useState<DataProps[]>([])

  async function initData() {
    const d = await getFormPreview()
    const { previewData } = d
    setData(previewData)
  }

  const editorLang = {
    wangEditor: {
      插入: 'insert',
      默认: 'default',
      创建: 'create',
      修改: 'edit',
      如: 'like',
      请输入正文: 'please enter the text',
      menus: {
        title: {
          标题: i18n('wang.editor1'),
          加粗: i18n('wang.editor2'),
          字号: i18n('wang.editor3'),
          字体: i18n('wang.editor4'),
          斜体: i18n('wang.editor5'),
          下划线: i18n('wang.editor6'),
          删除线: i18n('wang.editor7'),
          缩进: i18n('wang.editor8'),
          行高: i18n('wang.editor9'),
          文字颜色: i18n('wang.editor10'),
          背景色: i18n('wang.editor11'),
          链接: i18n('wang.editor12'),
          序列: i18n('wang.editor13'),
          对齐: i18n('wang.editor14'),
          引用: i18n('wang.editor15'),
          表情: i18n('wang.editor16'),
          图片: i18n('wang.editor17'),
          视频: i18n('wang.editor18'),
          表格: i18n('wang.editor19'),
          代码: i18n('wang.editor20'),
          分割线: i18n('wang.editor21'),
          恢复: i18n('wang.editor22'),
          撤销: i18n('wang.editor23'),
          全屏: i18n('wang.editor24'),
          代办事项: i18n('wang.editor25'),
        },
        dropListMenu: {
          设置标题: 'title',
          背景颜色: 'background',
          文字颜色: 'font color',
          设置字号: 'font size',
          设置字体: 'font family',
          设置缩进: 'indent',
          对齐方式: 'align',
          设置行高: 'line heihgt',
          序列: 'list',
          head: {
            正文: 'text',
          },
          indent: {
            增加缩进: 'indent',
            减少缩进: 'outdent',
          },
          justify: {
            靠左: 'left',
            居中: 'center',
            靠右: 'right',
          },
          list: {
            无序列表: 'unordered',
            有序列表: 'ordered',
          },
        },
        panelMenus: {
          emoticon: {
            默认: 'default',
            新浪: 'sina',
            emoji: 'emoji',
            手势: 'gesture',
          },
          image: {
            图片链接: 'image link',
            上传图片: 'upload image',
            网络图片: 'network image',
          },
          link: {
            链接: 'link',
            链接文字: 'link text',
            删除链接: 'delete',
            查看链接: 'view',
          },
          video: {
            插入视频: 'insert video',
          },
          table: {
            行: 'row',
            列: 'column',
            的: ' ',
            表格: 'table',
            添加行: 'add row',
            删除行: 'delete row',
            添加列: 'add column',
            删除列: 'delete column',
            设置表头: 'set header',
            取消表头: 'cancel header',
            插入表格: 'insert table',
            删除表格: 'delete table',
          },
          code: {
            删除代码: 'delete code',
            修改代码: 'edit code',
            插入代码: 'insert code',
          },
        },
      },
      validate: {
        张图片: 'images',
        大于: 'greater than',
        图片链接: 'image link',
        不是图片: 'is not image',
        返回结果: 'return results',
        上传图片超时: 'upload image timeout',
        上传图片错误: 'upload image error',
        上传图片失败: 'upload image failed',
        插入图片错误: 'insert image error',
        一次最多上传: 'once most at upload',
        下载链接失败: 'download link failed',
        图片验证未通过: 'image validate failed',
        服务器返回状态: 'server return status',
        上传图片返回结果错误: 'upload image return results error',
        请替换为支持的图片类型: 'please replace with a supported image type',
        您插入的网络图片无法识别: 'the network picture you inserted is not recognized',
        您刚才插入的图片链接未通过编辑器校验: 'the image link you just inserted did not pass the editor verification',
      },
    },
  }

  useEffect(() => {
    initData()
    const editor: any = new E('#wang-editor')
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
    editor.config.lang = 'self'
    editor.config.languages.self = editorLang
    editor.i18next = i18next
    editor.create()
    return () => {
      editor.destroy()
    }
  }, [])

  const handleDel = () => {
    const curData: DataProps[] = data.filter((_item, index) => index !== article - 1)
    setData(curData)
    if (curData.length) {
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
      const movedItem = copyData[indx]
      copyData[indx] = copyData[indx - 1]
      copyData[indx - 1] = movedItem
      setData(copyData)
    }

    if (type === 'down' && indx < data.length - 1) {
      const movedItem = copyData[indx]
      copyData[indx] = copyData[indx + 1]
      copyData[indx + 1] = movedItem
      setData(copyData)
    }
  }

  const changeData = (key: string, value: string) => {
    const indx = data.findIndex((item) => item.id === article)
    const copyData: any = [...data]
    copyData[indx][key] = value
    setData(copyData)
  }

  return (
    <Form className={formStyles.form} form={form} labelWidth={100}>
      <Space className={formStyles.operation} size={12}>
        <Button type="primary" htmlType="submit">
          {i18n('save')}
        </Button>
        <Button type="primary">{i18n('back')}</Button>
      </Space>

      <Collapse className={formStyles.collapse} defaultActiveKey={['basic']}>
        <Collapse.Panel header={i18n('form.preview12')} panelKey="basic">
          <Row gutter={[80, 22]} className={formStyles.row}>
            <Col span={6}>
              <Form.Item
                required
                label={i18n('form.preview13')}
                name="unit"
                defaultValue={i18n('form.preview14')}
                validateTrigger="onBlur"
              >
                <Input suffix={<Icon type="search" />} />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label={i18n('form.preview15')}
                name="module"
                required
                defaultValue={i18n('form.preview16')}
                validateTrigger="onBlur"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label={i18n('form.preview17')}
                name="code"
                required
                defaultValue="9724811212"
                validateTrigger="onBlur"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={6}>
              <Form.Item
                label={i18n('form.preview18')}
                name="name"
                required
                defaultValue="9724811212"
                validateTrigger="onBlur"
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label={i18n('form.preview19')} name="describe" validateTrigger="onBlur">
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Collapse.Panel>
      </Collapse>
      <Layout className={styles.article}>
        <Sider className={styles.catalog} width={336}>
          <h3>{i18n('form.preview20')}</h3>
          <Space className={styles.operation} split={<span className={formStyles.split} />} size={16}>
            <Button type="text" onClick={handleAdd}>
              {i18n('add')}
            </Button>
            <Button type="text" onClick={() => handleMove('up')}>
              {i18n('form.preview21')}
            </Button>
            <Button type="text" onClick={() => handleMove('down')}>
              {i18n('form.preview22')}
            </Button>
            <Button type="text" onClick={handleDel}>
              {i18n('form.preview23')}
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
              {i18n('form.preview24')}
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
