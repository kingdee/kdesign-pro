import { Link, useModel } from 'umi'

import './index.less'

export default () => {
  const { username } = useModel('global')

  return (
    <div className="home">
      <div className="title">
        <div>Hi</div>
        <div>{username}</div>
      </div>
      <div className="navs">
        <Link to="/login">登录页</Link>
        <Link to="/exception/404">404</Link>
        <Link to="/exception/403">403</Link>
      </div>
    </div>
  )
}
