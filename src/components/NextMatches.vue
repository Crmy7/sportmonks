<template>
    <div class="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div v-for="(item, index) in dataMatchs" :key="index">
            <h2 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                Prochains matchs</h2>
            <h2>{{ item.name }}</h2>
            <p>Starting at: {{ item.starting_at }}</p>
            <p>Result Info: {{ item.result_info }}</p>
            <!-- Ajoutez d'autres propriétés selon vos besoins -->
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            dataMatchs: [],
        };
    },
    mounted() {
        axios
            .get('http://localhost:3000/prochains-matchs')
            .then(response => {
                // console.log(response.data);
                this.dataMatchs = [response.data.data]; // Mettez les données dans un tableau
            })
            .catch(error => {
                console.error(error);
            });

    }
};
</script>
  