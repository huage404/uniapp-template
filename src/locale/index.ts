import { createI18n } from "vue-i18n";

import zhHans from "./zh-Hans.json";
import enUS from "./en-US.json";

export enum ELocaleKeys {
  zhHans = "zh-Hans",
  enUS = "en-US",
};

const messages = {
  [ELocaleKeys.zhHans]: zhHans,
  [ELocaleKeys.enUS]: enUS,
};

const i18nConfig = {
  locale: uni.getLocale(), // 获取已设置的语言
  fallbackLocale: ELocaleKeys.zhHans,
  messages,
};

export const i18nPlugins = createI18n(i18nConfig);