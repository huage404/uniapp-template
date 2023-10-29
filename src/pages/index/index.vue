<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="border-base text-[red]">{{ title }}</text>
    </view>
    <view class="text-area">
        <text class="border-base text-[red]">welcome: {{ $t('welcome') }}</text>
      </view>

    <button @click="toggleLocale">切换语言</button>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MButton from '@/components/Button.vue';
import useUserStore from '@/stores/user';
import { useI18n } from 'vue-i18n';
import { ELocaleKeys } from '@/locale/index';

const title = ref('Hello');
const userStore = useUserStore();

const { locale } = useI18n();
const toggleLocale = () => {
  locale.value = locale.value === ELocaleKeys.zhHans ? ELocaleKeys.enUS : ELocaleKeys.zhHans;
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
