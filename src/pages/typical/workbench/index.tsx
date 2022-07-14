import React from 'react'
import { IRouteComponentProps } from 'umi'
import { Row, Col, Carousel, Button } from '@kdcloudjs/kdesign'
import classnames from 'classnames'
import { getHome } from '@/services/workbench'
import ReactECharts from 'echarts-for-react'

import globalStyles from '@/layouts/global.less'
import styles from './index.less'

export default function (props: IRouteComponentProps) {
  const [home, setHome] = React.useState<Record<string, any>>({})

  async function initHome() {
    const payable = await getHome()
    setHome(payable)
  }

  React.useEffect(() => {
    initHome()
  }, [])

  const { banners, receipt, receive, boots, funds, bills, agingOption, rateOptions, news } = home

  return (
    <div className={classnames(globalStyles.container, styles.home)}>
      <Row gutter={10} align="stretch" className={styles.row}>
        <Col span={8}>
          <div className={styles.banner}>
            {banners && (
              <Carousel>
                {banners.map((banner: string) => (
                  <img key={banner} src={require(`@/assets/images/${banner}`)} />
                ))}
              </Carousel>
            )}
          </div>
        </Col>
        <Col span={8}>
          <div className={styles.card}>
            <h4 className={styles.title}>发票处理</h4>
            {receipt && (
              <Row className={styles.data}>
                <Col span={8}>
                  <div className={styles.count}>{receipt.submit}</div>
                  <div className={styles.status}>发票待提交</div>
                </Col>
                <Col span={8}>
                  <div className={styles.count}>{receipt.audit}</div>
                  <div className={styles.status}>发票待审核</div>
                </Col>
                <Col span={8}>
                  <div className={styles.count}>
                    <strong>{receipt.notPass}</strong>
                  </div>
                  <div className={styles.status}>未通过</div>
                </Col>
              </Row>
            )}
          </div>
        </Col>
        <Col span={8}>
          <div className={styles.card}>
            <h4 className={styles.title}>应收处理</h4>
            {receive && (
              <Row className={styles.data}>
                <Col span={8}>
                  <div className={styles.count}>{receive.submit}</div>
                  <div className={styles.status}>应收待提交</div>
                </Col>
                <Col span={8}>
                  <div className={styles.count}>{receive.audit}</div>
                  <div className={styles.status}>应收待审核</div>
                </Col>
                <Col span={8}>
                  <div className={styles.count}>
                    <strong>{receive.notPass}</strong>
                  </div>
                  <div className={styles.status}>未通过</div>
                </Col>
              </Row>
            )}
          </div>
        </Col>
      </Row>
      <Row gutter={10} align="stretch" className={styles.row}>
        <Col span={8}>
          <div className={styles.card}>
            <h4 className={styles.title}>快速发起</h4>
            <ul className={styles.boot}>
              {boots?.map((text: string) => (
                <li key={text}>
                  <img src={require(`@/assets/images/${text}.png`)} width="48" />
                  <span>{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col span={8}>
          <div className={styles.card}>
            <h4 className={styles.title}>逾期账款</h4>
            {funds && (
              <Carousel className={styles.funds}>
                {funds.map(({ name, code, logo, amount, expire, payment, settlement }: Record<string, any>) => (
                  <div key={code} className={styles.fund}>
                    <header>
                      <img src={require(`@/assets/images/${logo}`)} width="48" />
                      <div className={styles.tit}>
                        <span className={styles.name}>{name}</span>
                        <span className={styles.code}>单据编号 {code}</span>
                      </div>
                      <img src={require(`@/assets/images/unpopable.png`)} style={{ height: 60, marginTop: -12 }} />
                    </header>
                    <ul className={styles.attr}>
                      <li>
                        <label>逾期金额：</label>
                        {amount}
                      </li>
                      <li>
                        <label>到期日：</label>
                        {expire}
                      </li>
                      <li>
                        <label>付款方式：</label>
                        {payment}
                      </li>
                      <li>
                        <label>结算方式：</label>
                        {settlement}
                      </li>
                    </ul>
                  </div>
                ))}
              </Carousel>
            )}
          </div>
        </Col>
        <Col span={8}>
          <div className={styles.card}>
            <h4 className={styles.title}>
              <span>最近开启单据</span> <Button type="text">更多单据（2/20）</Button>
            </h4>
            <ul className={styles.bills}>
              {bills?.map(({ name, code, time, status }: Record<string, any>) => (
                <li key={code}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.code}>{code}</span>
                  <span className={styles.time}>
                    申请时间：<strong>{time}</strong>
                  </span>
                  <span className={classnames(styles.status, { [styles.green]: status === '1' })}>
                    {status === '1' ? '审批通过' : '待审批'}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
      <Row gutter={10} align="stretch" className={styles.row}>
        <Col span={8}>
          <div className={styles.card}>
            <h4 className={styles.title}>应收账龄分析</h4>
            {agingOption && <ReactECharts option={agingOption} theme={'defaultTheme'} style={{ height: 250 }} />}
          </div>
        </Col>
        <Col span={8}>
          <div className={styles.card}>
            <h4 className={styles.title}>应收账款周转率</h4>
            {rateOptions && (
              <ReactECharts option={rateOptions} theme={'defaultTheme'} style={{ height: 250, marginRight: -30 }} />
            )}
          </div>
        </Col>
        <Col span={8}>
          <div className={styles.card}>
            <h4 className={styles.title}>
              <span>新闻动态</span> <Button type="text">查看更多（3/20）</Button>
            </h4>
            <ul className={styles.news}>
              {news?.map(({ title, author, time, cover }: Record<string, any>) => (
                <li key={title}>
                  <div className={styles.left}>
                    <h4>{title}</h4>
                    <span>
                      {author} {time}
                    </span>
                  </div>
                  <img className={styles.cover} src={require(`@/assets/images/${cover}`)} height="68" />
                </li>
              ))}
            </ul>
          </div>
        </Col>
      </Row>
    </div>
  )
}
