<template>
  <div>
    RxJS 실행
  <button @click="sendMsg">
    추가
  </button>
  <button @click="clearMsg">
    Clear
  </button>
    <ol>
      <li v-for="(obj, index) in msg" :key="index">
        {{obj.text}}
      </li>
    </ol>
  </div>
</template>

<script>
import { messageService, subscriber as sub } from '../service'
import { Observable } from 'rxjs'
// import { map } from 'rxjs/operators'

export default {
  mounted: function () {
    const ob = new Observable()
    ob.subscribe(sub)
    console.log(!!ob)
    sub.next('야시시알바라')
    sub.complete()
  },
  data () {
    return {
      msg: []
    }
  },
  created: function () {
    this.subscription = messageService.getMessage().subscribe(data => {
      if (data) {
        this.msg.push(data)
      } else {
        this.msg = []
      }
    })
  },
  beforeDestroy: function () {
    this.subscription.unsubscribe()
  },
  methods: {
    sendMsg () {
      messageService.sendMessage(new Date().toString())
    },
    clearMsg () {
      messageService.clearMessage()
    }
  }
}
</script>
