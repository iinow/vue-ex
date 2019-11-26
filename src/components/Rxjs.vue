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
import { messageService } from '../service'

export default {
  mounted: function () {
    // const observable = new Observable((sub) => {
    //   sub.next(1)
    //   sub.next(2)
    //   sub.next(3)
    //   setTimeout(() => {
    //     sub.next(4)
    //     sub.complete()
    //   }, 1000)
    // })
    // observable.subscribe({
    //   next (x) {
    //     console.log(x)
    //   },
    //   error (err) {
    //     console.log(err)
    //   },
    //   complete (complete) {
    //     console.log(complete)
    //   }
    // })
    // console.log('Just after subscribe')
    // const foo = new Observable(sub => {
    //   console.log('Hello')
    //   sub.next(42)
    // })
    // foo.subscribe(x => {
    //   console.log(x)
    // })
    // foo.subscribe(y => {
    //   console.log(y)
    // })
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
