<template>
    <div div id="businesses">
        <div id="topbar" class="container">
            <div class="row" id="outer">
                <h3>Filter your results:</h3>
                <div class="col-md-7">
                    <div class="col-md-6">
                        <div style="padding: 0px 20px 20px 20px">
                            <!-- Figure out how to add prices -->
                            <p style="margin: 0; margin-top: 10px">How expensive?</p>
                            <input id="price" type="range" min="0" max="4" value="0" step="1" v-model="price"/>
                            <br>
                            <!-- Figure out how to add radii -->
                            <p style="margin: 0">In what radius?</p>
                            <input id="radius" type="range" min="0" max="25" value="0" step="5" v-model="radius"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div style="padding: 0px 20px 20px 20px">
                            <p style="margin: 0; margin-top: 10px">Open Now?</p>
                            <input type="radio" name="open" value="yes" v-model="open_now"> Yes&ensp;
                            <input type="radio" name="open" value="no" v-model="open_now"> No
                            <p style="margin: 0; margin-top: 10px">Other filters?</p>
                            <input type="checkbox" name="filter" value="hot" v-model="hot_new"> Hot and New&ensp;
                            <input type="checkbox" name="filter" value="waitlist" v-model="waitlist"> Has a Waitlist&ensp;
                            <input type="checkbox" name="filter" value="cashback" v-model="cashback"> Has Cashback&ensp;
                            <input type="checkbox" name="filter" value="deals" v-model="deals"> Has Deals&ensp;
                        </div>
                    </div>
                    <div>
                        <button style="width: 10%" class="btn" v-on:click="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="businesses" class="container">
            <h3 style="margin-left: 30px">Results:</h3>
            <div class="row">
                <div v-for="b in businesses" class="col-md-7 col-md-offset-2">
                    <a :href="b.url">
                        <div class="card">
                            <!-- Images aren't same size so acount for it -->
                            <img id="img" v-bind:src="b.image" />
                            <p id="name">{{ b.name }}</p>
                            <p id="phone"><b>Phone:</b> {{ b.phone }}</p>
                            <p id="address"><b>Address:</b><br>{{ b.address }}</p>
                            <!-- Put in Yelp Stars -->
                            <p id="rating"><b>Yelp Rating: </b>{{ b.rating }}</p>
                            <!-- Information is wrong; currently checking f business still exists or not -->
                            <!-- <p id="closed"><b>Currently: </b></p>
                            <img src="../assets/open.gif" v-if="b.closed == false"/>
                            <p id="closed" v-else="b.closed == true"><b>Currently: </b>Open</p> -->
                        </div>
                    </a>
                    <!-- <modal v-bind:id="b.id" @review="add_review"/> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import Modal from './Modal';

export default {
  name: 'Businesses',
  data() {
    return {
      businesses: [],
      base_url: 'http://127.0.0.1:5000/',
      b_and_id: [],
      reviews: [],
      price: 0,
      radius: 0,
      open_now: '',
      hot_new: '',
      waitlist: '',
      cashback: '',
      deals: '',
      id: '',
    };
  },
  // components: {
  //   Modal,
  // },
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
    submit() {
      this.businesses = []
      if (this.price != 0 || this.radius != 0 || (this.open_now != '' && this.open_now != 'no') || this.hot_new != '' || this.waitlist != '' || this.cashback != '' || this.deals != ''){
          var location = localStorage.getItem('city');
          var p = 0;
          var open = 'false';
          var radius = this.radius;

          if (this.price != 0){
            p = this.price;
          }

          if (radius != 0){
              radius = this.radius;
          }

          if (this.open_now == 'yes'){
              open = 'true';
          }

          var attributes = '';

          if (this.hot_new != ''){
              attributes += 'hot_and_new,';
          }

          if (this.waitlist != ''){
              attributes += 'waitlist_reservation,';
          }

          if (this.cashback != ''){
              attributes += 'cashback,'
          }

          if (this.deals != ''){
              attributes += 'deals'
          }

          var url = 'businesses/location=' + location + '&price=' + p + '&radius=' + radius + '&open=' + open + '&filters=' + attributes;

          this.$http.get(this.base_url + url).then(response => {
              var res = response.body;
              for (var i = 0; i < res.length; i++){
                  this.businesses.push(res[i]);
                  this.b_and_id.push({
                      'name': res[i].name,
                      'id': res[i].id,
                  });
              }
          }, response => {
              this.businesses.push({
                  'name': 'Error! Please try again! ',
                  'phone': 'Error! Please try again!',
                  'address': 'Error! Please try again!',
                  'rating': 'Error! Please try again!'
              })
          });
      }
      else{
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
      }
    },
    add_review(value) {
        this.reviews.push(value);
        // console.log(this.reviews)
    }
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
    /*border: 1px solid black;*/
    padding-top: 30px;
}

a {
    text-decoration: none;
    color: black;
}

#outer {
    min-height: 160px;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    margin: 0;
    padding: 0;
    /*background-color: #ff999e;*/
}

#topbar {
    padding: 0;
}

#topbar .col-md-7 {
    width: 100%;
    height: 100%;
}
/*
tab1 {
    padding-left: 4em;
}

tab2 {
    padding-left: 4em;
}

tab3 {
    padding-left: 4em;
}

tab4 {
    padding-left: 4em;
}*/

#price {
    width: 50%;
}

#radius {
    width: 50%;
}

#closed {
    width: 50%;
}

.btn {
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 35px;
    background-color: red;
}

h3 {
    margin-left: 40px;
}

.modal-header {
    padding: 10px 0px 0px 10px;
}
</style>
