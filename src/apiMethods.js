import { filterResponse, splitUrl } from './apiUtils'

export const apiGet = (apiUrl = '', apiOptions = {}) => {
  async function getApiResponse() {
    try {
      const { endpointUrl, endpointData } = splitUrl(apiUrl)

      const apiResponse = await fetch(endpointUrl, apiOptions)
      const responseAsJson = await apiResponse.json()

      if (!endpointData) {
        return responseAsJson
      }

      return filterResponse(responseAsJson, endpointData)
    } catch (apiError) {
      return apiError
    }
  }

  return getApiResponse()
}

export const apiPost = (apiUrl = '', apiData = {}, apiOptions = {}) => {
  async function getApiResponse() {
    try {
      const { endpointUrl, endpointData } = splitUrl(apiUrl)

      const apiResponse = await fetch(endpointUrl, {
        method: 'POST',
        body: JSON.stringify(apiData),
        ...apiOptions,
      })
      const responseAsJson = await apiResponse.json()

      if (!endpointData) {
        return responseAsJson
      }

      return filterResponse(responseAsJson, endpointData)
    } catch (apiError) {
      return apiError
    }
  }

  return getApiResponse()
}

export const apiPut = (apiUrl = '', apiData = {}, apiOptions = {}) => {
  async function getApiResponse() {
    try {
      const { endpointUrl, endpointData } = splitUrl(apiUrl)

      const apiResponse = await fetch(endpointUrl, {
        method: 'PUT',
        body: JSON.stringify(apiData),
        ...apiOptions,
      })
      const responseAsJson = await apiResponse.json()

      if (!endpointData) {
        return responseAsJson
      }

      return filterResponse(responseAsJson, endpointData)
    } catch (apiError) {
      return apiError
    }
  }

  return getApiResponse()
}

export const apiDelete = (apiUrl = '', apiOptions = {}) => {
  async function getApiResponse() {
    try {
      const { endpointUrl, endpointData } = splitUrl(apiUrl)

      const apiResponse = await fetch(endpointUrl, {
        method: 'DELETE',
        ...apiOptions,
      })
      const responseAsJson = await apiResponse.json()

      if (!endpointData) {
        return responseAsJson
      }

      return filterResponse(responseAsJson, endpointData)
    } catch (apiError) {
      return apiError
    }
  }

  return getApiResponse()
}
