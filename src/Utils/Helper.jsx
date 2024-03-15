import { useLocation } from "react-router-dom"
// export const server_url = 'https://hotelserver-production.up.railway.app'
export const server_url = ' http://localhost:34567'
// export const server_url = 'https://galaxybis.ebudgetkano.ng/keke-api'

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


export function toParagraph(text) {
  // Split the text into paragraphs
  let paragraphs = text.split("\n");

  // Capitalize the first letter of each paragraph
  for (let i = 0; i < paragraphs.length; i++) {
    // Trim the paragraph to remove any leading/trailing whitespace
    paragraphs[i] = paragraphs[i].trim();

    // Capitalize the first letter
    if (paragraphs[i].length > 0) {
      paragraphs[i] = paragraphs[i][0].toUpperCase() + paragraphs[i].slice(1);
    }
  }

  // Join the paragraphs back together
  return paragraphs.join("\n");
}

