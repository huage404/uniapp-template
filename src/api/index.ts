import {createAlova} from 'alova'
import AdapterUniapp from '@alova/adapter-uniapp'

const BASE_URL = 'https://api.alovajs.org'

const alovaInstance = createAlova({
	baseURL: BASE_URL,
	...AdapterUniapp(),
})

export default alovaInstance
