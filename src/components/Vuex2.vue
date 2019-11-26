<template>
  <div>
    {{counter}}
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Vuex2',
  computed: mapGetters({
    counter: 'getCounter',
    doubleCounter () {
      return this.$store.getters.doubleCounter
    }
  })
}
</script>
