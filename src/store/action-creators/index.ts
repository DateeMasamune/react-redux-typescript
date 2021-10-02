import * as UserActionCreators from './user'
import * as TodoActionCreators from './todo'

export default { // объединяем все экшен криейторы
  ...TodoActionCreators,
  ...UserActionCreators
}