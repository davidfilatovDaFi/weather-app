import {useState} from 'react'

const useFetch = (callback) => {
  const [loader,setLoader] = useState(false)
  const [error,setError] = useState('')

  const fetching =  async () => {
    try {
      setLoader(true)
      return await callback()
    } catch (error) {
      setError(error)
    } finally {
      setLoader(false)
    }
  }
  return [fetching,loader,error]
}

export default useFetch
