// 全局共享数据示例
import { useEffect, useState } from 'react'

const useUser = () => {
  const [username, setUsername] = useState<string>('')

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user') || '{}')
    setUsername(user?.name || '')
  }, [])

  return {
    username,
    setUsername,
  }
}

export default useUser
