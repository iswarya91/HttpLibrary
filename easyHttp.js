function EasyHttp() {
    this.http = new XMLHttpRequest();
}

EasyHttp.prototype.get = function(url, callback) {
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function(resp) {
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error occurred ' + self.http.status);
        }
    }
    this.http.send();
}

EasyHttp.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type','application/json')
    let self = this;
    this.http.onload = function(resp) {
        if(self.http.status === 201) {
            callback(null, self.http.responseText);
        } else {
            callback('Error occurred '+ self.http.status);
        }
    }
    this.http.onerror = function(err) {
        callback(err);
    }
    this.http.send(JSON.stringify(data));
}

EasyHttp.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type','application/json')
    let self = this;
    this.http.onload = function(resp) {
        if(self.http.status === 200) {
            callback(null, self.http.responseText);
        } else {
            callback('Error occurred '+ self.http.status);
        }
    }
    this.http.onerror = function(err) {
        callback(err);
    }
    this.http.send(JSON.stringify(data));
}

EasyHttp.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function(resp) {
        if(self.http.status === 200) {
            callback(null, 'Resource Deleted');
        } else {
            callback('Error occurred '+ self.http.status);
        }
    }
    this.http.onerror = function(err) {
        callback(err);
    }
    this.http.send();
}

