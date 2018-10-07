<template>
  <div class="home">
    <HelloOnePage/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloOnePage from '@/components/pages/HelloOnePage.vue'

export default {
  name: 'home',
  components: {
    HelloOnePage
  }
}
</script>
