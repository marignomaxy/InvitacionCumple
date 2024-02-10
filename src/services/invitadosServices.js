import axios from 'axios'

export const guardarInvitado = (data) => {
  return axios.post(`http://localhost:3000/`, data)
}

export const getInvitados = () => {
  return axios.get(`http://localhost:3000/`)
}
