import {appConfig, appConfigDev} from "@/configs";
const useAppConfigs = () => {
  // #ifdef H5
  // @ts-ignore
  return import.meta.VITE_NODE_ENV === 'development' ? appConfigDev : appConfig;
  // #endif

  /**
   * Vue3 非H5端，应直接访问 process.env.* 获取环境变量，不支持访问 process
   * https://zh.uniapp.dcloud.io/tutorial/migration-to-vue3.html#%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F
   */
  // #ifndef H5
  // @ts-ignore
  return process.env.VITE_NODE_ENV === 'development' ? appConfigDev : appConfig;
  // #endif
}

export default useAppConfigs;
