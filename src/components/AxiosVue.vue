<template>
  <div>
    {{this.res}}
  </div>
</template>

<script>
import { get } from '../config'

const url = 'http://api.github.com/orgs/octokit/repos'
export default {
  name: 'AxiosExample1',
  data () {
    return {
      res: undefined
    }
  },
  methods: {
    call: function () {
      console.log('호출됨 ')
      get(url).subscribe(
        {
          next: (data) => {
            console.log(data)
          }
        }
      )
    }
  },
  mounted: function () {
    this.call()
  }
}
</script>
