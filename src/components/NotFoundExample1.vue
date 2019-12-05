<template>
  <div>
    {{this.res}}
  </div>
</template>

<script>
import { get } from '../config'

const url = 'https://api.github.com/orgs/octokit/repos'

export default {
  name: 'NotFoundEx1',
  mounted: function () {
    this.call()
  },
  data () {
    return {
      res: undefined
    }
  },
  methods: {
    call: function () {
      get(url).subscribe({
        next: v => {
          this.res = v
          return this.res
        },
        error: v => {
          this.res = `error: ${v}`
          return this.res
        }
      })
    }
  }
}
</script>
