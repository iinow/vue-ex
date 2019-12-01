/**
 * 메시지 내용을 비동기로 전달 받는다.
 * observeOn(*) 매개인자는 SchedulerLike 를 상속받는 자식들만 들어갈 수 있다.
 */
import { Observable, asyncScheduler, interval } from 'rxjs'
import { observeOn } from 'rxjs/operators'

const observable = new Observable((observer) => {
  observer.next(1)
  observer.next(2)
  observer.next(3)
  observer.complete()
}).pipe(
  observeOn(asyncScheduler)
)

console.log('just before subscribe')
observable.subscribe({
  next: (v) => console.log('got value ' + v),
  error: (e) => console.error('something wrong occurred: ' + e),
  complete: () => console.log('done')
})
console.log('just after subscribe')

const sche = asyncScheduler.schedule(() => {
  console.log('timeout 과 같은 효과')
}, 1000)

interval(1000, asyncScheduler).subscribe({
  next: (v) => console.log(v)
})