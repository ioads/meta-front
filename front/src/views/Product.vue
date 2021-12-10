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
        Produtos
        
        <button class="bg-green-500 rounded-md w-40 text-white">
            <a href="/products/new">Adicionar</a>
        </button>

        <div class="py-5">
            <form class="w-full max-w-lg" method="post">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full px-3">
                    <input v-model="keyword" v-on:keydown="search()" placeholder="Pesquise um produto" class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text">
                    </div>
                </div>
            </form>
        </div>

        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
                class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
                "
            >
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th
                                scope="col"
                                class="
                                px-6
                                py-3
                                text-left text-xs
                                font-medium
                                text-gray-500
                                uppercase
                                tracking-wider
                                "
                            >
                                Categoria
                            </th>
                            <th
                                scope="col"
                                class="
                                px-6
                                py-3
                                text-left text-xs
                                font-medium
                                text-gray-500
                                uppercase
                                tracking-wider
                                "
                            >
                                Produto
                            </th>
                            <th
                                scope="col"
                                class="
                                px-6
                                py-3
                                text-left text-xs
                                font-medium
                                text-gray-500
                                uppercase
                                tracking-wider
                                "
                            >
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200">
                        <tr v-for="product in data" :key="product.id">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">
                                        {{ product.category.description }}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">
                                        {{ product.description }}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="flex items-center">
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">
                                        <a :href="'/products/edit/'+product.id">Editar</a>
                                        </div>
                                    </div>
                                    <div class="ml-4">
                                        <div class="text-sm font-medium text-gray-900">
                                        <a :href="'/products/delete/'+product.id">Excluir</a>
                                        </div>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
            data: '',
            keyword: ''
        };
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
        search() {
            axios
            .post('http://localhost:8000/api/products/search', {search: this.keyword})
            .then(response => (
                this.data = response.data
            ))
        },
    },
    mounted () {
        axios
        .get('http://localhost:8000/api/products')
        .then(response => (
            this.data = response.data
        ))
    }
};
</script>
