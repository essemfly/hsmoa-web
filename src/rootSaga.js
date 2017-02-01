import { watchStreamings } from './home/sagas'
import { watchSchedules } from './schedule/sagas'
import { watchTop100 } from './top100/sagas'

export function* rootSaga() {
    yield[
      watchStreamings(),
      watchSchedules(),
      watchTop100(),
    ]
}