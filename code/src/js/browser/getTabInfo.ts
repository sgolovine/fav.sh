type Tabs = Tab[]

export type Tab = {
  title: string
  url: string
}

export const getActiveTab = (callback: (tabs: Tab) => void) =>
  (browser as any).tabs.query({ highlighted: true }, (tabs: Tabs) => {
    const tab: Tab = {
      title: tabs[0].title,
      url: tabs[0].url,
    }
    callback(tab)
  })
