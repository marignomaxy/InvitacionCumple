import axios from 'axios'

export const guardarInvitado = (data) => {
  return axios.post(`https://apiinvitacion-production.up.railway.app/`, data)
}

export const getInvitados = () => {
  return axios.get(`https://apiinvitacion-production.up.railway.app/`)
}
