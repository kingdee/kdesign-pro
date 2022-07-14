import * as React from 'react'

interface ISettingsContextProps {
  settings: Record<string, any>
  updateSettings: (option: Record<string, any>) => void
}

const SettingsContext = React.createContext<ISettingsContextProps>({ settings: {}, updateSettings: () => {} })

export const SettingsContextProvider = SettingsContext.Provider

export default SettingsContext
