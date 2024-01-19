import axios from 'axios'

export const postNotes = (parse) => (axios
  .post('http://localhost:3012/post/', {
    content: parse
  })
  .then(r => r)
)
