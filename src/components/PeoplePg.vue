/* eslint-disable */
<template>
    <div>
      <div class="flex items-center justify-center mb-4">
        <h2 class="text-6xl font-bold text-blue-800">User's Data</h2>
      </div>
      <input
        type="text"
        class="w-60 p-1   border-black border-2"
        placeholder="Search Users..."
        v-model="searchInput"
      />
      <table>
        <thead>
          <tr>
            <th>User Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <!-- </table> -->
  
        <!-- {{ filteredList() }} -->
  
        <tbody>
          <tr v-for="(user, index) in filteredList" :key="index">
            <!-- <td>{{ user.address.address }}</td> -->
            <td>{{ user.firstName }}</td>
            <td>{{ user.age }}</td>
            <td>{{ user.address.address }}</td>
            <td>{{ user.gender }}</td>
            <td>
              <div class="flex flex-row md:gap-x-3 gap-x-0">
                <button
                  class="text-blue-500 hover:text-blue-600"
                  @click="openModalAdd"
                >
                  Add
                </button>
  
                <button
                  class="text-blue-500 hover:text-blue-600"
                  @click="
                    userId = user.id;
                    openModalUpdate();
                  "
                >
                  Update
                </button>
  
                <button
                  @click="
                    userId = user.id;
                    deleteUser();
                  "
                  class="text-blue-500 hover:text-blue-600"
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- <div v-if="ModalOpen">
        <Modal :ModalOpen=ModalOpen />
      </div> -->
      <!-- Modal -->
      <div v-if="ModalOpen || ModalOpenUpdate">
        <TransitionRoot as="template" :show="open">
          <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild
              as="template"
              enter="ease-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in duration-200"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div
                class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              />
            </TransitionChild>
  
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div
                class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
              >
                <TransitionChild
                  as="template"
                  enter="ease-out duration-300"
                  enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enter-to="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leave-from="opacity-100 translate-y-0 sm:scale-100"
                  leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <DialogPanel
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                  >
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                      <div class="sm:flex sm:items-start">
                        <div
                          class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                        >
                          <ExclamationTriangleIcon
                            class="h-6 w-6 text-red-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div
                          class="mt-3 w-full text-center sm:ml-4 sm:mt-0 sm:text-left"
                        >
                          <DialogTitle
                            v-if="ModalOpen"
                            as="h3"
                            class="text-base font-semibold leading-6 text-gray-900"
                            >Add A User</DialogTitle
                          >
                          <DialogTitle
                            v-else-if="ModalOpenUpdate"
                            as="h3"
                            class="text-base font-semibold leading-6 text-gray-900"
                            >Update User</DialogTitle
                          >
  
                          <div class="mt-2 w-full">
                            <div class="flex flex-col w-full gap-y-4">
                              <input
                                v-model="nameAdd"
                                class="w-full p-3 border border-black"
                                type="text"
                                placeholder="Enter User Name"
                              />
                              <input
                                v-model="ageAdd"
                                class="w-full p-3 border border-black"
                                type="number"
                                placeholder="Enter User's Age"
                              />
                              <input
                                v-model="addressAdd"
                                class="w-full p-3 border border-black"
                                type="text"
                                placeholder="Enter User's Address"
                              />
                              <input
                                v-model="genderAdd"
                                class="w-full p-3 border border-black"
                                type="text"
                                placeholder="Enter User's Gender"
                              />
                            </div>
                            <!-- <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p> -->
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                    >
                      <button
                        v-if="ModalOpen"
                        type="button"
                        class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        @click="
                          open = false;
                          ModalOpen = false;
                          addUser();
                        "
                      >
                        Add
                      </button>
                      <button
                        v-if="ModalOpenUpdate"
                        type="button"
                        class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        @click="
                          open = false;
                          ModalOpenUpdate = false;
                          updateUser();
                        "
                      >
                        Update
                      </button>
  
                      <button
                        type="button"
                        class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        @click="open = false"
                        ref="cancelButtonRef"
                      >
                        Cancel
                      </button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </TransitionRoot>
      </div>
      <!-- End Modal -->
    </div>
  </template>
  
  <script setup >
  import axios from "axios";
  // import Modal from "./ModalInput.vue"
  import {  onMounted,  ref, watch,computed } from "vue";
  import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  } from "@headlessui/vue";
  import { ExclamationTriangleIcon } from "@heroicons/vue/24/outline";
  
  // Modal ka apna ref
  const open = ref(false);
  const myData = ref([]);
  // For Add
  const ModalOpen = ref(false);
  // For Update
  const ModalOpenUpdate = ref(false);
  const nameAdd = ref("");
  const ageAdd = ref(0);
  const addressAdd = ref("");
  const genderAdd = ref("");
  const userId = ref(0);
  let searchInput = ref("");
  
  const getData = async () => {
    try{
    let users = await axios.get("https://users-hkgi.onrender.com/people");

    console.log(users.data);
    // const newdata:Array=users.data.users
    myData.value = users.data;
    console.log(myData.value, "pk");
    }
    catch(error){
        console.error("Error fetching data:", error.message);

    }
  };
  onMounted(() => {
    getData();
  });
  
  watch(userId, (newValue) => {
    console.log(newValue, "WWWWW");
  });
  const deleteUser = async () => {
    const deleted = await axios.delete(
      `https://users-hkgi.onrender.com/people/${userId.value}`  
    );
    myData.value = myData.value.filter(user => user.id !== userId.value);
    console.log(deleted.data, "Deleted");
    alert(`Deleted user: ${userId.value}`);
  };
  // Opening modal for add
  const openModalAdd = () => {
    ModalOpen.value = true;
    open.value = true;
  };
  
  // Opening modal for Update
  const openModalUpdate = () => {
    ModalOpenUpdate.value = true;
    open.value = true;
    if (ModalOpen.value == true) {
      ModalOpen.value = false;
    }
  };
  
  const addUser = async () => {
    try {
      // Replace the URL with your actual API endpoint
      const response = await axios.post( "https://users-hkgi.onrender.com/people", {
        // Replace with the data you want to send in the POST request
        firstName: nameAdd.value,
        age: ageAdd.value,
        address: {address:addressAdd.value},
        gender: genderAdd.value,
      });

      myData.value.push(response.data)
      console.log("User added successfully:", response.data);
      
    } catch (error) {
      console.error("Error adding user:", error);
    }
  };
  
  const updateUser = async () => {
    const apiUrl = `https://users-hkgi.onrender.com/people/${userId.value}`;
  
    const updatedData = {
      firstName: nameAdd.value,
      age: ageAdd.value,
      address: {address:addressAdd.value},
      gender: genderAdd.value,
    };
  
    try {
      const updated = await axios.put(apiUrl, updatedData);
      myData.value = myData.value.map(user => {
      if (user.id === userId.value) {
        // If it's the user being updated, replace it with the updated data
        return updated.data;
      }
      // If it's not the user being updated, leave it unchanged
      return user;
    });
      console.log(updated.data, "Updated");
      alert(`Updated user: ${userId.value}`);
    } catch (error) {
      console.error(
        "Update failed:",
        error.response ? error.response.data : error.message
      );
      // Handle the error as needed
    }
  };

  
  const filteredList = computed(() => {
    if (searchInput.value === "") return myData.value;
    return myData.value.filter(
      (item) =>
        item.firstName.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  });
  </script>
  
  <style>
  table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }
  
  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
  @media only screen and (max-width: 767px) {
    td,
    th {
      /* Adjust styles for mobile */
      
      padding: 7.3px;
      font-size: 13px;
    }
  }
  
  /* Media query for laptops/desktops with a minimum width of 768px */
  @media only screen and (min-width: 768px) {
    /* Add specific styles for laptops/desktops here if needed */
  }
  
  tr:nth-child(even) {
    background-color: #dddddd;
  }
  </style>
  