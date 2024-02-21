import axios from 'axios'

export const guardarInvitado = (data) => {
  return axios.post(`https://apiinvitacion-production.up.railway.app/`, data)
}
