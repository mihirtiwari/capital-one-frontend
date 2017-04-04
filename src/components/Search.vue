<template>
    <div id="search" class="container">
        <h1>Search Results:</h1>
        <div class="row">
            <businesses />
        </div>
    </div>
</template>

<script>
import Businesses from './Businesses';

export default {
  name: 'Search',
  components: {
    Businesses,
  },
};
</script>
