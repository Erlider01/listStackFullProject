import axios from 'axios'

export const getNotes = () => (axios
  .get('http://localhost:3012/json'))
