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
            body: newResource
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
    postComment
}