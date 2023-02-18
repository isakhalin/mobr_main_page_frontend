import axios from 'axios';

class Request {
  constructor(token = '') {
    this.request = axios.create({
      baseURL: 'http://localhost:3005',
      headers: {'content-type': 'application/json'},
    });
    this.token = token;
  }

  get = (url) => {
    return this.request.get(url);
  }

  post = (url, data) => {
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