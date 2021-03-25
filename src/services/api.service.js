import axios from 'axios'

const URL_API = 'http://localhost:3000/api/crud'

const request = async ({ url, method, data = {} }) => {
    const response = await axios[method](`${URL_API}/${url}`, data)
    return response
}

export {
    request
}