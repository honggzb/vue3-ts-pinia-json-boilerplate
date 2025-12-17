<template>
  <el-form :model="form" label-width="auto" style="max-width: 400px; margin: 20px;">
    <!-- <el-form-item label="Account Id"><el-input v-model="form.id" /></el-form-item> -->
    <el-form-item label="Account type"><el-input v-model="form.type" /></el-form-item>
    <el-form-item label="Account balance"><el-input-number v-model="form.balance" style="width: 200px" :precision="2" :step="0.01"/></el-form-item>
    <el-form-item>
      <el-button @click="onSubmit">Add</el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import { useRouter } from "vue-router";
import { useAccounts } from '../stores/counter'

const router = useRouter()
const accountsStore = useAccounts()

let tmp = ref()
let form  = reactive({
  id: 0,
  type: "",
  balance: 0,
});

const onSubmit = () => {
  form.id = Math.floor(Math.random() * 100000).toString()
  accountsStore.addAccount(form)
  router.push("/");
}
</script>

<style scoped>

</style>
