<template>
<v-container>
  it's Films
</v-container>
</template>

<script>
import router from '@/router';

export default {
  components: {
  },
  mounted() {
    if(!this.$store.getters.isAuthenticated) {
      router.push('/');
    }
  }
}
</script>

<style scoped>

</style>

