<template>
  <main>
    <h2>Current Weather</h2>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="city"
          :rules="cityRules"
          label="City"
          clearable
        ></v-text-field>
        <v-btn
          v-on:click="getWeather">
          submit
        </v-btn>
      </v-form>
    <div v-if="loading">
      <img src="https://raw.githubusercontent.com/yemiwebby/vue-axios/master/src/assets/loader.gif"/>
      Loading.....
    </div>
    <div class="wrapper">
      <div class="row">
        <div v-for="item in weather" :key="item.id">
          <h3>{{ item }}</h3>
          </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data () {
    return {
      valid: true,
      cityRules: [v => !!v || 'City is required'],
      city:'',
      weather: null,
      loading: false
    }
  }, 
  methods: {
    getWeather: function () {
      if (this.$refs.form.validate()) {
        this.loading = true;
        console.log(this.city)
        axios.get("https://api.openweathermap.org/data/2.5/weather?q="+this.city+"&APPID=5a39737aff25893627aa6be396ee836a")
        .then((response)  =>  {
          console.log(response.data)
          this.weather = response.data;
          this.loading = false;
          this.$refs.form.reset()
        }, (error)  =>  {
          this.loading = false;
        })
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
