import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
import type { USERS } from "./user.ts"

export const useUsers = defineStore('counter', () => {
  let userList = ref<USERS>([])
  
  function getUsers() {
    axios.get("http://localhost:4000/users").then((response) => {
      userList.value = response.data;
    });
  }

  return { userList, getUsers }
})
