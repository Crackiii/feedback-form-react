const HOST = 'http://localhost:3001'

export const __fetch = (route, method, payload) => {

    let options = {
        method: method,
        headers: { "Content-Type": "application/json" }
    }

    if (method.toLowerCase() === 'post') {
        options.body = JSON.stringify({
            ...payload
        })
    }

    return fetch(`${HOST}${route}`, options)
        .then(j => j.json())
        .then(r => Promise.resolve(r))
        .catch(e => Promise.reject(e))

}