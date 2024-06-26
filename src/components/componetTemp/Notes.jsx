import { Note } from './Note'

export const Notes = ({ notes }) => {
  console.log(notes)
  return (
    <ul>
      {notes.map((element) => (
        <Note key={element.id} content={element.content} important={element.important} date={element.date} />
      ))}
    </ul>
  )
}
