import { useSelector } from 'react-redux'
import Clock from './Clock'
import Counter from './Counter'

export default () => {
  const lastUpdate = useSelector(state => state.example.lastUpdate)
  const light = useSelector(state => state.example.light)

  return (
    <div>
      <Clock lastUpdate={lastUpdate} light={light} />
      <Counter />
    </div>
  )
}
