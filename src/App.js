import './App.css'
import Header from './Header'
import TinderCards from './TinderCards'
import SwipeButton from './SwipeButtons'

function App() {
  return (
    <div className='app'>
      {/* {header} */}
      <Header />
      {/* {tindre card} */}
      <TinderCards />
      {/* {swipeButton} */}
      <SwipeButton />
    </div>
  )
}

export default App
