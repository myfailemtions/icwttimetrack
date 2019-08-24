import axios from 'axios'

const apiUrl = 'https://api.wuhansocial.com/api/v2'
const apiUrlv1 = 'https://api.wuhansocial.com/api/v1'


export const request = async (method, url, params = {}) => {
  try {
    const { data } = await axios[method](`${apiUrl}/${url}`, params)
    return data
  } catch (err) {
    return err
  }
}

export const clientApi = async (method, url, params = {}) => {
  try {
    const { data } = await axios[method](`${apiUrlv1}/${url}`, params)
    return data
  } catch (err) {
    return err
  }
}
