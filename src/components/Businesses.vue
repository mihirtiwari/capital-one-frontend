<template>
    <div id="businesses" class="container">
        <div class="row">
            <div v-for="b in businesses" class="col-md-7 col-md-offset-2">
                <div class="card">
                    <!-- Images aren't same size so acount for it -->
                    <img id="img" v-bind:src="b.image" />
                    <p id="name"><a v-bind:href="b.url"> {{ b.name }} </a></p>
                    <p id="phone"><b>Phone:</b> {{ b.phone }}</p>
                    <p id="address"><b>Address:</b><br>{{ b.address }}</p>
                    <!-- Put in Yelp Stars -->
                    <p id="rating"><b>Yelp Rating: </b>{{ b.rating }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Businesses',
  data() {
    return {
      businesses: [],
      base_url: 'http://127.0.0.1:5000/',
      b_and_id: [],
    };
  },
  created() {
    this.addBusiness();
  },
  methods: {
    addBusiness() {
      /* eslint-disable */
      var location = localStorage.getItem('city');
      this.$http.get(this.base_url + 'businesses/location=' + location).then(response => {
          var res = response.body;
          for (var i = 0; i < res.length; i++){
              this.businesses.push(res[i]);
              this.b_and_id.push({
                  'name': res[i].name,
                  'id': res[i].id,
              })
          }
      }, response => {
          this.businesses.push({
              'name': 'Error! Please try again! ',
              'phone': 'Error! Please try again!',
              'address': 'Error! Please try again!',
              'rating': 'Error! Please try again!'
          })
      });
    },
  },
};
</script>

<style scoped>
.card {
    min-height: 150px;
    height: 100%;
    padding: 10px 10px 10px 10px;
    border: 1px solid black;
    margin-bottom: 10px;
    overflow: auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
}

.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

p {
    padding-bottom: 10px;
}

#name {
    width: 70%;
    float: left;
    font-size: 20px;
}

#img {
    width: 30%;
    height: 30%;
    float: right;
}

#rating {
    padding-bottom: 0px;
    width: 70%;
    float: left;
}

#phone {
    width: 70%;
    float: left;
}

#address {
    width: 70%;
    float: left;
}

.row {
    /*margin-top: 50px;*/
    border: 1px solid black;
    padding-top: 30px;
}

a {
    text-decoration: none;
    color: black;
}
</style>
