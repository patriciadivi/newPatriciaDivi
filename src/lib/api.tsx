import axios from 'axios'

export const apiGist = axios.create({
  baseURL: 'https://api.github.com/users/patriciadivi',
})

export const makeRequest = async (url: string, method: string, data = null, token = null) => {
  const config = {
    url: `/${url}`,
    method,
    data,
    headers: { Authorization: token },
    baseURL: 'https://api.github.com/users/',
  };
  const resultAxios = await axios(config);
  if (!resultAxios) return false;
  return resultAxios.data;
};