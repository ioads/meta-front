<template>
    <div class="relative min-h-screen md:flex">

  <!-- mobile menu bar -->
  <div class="bg-gray-800 text-gray-100 flex justify-between md:hidden">
    <!-- logo -->
    <a href="#" class="block p-4 text-white font-bold">Better Dev</a>

    <!-- mobile menu button -->
    <button class="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700">
      <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </div>

  <!-- sidebar -->
  <div class="sidebar bg-blue-800 text-blue-100 w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">


    <!-- nav -->
    <nav>
      <a href="/" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Dashboard
      </a>
      <a href="/products" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Produtos
      </a>
      <a href="/categories" class="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
        Categorias
      </a>
    </nav>
  </div>

  <!-- content -->
  <div class="flex-1 p-10 text-2xl font-bold">
    <div class="flex flex-col text-left">
        Dashboard

              <div v-for="category in categories" :key="category.id">
                <div class="flex justify-center relative top-1/3 p-5">
                <div class="relative grid grid-cols-1 gap-4 p-4 mb- border rounded-lg bg-white shadow-lg">
                    <div class="relative flex gap-4">
                        <div class="flex flex-col w-full">
                            <div class="flex flex-row justify-between">
                                <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">{{ category.description}}</p>
                                <a class="text-gray-500 text-xl" href="#"><i class="fa-solid fa-trash"></i></a>
                            </div>
                        </div>
                    </div>
                    <p class="-mt-4 text-gray-500">{{ category.count }} produtos cadastrados.</p>
                </div>
                </div>
              </div>
            </div>
            </div>

</div>
</template>

<script>

import axios from 'axios'

export default {
    name: "LightWithIconsAtBottom",
    data() {
        return {
            moved: true,
            categories: '',
        };
    },
    mounted () {
      axios
        .get('http://localhost:8000/api/categories/amount')
        .then(response => (
            this.categories = response.data,
            console.log(this.categories)
        ))
    },
    methods: {
        sidebarHandler() {
            var sideBar = document.getElementById("mobile-nav");
            sideBar.style.transform = "translateX(-260px)";
            if (this.$data.moved) {
                sideBar.style.transform = "translateX(0px)";
                this.$data.moved = false;
            } else {
                sideBar.style.transform = "translateX(-260px)";
                this.$data.moved = true;
            }
        },
    },
};
</script>
