import { useState } from 'react'
import './App.css'
import PokemonApplication from './components/PokemonApplication'

function App() {
  const [showApp,setShowApp] = useState(false);

  return (
    <>
      <button onClick={() => setShowApp(!showApp)}>
        Start Pokemon App
      </button>
      {showApp === true && (
        <div>
          <PokemonApplication />
        </div>
      )}
    </>
  )
}

export default App
