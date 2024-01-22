import axios from 'axios'

export const getNotes = () => (axios
  .get('https://nodeback-b7j8.onrender.com/json'))
