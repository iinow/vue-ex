import axios from 'axios'
import { from } from 'rxjs'
import { tap } from 'rxjs/operators'

/**
 * Axios 의 결과값 Promise를 observable 로 넣게 되면 데이터를 전달받는다
 * Promise 의 resolve 나 reject
 */
function fromLate (promise) {
  return from(promise).pipe(
    tap(next => {
      console.log(next)
    }, err => {
      console.log(err)
    }, () => {
      console.log('complete call')
    }),
    tap(next => {}),
    tap(next => {})
  )
}

export function get (url) {
  return fromLate(axios.get(url))
}
