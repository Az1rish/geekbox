import TokenService from './token-service';
import config from '../config';

const ResourcesApiService = {
  getResources() {
    return fetch(`${config.API_ENDPOINT}/resources`, {
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  postResource(newResource) {
    return fetch(`${config.API_ENDPOINT}/resources`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newResource)
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  getResource(resourceId) {
    return fetch(`${config.API_ENDPOINT}/resources/${resourceId}`, {
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  getResourceComments(resourceId) {
    return fetch(`${config.API_ENDPOINT}/resources/${resourceId}/comments`, {
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  },
  postComment(resourceId, comment, rating) {
    return fetch(`${config.API_ENDPOINT}/comments`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        resource_id: resourceId,
        rating,
        comment
      })
    })
      .then((res) => ((!res.ok)
        ? res.json().then((e) => Promise.reject(e))
        : res.json()));
  }
};

export default ResourcesApiService;
