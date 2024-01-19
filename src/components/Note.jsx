export const Note = ({ content, important, date }) => {
  return (
    <li>
      <h3>{content}</h3>
      <p>{important ? 'Important' : 'Not important'}</p>
      <p>{date}</p>
    </li>
  )
}
