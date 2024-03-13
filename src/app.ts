export { default as request } from '@/services'

export async function getInitialState(): Promise<any> {
  return { name: 'kdesign' }
}
