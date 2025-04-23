import React, { AnchorHTMLAttributes, FC } from 'react'
import { elTabItem, ElTabItemWrapper } from './styles'
import { useTabs } from './tabs-context'
import { Link } from 'react-router'

interface TabItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  isDisabled?: boolean
}

export const TabItem: FC<TabItemProps> = ({ children, isDisabled, href, ...restProps }) => {
  const { focusedTab, activeTab, activeTabRef, handleTabOnClick, handleTabOnFocused } = useTabs()

  const isTabsActive = (targetTab: string | null): boolean => href.match(targetTab as string) ? true : false

  const handleTabMenuOnClick = () => {
    if (!isDisabled) {
      handleTabOnClick(href)
      handleTabOnFocused(href)
    }
  }


  return (
    <ElTabItemWrapper>
      <Link
        {...restProps}
        className={elTabItem}
        onClick={handleTabMenuOnClick}
        ref={isTabsActive(focusedTab) ? activeTabRef : null}
        to={isDisabled ? "#" : href}
        aria-disabled={isDisabled}
        aria-selected={isTabsActive(activeTab)}
        data-is-focused={isTabsActive(focusedTab)}
        role="tab" >
        {children}
      </Link>
    </ElTabItemWrapper>
  )
}
