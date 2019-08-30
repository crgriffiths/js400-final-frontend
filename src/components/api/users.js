import * as token from '../helpers/tokens'

const API_URL = 'http://localhost:5000'

export const getUsers = async () => {
  const response = await fetch(`${API_URL}/api/students`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method: 'GET'
  })
    const json = await response.json()
    return json
}