<template>
  <main class="d-flex justify-content-center align-items-center">
    
      <div  v-if="data.current" class="card " style="width: 20rem;">
      
        <div class="card-body">
          <input v-model="inputValue" type="text" placeholder="City" class="form-control">
          <h6  class="card-text">Last update {{ data.current.last_updated }}</h6>
          <div><img  :src="data.current.condition.icon" alt="icon" > <span>{{data.current.condition.text}}</span></div>
          <p class="card-text">Location region name : {{data.location.name}}  </p>
          <p class="card-text">Location region : {{data.location.region}}  </p>
          <p class="card-text">Location country : {{data.location.country}}  </p>
          <p class="card-text">Location tz_id : {{data.location.tz_id}}  </p>
          <p class="card-text">Temperature in °C : {{data.current.temp_c}}  </p>
          <p class="card-text">Temperature in °F : {{data.current.temp_f}}  </p>
          <p class="card-text">Humidity : {{data.current.humidity}}  </p>
          <p class="card-text">Gust kph : {{data.current.gust_kph}}  </p>
          <p class="card-text">Gust mph : {{data.current.gust_mph}}  </p>
          
        </div>
      </div>
      <div v-else>
        <l-helix
  size="45"
  speed="2.5" 
  color="black" 
></l-helix>
      </div>
  </main>
</template>
<script>
import axios from 'axios';

export default {
  name: "WeatherView",
  data() {
    return {
      data: {},
      inputValue: "sfax" 
    };
  },
  async mounted() {
    this.fetchWeatherData(); 
  },
  watch: {
    inputValue: function () {
      this.fetchWeatherData(); 
    },
  },

  methods: {
    async fetchWeatherData() {
      try {
        let result = await axios.get(
          `https://api.weatherapi.com/v1/current.json?key=d2fb835a98794ce0814203429230910&q=${this.inputValue}&aqi=yes`
        );
        this.data = result.data;
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>