<template>
  <div class="grid max-w-screen-xl px-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
    <div v-for="(item, index) in dataLigues" :key="index">
      <!-- <h2>{{ item.data }}</h2> -->
      <h3>{{ item.name }}</h3>
      <!-- Ajoutez d'autres propriétés selon vos besoins -->
    </div>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  name: 'Ligues',
  data() {
    return {
      dataLigues: []
    };
  },
  mounted() {

    axios
      .get('http://localhost:3000/ligues')
      .then(response => {
        console.log(response.data);
        this.dataLigues = [response.data.data]; // Mettez les données dans un tableau
      })
      .catch(error => {
        console.error(error);
      });
  }

};
</script>
  