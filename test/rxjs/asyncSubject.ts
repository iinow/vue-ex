/**
 * Observable 의 complete() 를 호출하기 전 마지막 data 를 가져온다.
 */
import { AsyncSubject } from 'rxjs'
import {} from 'rxjs/operators'

const subject = new AsyncSubject()
subject.subscribe({
  next: (data) => {
    console.log(`observerA: ${data}`)
  }
})

for(let i = 1; i < 5; i++){
  subject.next(i)
}

subject.subscribe({
  next: (v) => {
    console.log(`observerB: ${v}`)
  }
})

subject.next(5)
subject.complete()
