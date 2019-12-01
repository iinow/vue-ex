import { from } from 'rxjs'
import { tap, map, take, last } from 'rxjs/operators'

from([1, 2, 3, 4]).pipe(
  tap((v: number) => console.log(v)),
  map((v: number) => v * v),
  tap((v: number) => console.log(v)),
//   take(1)
  last()
).subscribe({
  next: v => {
    console.log(`결과값 받음: ${v}`)
  },
  error: e => {
    console.log(`애러.. ${e}`)
  },
  complete: () => {
    console.log(`complete!!`)
  }
})