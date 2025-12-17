<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { watch } from "vue";
import { useI18n } from "vue-i18n"
import HelloWorld from './components/common/HelloWorld'

const { t, locale } = useI18n();
watch(locale, (newlocale) => {
  localStorage.setItem("locale", newlocale);
});
</script>

<template>
  <div class="container">
    <h2>Vue Json server</h2>
    <img alt="Vue logo" src="./assets/logo.svg" height="200px"/>
    <nav>
      <select v-model="locale">
        <option>zh-TW</option>
        <option>en-US</option>
        <option>ja-JP</option>
      </select>
    </nav>
    <p>{{ t("cancel") }}</p>
    <p>{{ t("email") }}</p>
    <p>{{ t("date") }}</p>
    <p>{{ t("subject") }}</p>
    <p>{{ t("message") }}</p>
    <p>{{ t("upload") }}</p>
	<hr>
	<hr>
	<h2>Accounts</h2>
    <hr>
    <RouterView />
  </div>
</template>

<style scoped>
h2 {
  padding: 5px;
}
</style>
