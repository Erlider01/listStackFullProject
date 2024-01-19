import { getNotes } from '../services/getNotes'
import { postNotes } from '../services/postNotes'

export const Formulary = ({ setNotes }) => {
  const handlerSubmit = (e) => {
    e.preventDefault()

    const inputText = e.target.firstChild.value
    e.target.firstChild.value = ''

    let status

    postNotes(inputText).then((res) => {
      setNotes([])
      status = res.status
      if (status === 200) {
        getNotes().then((res) => {
          setNotes(res.data)
        })
      } else { return console.log('error send text') }
    })
  }

  return (
    <form onSubmit={handlerSubmit} style={{ margin: '20px' }} action=''>
      <input style={{ marginRight: '20px' }} type='text' />
      <button style={{ paddingLeft: '10px', paddingRight: '10px' }}>
        Sent
      </button>
    </form>
  )
}
