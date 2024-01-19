import { useState, useEffect } from "react"
import { searchFlight } from "./api"

const API_KEY = "11298276-f644-4a1f-8847-b8950d19d348"
const useSearchFlight = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function makeRequest() {
      try {
        setLoading(true)
        setError(null)

        let { response, data, error } = await searchFlight(API_KEY, searchValue)

        console.log(data)

        if (response) {
          setData(data.response)
        }

        if (error) {
          setError(error)
        }
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    if (searchValue.trim() !== "") {
      makeRequest()
    }
  }, [searchValue])

  return { searchValue, setSearchValue, loading, data, error }
}

export default useSearchFlight
