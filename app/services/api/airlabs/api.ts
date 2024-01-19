import validateCode from "app/utils/fligtCodeValidation"
import axios from "axios"

const BASE_URL = "https://airlabs.co/api/v9"

export const searchFlight = async (api_key: string, flight_code: string) => {
  let response = undefined
  let data = undefined
  let error = undefined

  if (api_key == undefined) {
    throw Error("Missing API Key")
  }

  if (flight_code == undefined) {
    throw Error("Missing Flight Code")
  }

  let code_format = validateCode(flight_code)

  let search_url = `${BASE_URL}/flight?flight_${code_format}=${flight_code}&api_key=${api_key}`

  try {
    response = await axios.get(search_url)
    if (response.data) {
      data = response.data
    }
  } catch (e) {
    error = e
  }

  return { response, data, error }
}
