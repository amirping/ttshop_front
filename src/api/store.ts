export default class StoreApi {
  static API_URL = "http://127.0.0.1:3333/api/users/";
  static getItem(id: string) {
    console.log("Fire API -> getItem");
    const request = new Request(this.API_URL + id, {
      method: "GET"
    });
    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
  static getAllItems() {
    console.log("Fire API -> getItem");
    const request = new Request(this.API_URL, {
      method: "GET"
    });
    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
  static getItemsByDeppartment(id_department: string) {
    console.log("Fire API -> getItem");
    const request = new Request(this.API_URL + id_department, {
      method: "GET"
    });
    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
  static getItemsByCategory(id_category: string) {
    console.log("Fire API -> getItem");
    const request = new Request(this.API_URL + id_category, {
      method: "GET"
    });
    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
  static getItemsByName(name: string) {
    console.log("Fire API -> getItem");
    const request = new Request(this.API_URL + name, {
      method: "GET"
    });
    return fetch(request)
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return error;
      });
  }
}
