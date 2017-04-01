<template>
    <div id="businesses">
        <ul v-for="b in businesses">
            <li>{{ b.name }}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'Businesses',
  data() {
    return {
      businesses: [],
      base_url: 'http://127.0.0.1:5000/',
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
          var business = {};
          var res = response.body;
          for (var i = 0; i < res.length; i++){
              business = res[i];
              this.businesses.push(business);
          }
      }, response => {
          console.log('There was an error!');
      });
    },
  },
};
</script>
