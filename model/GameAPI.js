const SERVICE_URL = "http://localhost:3000/fakeapi/"
import fetch from "isomorphic-unfetch"
import axios from "axios";

class GameAPI {

  static createMatch() {
    return axios.post(SERVICE_URL + "match")
  }

  static getMatch = async (code) => {
    const response = await fetch(SERVICE_URL + "match/" + code)
    const match = await response.json()

    return match
  }

  static makeMove(code, player, position) {
    return axios.put(SERVICE_URL + "match/" + code, {
      player, position
    })
  }
}

export default GameAPI;