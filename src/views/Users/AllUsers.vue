<template>
    <div class="container">
        <div class="row m-2">
            <div class="col col-md-4 offset-md-4">
                <RouterLink to="/adduser" class="btn btn-primary">Add</RouterLink>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="user in usersStore.userList" :key="user.name">
                <div class="card">
                    <img :src="user.imageUrl" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{{ user.name }}</h5>
                        <p class="card-text">Email: {{ user.email }}</p>
                        <p class="card-text">Phone number: {{ user.phonenumber }}</p>
                        <p class="card-text">Location: {{ user.location }}</p>
                        <router-link class="btn btn-primary" :to="`/edituser/${user?.id}`">Edit</router-link>
                        <!-- <button type="button" @click="openDeleteModal(user.id)" class="btn btn-danger">
                            Delete
                        </button> -->
                        <button type="button" @click="deleteUser(user.id)" class="btn btn-danger">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, onMounted,toRow } from "vue";
    import axios from "axios";
    //import type { USERS } from "./user.ts"
    import { useUsers } from '../../stores/counter'

    //const allUsers = ref<USERS>()
    const usersStore = useUsers()
    usersStore.getUsers()
    const userToDeleteId = ref("0")
    // let deleteModal;

    // onMounted(() => {
    //     axios.get("http://localhost:4000/users").then((response) => {
    //         allUsers.value = response.data;
    //     });
    // });
    const deleteUser = (id: string) => {
        userToDeleteId.value = id;
        axios.delete(`http://localhost:4000/users/${userToDeleteId.value}`)
             .then(() => {
                if(usersStore.userList) {
                    usersStore.userList = usersStore.userList.filter(
                        (_) => _.id !== userToDeleteId.value
                    );
                    userToDeleteId.value = "0";
                }
        });
    };
</script>
