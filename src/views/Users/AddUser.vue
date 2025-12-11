<template>
    <div class="row">
        <form @submit.prevent="addNewUser">
            <legend>Add New User's</legend>
            <div class="col">
                <label for="txtwonderName" class="form-label">User Name</label>
                <input type="text" v-model="newUser.name" class="form-control" />
            </div>
            <div class="col">
                <label for="txtEmail" class="form-label">User Email</label>
                <input type="text" v-model="newUser.email" class="form-control" />
            </div>
            <div class="col">
                <label for="txtPhonenumber" class="form-label">User Phone number</label>
                <input type="text" v-model="newUser.phonenumber" class="form-control" />
            </div>
            <div class="col">
                <label for="txtLocation" class="form-label">User Location</label>
                <input type="text" v-model="newUser.location" class="form-control" />
            </div>
            <div class="col">
                <label for="txtImageUrl" class="form-label">Image URL</label>
                <input type="text" v-model="newUser.imageUrl" class="form-control" />
            </div>
            <button type="submit" class="btn btn-primary">Add</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import axios from "axios";
import { reactive } from "vue";
import { useRouter } from "vue-router";

let newUser = reactive({
  name: "",
  email: "",
  phonenumber: "",
  location: "",
  imageUrl: "",
});
const router = useRouter();
const addNewUser = () => {
  axios.post("http://localhost:4000/users", newUser).then(() => {
    router.push("/");
  });
};
</script>

