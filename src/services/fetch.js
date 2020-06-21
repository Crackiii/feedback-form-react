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

    try {
        return fetch(`${HOST}${route}`, options)
            .then(j => {
                if (j.ok) {
                    return j.json()
                } else {
                    throw Error(j.statusText);
                }
            })
            .then(r => Promise.resolve(r))
            .catch(e => Promise.reject(e))
    } catch (e) {
        throw Error(e)
    }

}