import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from "vue-i18n";

import zh from "./languages/zh-TW.json";
import en from "./languages/en-US.json";
import ja from "./languages/ja-JP.json";

import App from './App.vue'
import router from './router'

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem("locale") ?? "zh-TW",
  fallbackLocale: "zh-TW",
  messages: {
    "zh-TW": zh,
    "en-US": en,
    "ja-JP": ja
  }
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
