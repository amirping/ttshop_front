export default class UserApi {
  static API_URL = "http://127.0.0.1:3333/api/users/";
  static getUser(user: any) {
    console.log("Fire API -> getuser");
    //   return authHeader:Headers = this.API_Header.set('AUTHORIZATION','Bearer ${user.token}')
    const request = new Request(this.API_URL + user._id, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        "USER-KEY": `Bearer ${user.token}`
      })
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
