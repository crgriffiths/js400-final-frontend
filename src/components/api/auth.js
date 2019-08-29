import * as token from '../helpers/tokens'

const API_URL = 'http://localhost:5000'

export const login = async (user) => {
  const response = await fetch(`${API_URL}/api/auth/login`, {
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
    const json = await response.json()
    console.log(json)
    return json
}

export const signup = async (user) => {
  const response = await fetch(`${API_URL}/api/auth/signup`, {
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST'
  })
  const json = await response.json()
  return json
}

export const profile = async () => {
  const response = await fetch (`${API_URL}/api/auth/profile`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method: 'GET'
  })
  const json = await response.json()
  return json
}