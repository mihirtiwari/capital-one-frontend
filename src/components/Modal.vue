<template>
    <div id="modal">
        <div>
            <!-- Modal -->
            <div class="modal fade" id="myModal" role="dialog">
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                      <p>Test</p>
                  </div>
                  <div class="modal-body">
                      <p>Test</p>
                  </div>
                </div>
              </div>
           </div>
       </div>
   </div>
</template>

<script>
export default {
  name: 'Modal',
  props: ['id'],
  data() {
    return {
      reviews: [],
      base_url: 'http://127.0.0.1:5000/',
    };
  },
  created() {
    this.getReviews(this.id);
  },
  methods: {
    getReviews(id) {
      this.reviews = [];
      /* eslint-disable */
      this.$http.get(this.base_url + 'reviews/id=' + id).then(response => {
          var res = response.body;
          var r = res.review;
          this.$emit('review', r);
      }, response => {
          this.reviews.push({
              'name': 'Error! Please try again!',
              'user_rating': 'Error Please try again!'
          })
      });
    },
  }
};
</script>
