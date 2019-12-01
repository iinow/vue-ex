const rx = require('rxjs')
const op = require('rxjs/operators')
rx.of(1, 2, 3, 4).pipe(
  op.map(v => v * v)
).subscribe({
  next: (data) => {
    console.log(data)
  }
})

function foo () {
  console.log('helloi')
  return 42
}

const x = foo.call()
console.log(x)
const y = foo.call()
console.log(y)

const arr = [1, 2, 3, 4, 5].reverse()
rx.from(arr).subscribe({
  next: (data) => {
    console.log(data)
  }
})

console.log('타임아웃 예제')
const ver = new rx.Observable((ver) => {
  ver.next(1)
  ver.next(1)
  ver.next(1)
  const t = setTimeout(() => {
    ver.next(2)
  }, 1000)

  return () => {
    clearInterval(t)
  }
})

ver.subscribe({
  next: (d) => {
    console.log(d)
  }
}).unsubscribe()

console.log('# interval')
const inter1 = rx.interval(400)

inter1.subscribe({
  next: (data) => {
    console.log(data)
  }
}).unsubscribe()

console.log('# Subject')

const source = rx.from([1, 2, 3])
const subject = new rx.Subject()
const multicated = source.pipe(op.multicast(subject))
multicated.subscribe({
  next: (v) => {
    console.log('observerA: ' + v)
  }
})

multicated.subscribe({
  next: (v) => {
    console.log('observerB: ' + v)
  }
})

multicated.connect()
