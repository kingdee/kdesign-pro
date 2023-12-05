import { createContext } from 'react'

interface ISettingsContextProps {
  settings: Record<string, any>
  updateSettings: (option: Record<string, any>) => void
}

const SettingsContext = createContext<ISettingsContextProps>({ settings: {}, updateSettings: () => {} })

export const SettingsContextProvider = SettingsContext.Provider

export default SettingsContext
