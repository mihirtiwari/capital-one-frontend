<template>
  <div class="main-page">
        <img src="../assets/food.jpg">
        <div class="container">
            <div class="row">
                <h1>{{ msg }}</h1>
            </div>
            <div class="row" style="margin-bottom: 50px">
                <input type="text" name="search" placeholder="Search your city..." class="col-md-3 col-md-offset-4" v-model="city">
            </div>
            <div class="row">
                <div class="col-md-4 col-md-offset-4">
                    <div class="col-md-offset-4">
                        <button style="width: 60%" class="btn" v-on:click="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      msg: 'Welcome',
      city: '',
    };
  },
  methods: {
    submit() {
        /* eslint-disable */
      if (this.city === "")
        window.alert("Please input a city!");
      else{
        localStorage.setItem("city", this.city);
        this.$router.push('/search');
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-page {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.main-page h1 {
    padding: 100px;
    position: relative;
    text-align: center;
    z-index: 2;
    font-size: 60px;
}

.main-page input {
    box-sizing: border-box;
    position: relative;
    z-index: 2;
    font-size: 20px;
    width: 35%;
}

input[type=text] {
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;
    padding-left: 20px;
}

input[type=text]:focus {
    width: 35%;
}

.main-page img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
    opacity: 0.35;
}

.btn {
    background-color: red;
}
</style>
