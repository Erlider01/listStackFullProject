import axios from 'axios'

export const postNotes = (parse) => (axios
  .post('https://nodeback-b7j8.onrender.com/post/', {
    content: parse
  })
  .then(r => r)
)
