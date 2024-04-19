import { useIntl } from 'umi'
import Exception from './exception'

export default () => {
  const { formatMessage } = useIntl()
  const i18n = (id: string, defaultMessage = undefined) => formatMessage({ id, defaultMessage })

  return <Exception status="404" message={i18n('404')} />
}
