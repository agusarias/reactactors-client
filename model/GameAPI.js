const SERVICE_URL = "http://localhost:4000/fakeapi/";
import fetch from "isomorphic-unfetch";
import axios from "axios";
import Match from "../model/Match.class";

class GameAPI {
  static getMatch = async code => {
    const response = await fetch(SERVICE_URL + "match/" + code);
    const match = await response.json();

    return Match.fromResponse(match);
  };

  static createMatch() {
    return new Promise((resolve, reject) => {
      axios.post(SERVICE_URL + "match").then(response => {
        resolve(Match.fromResponse(response.data));
      });
    });
  }

  static makeMove(code, player, position) {
    return new Promise((resolve, reject) => {
      axios
        .put(SERVICE_URL + "match/" + code, {
          player,
          position
        })
        .then(response => {
          resolve(Match.fromResponse(response.data));
        });
    });
  }
}

export default GameAPI;
