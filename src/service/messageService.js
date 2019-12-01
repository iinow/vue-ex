import { Subject, Subscriber } from 'rxjs'

const subject = new Subject()

export const messageService = {
  sendMessage: message => subject.next({ text: message }),
  clearMessage: () => subject.next(),
  getMessage: () => subject.asObservable()
}

export const subscriber = new Subscriber(next => {
  console.log(`sub => ${next}`)
}, err => {
  throw err
}, () => {
  console.log('완료')
})
