let Match = require("./Match.class");
const CODE_MAX = 1000

let matchs = [
  new Match(123, [
    Match.NONE, Match.NONE, Match.NONE,
    Match.NONE, Match.NONE, Match.NONE,
    Match.NONE, Match.NONE, Match.NONE
  ]),
  new Match(234, [
    CIRC, CIRC, CRSS,
    Match.NONE, CRSS, CIRC,
    CRSS, CIRC, Match.NONE
  ]),
  new Match(345, [
    CIRC, Match.NONE, CRSS,
    CRSS, CIRC, Match.NONE,
    CRSS, CRSS, CIRC
  ])
]

class FakeAPI {
  generateMatchCode() {
    let code = 0
    do {
      code = parseInt(Math.random() * CODE_MAX) % CODE_MAX
    } while (this.getMatch(code))

    return code
  }

  generateMatch() {
    return new Match(this.generateMatchCode())
  }

  createMatch() {
    const newMatch = this.generateMatch();
    matchs.push(newMatch)
    return newMatch;
  }

  getMatch(code) {
    code = parseInt(code)

    return matchs.filter(match => match.code === code)[0]
  }

  makeMove(code, player, position) {
    code = parseInt(code)

    matchs = matchs.map(match => {
      if (match.code === code) {
        match.move(position, player)
      }

      return match
    })

    return this.getMatch(code)
  }
}

module.exports = new FakeAPI();