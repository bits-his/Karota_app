import { useLocation } from "react-router-dom"
// export const server_url = 'https://hotelserver-production.up.railway.app'
// export const server_url = ' http://localhost:34567'
export const server_url = 'https://galaxybis.ebudgetkano.ng/keke-api'

export const _post = (url, data, success = (f) => f, error = (f) => f) => {
  const token = localStorage.getItem('@@token')
  fetch(`${server_url}/${url}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((result) => {
      success(result)
    })
    .catch((err) => {
      error(err)
    })
}
export const _get = (url, success = (f) => f, error = (f) => f) => {
  fetch(`${server_url}/${url}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((raw) => raw.json())
    .then((result) => {
      success(result)
    })
    .catch((err) => {
      error(err)
    })
}

export const _put = (url, data, success = (f) => f, error = (f) => f) => {
  fetch(`${server_url}/${url}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((raw) => raw.json())
    .then((result) => {
      success(result)
    })
    .catch((err) => {
      error(err)
    })
}

export function useQuery() {
  return new URLSearchParams(useLocation().search)
}
export default useQuery
