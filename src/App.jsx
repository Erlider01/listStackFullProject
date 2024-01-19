import { useEffect, useState } from 'react'
import { getNotes } from './services/getNotes'
import { Cargando } from './components/Cargando'
import { Notes } from './components/Notes'
import { Formulary } from './components/Formulary'

function App () {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes()
      .then(res => {
        console.log(res.data)
        setNotes(res.data)
      })
  }, [])

  const handlerNotes = param => {
    setNotes(param)
  }

  return (
    <>
      <h1>Notes</h1>
      {!notes.length ? <Cargando /> : <Notes notes={notes} />}
      <Formulary setNotes={handlerNotes} />
    </>
  )
}

export default App
