const SERVICE_URL = "http://localhost:8080/";
import fetch from "isomorphic-unfetch";
import axios from "axios";

class GameAPI {
  static getMatch = async code => {
    const response = await fetch(SERVICE_URL + "match/" + code);
    const match = await response.json();

    return match;
  };

  static createMatch() {
    return new Promise((resolve, reject) => {
      axios.post(SERVICE_URL + "match").then(response => {
        resolve(response.data);
      });
    });
  }

  static makeMove(code, player, position) {
    return new Promise((resolve, reject) => {
      axios
        .put(SERVICE_URL + "match/" + code, {
          position: position
        })
        .then(response => {
          console.log(response.data);
          resolve(response.data);
        });
    });
  }
}

export default GameAPI;
