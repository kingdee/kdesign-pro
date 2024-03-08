import React, { cloneElement, FunctionComponentElement } from 'react'
import { history, useLocation } from 'umi'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import styles from './global.less'

const classMap: Record<string, string> = {
  PUSH: 'forward',
  POP: 'back',
}

export default ({ children }: any) => {
  const { pathname } = useLocation()
  return (
    <TransitionGroup
      className={styles.content}
      childFactory={(child: FunctionComponentElement<{ classNames: any }>) => {
        return cloneElement(child, { classNames: classMap[history.action] })
      }}
    >
      <CSSTransition key={pathname} timeout={300}>
        {children}
      </CSSTransition>
    </TransitionGroup>
  )
}
