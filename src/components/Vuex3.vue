<template>
  <div>
    {{text}}
    <input v-model="body">
    <button @click="show">버튼</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import login from '../store/login'

export default {
  name: 'Vuex3',
  computed: {
    ...mapState(login.namepace, ['text'])
  },
  methods: {
    ...mapMutations(login.namepace, ['setText']),
    show: function () {
      this.setText(this.body)
    }
  },
  data () {
    return {
      body: undefined
    }
  }
}
</script>
