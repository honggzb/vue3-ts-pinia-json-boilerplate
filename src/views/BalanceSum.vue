<template>
  <div>Total balances of all accounts is {{ totalBalance }}</div>
</template>

<script setup>
import { reactive, ref, onMounted} from 'vue'
import axios from 'axios'

const totalBalance = ref(0)
const tt = ref()

function balanceSumUp() {
  for(let i=0; i< tt.value.length -1; i++){
    totalBalance.value += tt.value[i].balance
  }
}

onMounted(() => {
  axios.get('http://localhost:4000/accounts').then((response) => {
      tt.value = response.data
      balanceSumUp()
    })
})
</script>

<style scoped>

</style>
