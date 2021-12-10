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
        Adicionar Categoria

        <div class="py-5">
            <form class="w-full max-w-lg" method="post">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        DESCRIÇÃO
                    </label>
                    <input v-model="description" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text">
                    </div>
                </div>
                <button type="button" class="bg-green-500 rounded-md w-40 text-white" v-on:click="save()">
                    Salvar
                </button>
            </form>
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
            description: '',
        };
    },
    mounted () {
        axios
        .get('http://localhost:8000/api/categories/'+this.$route.params.id)
        .then(response => (
            this.description = response.data.description
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
        save() {
            axios
            .post('http://localhost:8000/api/categories/'+this.$route.params.id, {description: this.description})
            .then(() => {
                alert('Categoria atualizada com sucesso')
            })
            .catch((error) => {
                console.log(error);
            });
        }
    },
};
</script>
