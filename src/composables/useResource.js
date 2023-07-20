import {ref} from 'vue'
import usePageRequests from './usePageRequests.js'
export default function useResource(resource){
  const { makeRequest } = usePageRequests()
  const baseURL = `https://jsonplaceholder.typicode.com/${resource}`
  const fetchAll = async ()=> ref(await makeRequest(baseURL))
  const fetchOne = async (id) => makeRequest(`${baseURL}/${id}`)

  return {
    fetchAll,
    fetchOne
  }
}