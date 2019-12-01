<template>
  <div>
    {{print()}}
  </div>
</template>

<script>
export default {
  name: 'RouterVuex',
  methods: {
    print: function () {
      const params = this.$store.state.route.params
      const query = this.$store.state.route.query
      const path = this.$store.state.route.path
      const body = this.$store.state.route
      console.log(body)
      return {params, query, path}
    //   return JSON.stringify(body)
    }
  }
}
</script>
