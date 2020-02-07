import axios from 'axios'
import { GATEKEEPER_URL } from 'variables'

export function getGithubToken(code) {
  return axios.get(`${GATEKEEPER_URL}/${code}`)
}
