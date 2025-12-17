<template>
  <div class="home">
    <div class="btn-groups">
      <el-button @click="accountsStore.getAccounts()">
        Refresh<el-icon class="el-icon--right"><Refresh /></el-icon>
      </el-button>
      <el-button @click="accountsStore.sortType()">
        Sort Type<el-icon class="el-icon--right"><Sort /></el-icon>
      </el-button>
      <el-button @click="accountsStore.sortBalanceA()">
        Sort Balance ASC<el-icon class="el-icon--right"><Sort /></el-icon>
      </el-button>
      <el-button @click="accountsStore.sortBalanceD()">
        Sort Balance DESC<el-icon class="el-icon--right"><Sort /></el-icon>
      </el-button>
      <RouterLink to="/add">
        <el-button>Add Account<el-icon class="el-icon--right"> + </el-icon></el-button>
      </RouterLink>
      <hr>
    </div>

    <main>
      <div v-for="account in accountsStore.accountList" :key="account.id"  class="account-item">
        <el-button @click="accountsStore.deleteAccount(account.id)">Delete<el-icon class="el-icon--right"><Delete /></el-icon></el-button>
        <span>{{ account.id }} {{ account.type }} {{ account.balance }}</span>
      </div>
    </main>

    <div class="bottom-area">
    <hr>
      Account Type:
      <el-select v-model="accountType" size="large" style="width: 200px" @change="accountsStore.filterType(accountType)" >
        <el-option v-for="item in options" :key="item.value" :value="item.value" />
      </el-select>
      &nbsp;Balance:
      <el-input-number v-model="balance" style="width: 200px" :precision="2" :step="0.01"/>
      <hr>
      <RouterLink to="/sum">
        <div>Go to Balance Summarize page</div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Refresh, Sort, Delete } from '@element-plus/icons-vue'
import axios from 'axios'
import { storeToRefs } from 'pinia'
import { useAccounts } from '../stores/counter'

const accountsStore = useAccounts()

const value = ref('')
const balance = ref()
const accountToDeleteId = ref('0')
const accountType = ref()
const filterAccounts = ref([])

const options = [
  { value: 'SAVING', label: 'SAVING' },
  { value: 'CHEQUE', label: 'CHEQUE' },
  { value: 'RRSP', label: 'RRSP' },
  { value: 'RESP', label: 'RESP' },
  { value: 'TFSA', label: 'TFSA' },
  { value: 'INVESTMENT', label: 'INVESTMENT' },
  { value: 'USSAVING', label: 'USSAVING' },
  { value: 'USCHEQUE', label: 'USCHEQUE' },
]

accountsStore.getAccounts()

</script>

<style scoped lang="less">
.home {
  display: flex;
  flex-direction: column;
  height: 70vh;
  margin-left: 20px;

  .btn-groups {
    flex: 0 0 auto;
  }
  main {
    padding: 10px;
    flex: 1 0 auto;
    overflow-y: auto;
  }
  .bottom-area {
    padding: 10px;
    flex: 0 0 auto;
    bottom: 100px;
  }
}
</style>
