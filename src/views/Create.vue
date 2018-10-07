<template>
  <div class="create">
	<CreateDemo/>
  </div>
</template>
<script>
// @ is an alias to /src
import CreateDemo from '@/components/pages/CreateDemo.vue';
export default {
  name: 'create',
  components: {
  	CreateDemo,
  }
}
</script>