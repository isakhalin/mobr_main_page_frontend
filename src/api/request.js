import axios from 'axios';

class Request {
    constructor(token = '') {
        this.request = axios.create({
            baseURL: 'http://localhost:3005',
            headers: {'content-type': 'application/json'},
            // withCredentials: true,
            //timeout: 1000,
            //headers: {'X-Custom-Header': 'foobar'}
        });
        this.token = token;
    }

    get = (url) => {
        return this.request.get(url);
    }

    // Где url это путь запроса, а data это объект со свойствами, который отправляем.
    post = (url, data) => {
        console.log("Получил объект для отправки: ", data)
        console.log("Начинаю отправлять POST запрос: ", JSON.stringify(data))
        return this.request.post(url, data);
    }

    patch = (url, data) => {
        return this.request.patch(url, data);
    }

    delete = (url) => {
        return this.request.delete(url);
    };
}

export const request = new Request();