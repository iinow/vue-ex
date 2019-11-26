<template>
  <div>
    {{this.$store.state.counter}}
    <button @click="add">+</button>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  name: 'Vuex1',
  methods: {
    add: function () {
      this.$store.state.counter++
    },
    sub: function () {
      this.$store.state.counter--
    }
  }
}
</script>
