import * as token from '../helpers/tokens'

const API_URL = 'http://localhost:5000'

export const create = async (assignment) => {
  const response = await fetch(`${API_URL}/api/assignments`, {
    body: JSON.stringify(assignment),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method: 'POST'
  })
  const json = await response.json()
  console.log(json)
  return json
}

export const edit = async (assingment) => {
  
}