class EasyHttp {
    constructor() { }

    get(url) {
        return new Promise(function (resolve, reject) {
            fetch(url).then(function (resp) {
                return resp.json();
            }).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    }

    post(url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            }).then(function (resp) {
                console.log(resp);
                return resp.json();
            }).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })

        })

    }

    put(url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(data)
            }).then(function (resp) {
                console.log(resp);
                return resp.json();
            }).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })
        })
    }

    delete(url, data) {
        return new Promise(function (resolve, reject) {
            fetch(url, {
                method: 'DELETE',
            }).then(function (resp) {
                console.log(resp);
                return resp.json();
            }).then(function (data) {
                resolve(data);
            }).catch(function (err) {
                reject(err);
            })

        })

    }
}
