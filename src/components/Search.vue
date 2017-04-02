<template>
    <div id="search" class="container">
        <h1>Search Results:</h1>
        <div class="row">
            <!-- <topbar /> -->
            <businesses />
        </div>
    </div>
</template>

<script>
import Businesses from './Businesses';
// import Topbar from './Topbar';

export default {
  name: 'Search',
  components: {
    Businesses,
    // Topbar,
  },
};
</script>

<style scoped>
.row {
    /*border: 1px solid black;*/
}
</style>
