import './App.css'
import Game from './components/Game'
import NoteState from './context/noteState'

function App() {
  

  return (
    <>
      <NoteState>
        <Game/>
      </NoteState>
    </>
  )
}

export default App
