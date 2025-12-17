<template>
    <div class="container">
        <div class="row m-2">
            <div class="col col-md-4 offset-md-4">
                <RouterLink to="/adduser" class="btn btn-primary">Add</RouterLink>
            </div>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <div class="col" v-for="user in allUsers" :key="user.id">
                <div class="card">
                    <img :src="user.imageUrl" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{{ user.name }}</h5>
                        <p class="card-text">Email: {{ user.email }}</p>
                        <p class="card-text">Phone number: {{ user.phonenumber }}</p>
                        <p class="card-text">Location: {{ user.location }}</p>
                        <router-link class="btn btn-primary" :to="`/edituser/${user.id}`">Edit</router-link>
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
    <!-- <ConfirmDeletePopup @confirmdelete-click="confirmDelete"></ConfirmDeletePopup> -->
</template>

<script setup>
    import { ref, onMounted } from "vue";
    //import ConfirmDeletePopup from "../../components/ConfirmDeletePopup.vue";
    import axios from "axios";

    const allUsers = ref([])
    const userToDeleteId = ref(["0"])a
    // let deleteModal;

    onMounted(() => {
        //deleteModal = new window.bootstrap.Modal(document.getElementById("deleteModal"));
        axios.get("http://localhost:4000/users").then((response) => {
            allUsers.value = response.data;
        });
    });

    // const openDeleteModal = (id) => {
    //     itemToDeleteId.value = id;
    //     deleteModal.show();
    // };

    // const confirmDelete = () => {
    //     axios.delete(`http://localhost:4000/users/${userToDeleteId.value}`)
    //          .then(() => {
    //             allUsers.value = allUsers.value.filter(
    //                 (_) => _.id !== userToDeleteId.value
    //             );
    //             userToDeleteId.value = 0;
    //             deleteModal.hide();
    //     });
    // };

    const deleteUser = (id) => {
        userToDeleteId.value = id;
        axios.delete(`http://localhost:4000/users/${userToDeleteId.value}`)
             .then(() => {
                allUsers.value = allUsers.value.filter(
                    (_) => _.id !== userToDeleteId.value
                );
                userToDeleteId.value = 0;
        });
    };

// edit user
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
//addUser
const router = useRouter();
const addNewUser = () => {
  axios.post("http://localhost:4000/users", newUser).then(() => {
    router.push("/");
  });
};
</script>
