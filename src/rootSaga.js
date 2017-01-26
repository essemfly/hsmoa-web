import { watchStreamings } from './home/sagas'

export function* rootSaga() {
    yield[
      watchStreamings()
    ]
}