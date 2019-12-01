/**
 * multicast 를 사용할 때 observer 가 구독을 할때 connect() 를 호출해줘야하는데
 * refCount() 를 호출하면 자동 connect() 가 호출 된다.
 * 구독자가 0명이면 자동 삭제 굳굳..
 */
const rx = require('rxjs')
const op = require('rxjs/operators')

const source = rx.interval(500)
const subject = new rx.Subject()
const refCounted = source.pipe(op.multicast(subject), op.refCount())
let sub1, sub2

console.log('observerA subscribed')
sub1 = refCounted.subscribe({
  next: (v) => {
    console.log(`observerA: ${v}`)
  }
})

setTimeout(() => {
  console.log('observerB subscribed')
  sub2 = refCounted.subscribe({
    next: v => console.log(`observerB: ${v}`)
  })
}, 600)

setTimeout(() => {
  console.log('observerA unsubscribed')
  sub1.unsubscribe()
}, 1200)

setTimeout(() => {
  console.log('observerB unsubscribed')
  sub2.unsubscribe()
}, 2200)
