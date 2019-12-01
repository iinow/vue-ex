import { TestScheduler } from 'rxjs/testing'

const testScheduler = new TestScheduler((act, exp) => {
  expect(act).toEqual(exp)
})

it('generate the stream correctly', () => {
  testScheduler.run(helpers => {
    const {} = helpers
  })
})