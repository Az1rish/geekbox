import TokenService from './token-service';
import config from '../config';

const CategoriesApiService = {
    getCategories() {
        return fetch(`${config.API_ENDPOINT}/categories`, {
            headers: {
                'content-type': 'application/json',
            }
        })
            .then((res) => ((!res.ok)
                ? res.json().then((e) => Promise.reject(e))
                : res.json()));
    },
    postCategory(newCategory) {
        return fetch(`${config.API_ENDPOINT}/categories`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: newCategory
        })
            .then((res) => ((!res.ok)
                ? res.json().then((e) => Promise.reject(e))
                : res.json()));
    },
    getCategory(categoryId) {
        return fetch(`${config.API_ENDPOINT}/categories/${categoryId}`, {
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: newCategory
        })
            .then((res) => ((!res.ok)
                ? res.json().then((e) => Promise.reject(e))
                : res.json()));
    },
    updateCategory(categoryId, updatedCategory) {
        return fetch(`${config.API_ENDPOINT}/categories/${categoryId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`
            },
            body: JSON.stringify(updatedCategory)
        })
            .then((res) => ((!res.ok)
                ? res.json().then((e) => Promise.reject(e))
                : res.json()));
    },
    deleteCategory(categoryId) {
        return fetch(`${config.API_ENDPOINT}/categories/${categoryId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `bearer ${TokenService.getAuthToken()}`
            }
        })
            .then((res) => ((!res.ok)
                ? res.json().then((e) => Promise.reject(e))
                : res.json()));
    }
};

export default CategoriesApiService;