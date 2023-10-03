import { filterResponse, splitUrl } from './apiUtils'

export const apiGet = (apiUrl = '', apiOptions = {}) => {
  async function getApiResponse() {
    try {
      const { endpointUrl, endpointData } = splitUrl(apiUrl)

      const apiResponse = await fetch(endpointUrl, apiOptions)

      if (!endpointData) {
        return apiResponse
      }

      return filterResponse(apiResponse, endpointData)
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

      if (!endpointData) {
        return apiResponse
      }

      return filterResponse(apiResponse, endpointData)
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

      if (!endpointData) {
        return apiResponse
      }

      return filterResponse(apiResponse, endpointData)
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

      if (!endpointData) {
        return apiResponse
      }

      return filterResponse(apiResponse, endpointData)
    } catch (apiError) {
      return apiError
    }
  }

  return getApiResponse()
}
