<template>
    <div id="search">
        <p>Shit works</p>
        <topbar />
        <businesses />
    </div>
</template>

<script>
import Businesses from './Businesses';
import Topbar from './Topbar';

export default {
  name: 'Search',
  components: {
    Businesses,
    Topbar,
  },
};
</script>
