import React, { FC, HTMLAttributes, useRef, useState } from 'react'
import { ElTabs, Variants } from './styles'
import { TabsContext } from './tabs-context'
import { TabNavigation } from './tab-navigation'
import { TabItem } from './tab-item'

interface TabsProps extends HTMLAttributes<HTMLElement> {
  variant?: Variants
}

export const TabsComponent: FC<TabsProps> = ({ children, variant, ...restProps }) => {
  const activeTabRef = useRef<HTMLAnchorElement | null>(null)
  const [focusedTab, setFocusedTab] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string | null>(null)


  const handleTabOnClick = (tab: string | null) => {
    setActiveTab(tab)
  }

  const handleTabOnFocused = (tab: string | null) => {
    setFocusedTab(tab)
  }

  return (
    <TabsContext.Provider value={{ activeTab, focusedTab, activeTabRef, handleTabOnFocused, handleTabOnClick }}>
      <ElTabs {...restProps} role="tabs" data-variant={variant}>
        <TabNavigation>
          {children}
        </TabNavigation>
      </ElTabs>
    </TabsContext.Provider>
  )
}



export const Tabs = Object.assign(TabsComponent, {
  Item: TabItem,
});
