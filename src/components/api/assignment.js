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

export const destroy = async (assignment) => {
  const response = await fetch(`${API_URL}/api/assignments/${assignment._id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method: 'DELETE'
  })
  const json = await response.json()
  console.log(json)
  return json
}

export const edit = async (assignment) => {
  const response = await fetch(`${API_URL}/api/assignments/${assignment._id}`, {
    body: JSON.stringify(assignment),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method: 'PATCH'
  })
  const json = await response.json()
  console.log(json)
  return json
}

export const graded = async () => {
  const response = await fetch(`${API_URL}/api/assignments/graded`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method: 'GET'
  })
  const json = await response.json()
  console.log(json)
  return json
}

export const ungraded = async () => {
  const response = await fetch(`${API_URL}/api/assignments/ungraded`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.getToken()}`
    },
    method: 'GET'
  })
  const json = await response.json()
  console.log(json)
  return json
}