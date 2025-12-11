<template>
    <div class="row">
        <form @submit.prevent="updateUser">
            <legend>Update User</legend>
            <div class="col">
                <label for="txtWonderName" class="form-label">Name</label>
                <input type="text" v-model="userToUpdate.name" class="form-control" />
            </div>
            <div class="col">
                <label for="txtEmail" class="form-label">Email</label>
                <input type="text" v-model="userToUpdate.email" class="form-control" />
            </div>
            <div class="col">
                <label for="txtPhonenumber" class="form-label">Phone number</label>
                <input type="text" v-model="userToUpdate.phonenumber" class="form-control" />
            </div>
            <div class="col">
                <label for="txtLocation" class="form-label">Location</label>
                <input type="text" v-model="userToUpdate.location" class="form-control" />
            </div>
            <div class="col">
                <label for="txtImageUrl" class="form-label">Image URL</label>
                <input type="text" v-model="userToUpdate.imageUrl" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Update</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { reactive, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

let userToUpdate = reactive({
  id: "0",
  name: "",
  email: "",
  phonenumber: "",
  location: "",
  imageUrl: "",
});
 
const router = useRouter();
const route = useRoute();
 
onMounted(() => {
  axios
    .get(`http://localhost:4000/users/${route.params.id}`)
    .then((response) => {
        userToUpdate.id = response.data.id;
        userToUpdate.name = response.data.name;
        userToUpdate.email = response.data.email;
        userToUpdate.phonenumber = response.data.phonenumber;
        userToUpdate.location = response.data.location;
        userToUpdate.imageUrl = response.data.imageUrl;
    });
});
 
const updateUser = () => {
  axios.put(`http://localhost:4000/users/${route.params.id}`, userToUpdate).then(() => {
    router.push("/");
  });
};
</script>