export const NONE = 0,
  CIRC = 1,
  CRSS = 2;

class Player {
  constructor(code, name, icon) {
    this.code = code;
    this.name = name;
    this.icon = icon;
  }

  static get circ() {
    return new Player(CIRC, "O", "circle");
  }
  static get crss() {
    return new Player(CRSS, "X", "x");
  }
  static get none() {
    return new Player(NONE, "-", "");
  }

  is = code => code == this.code;

  static get = code => {
    let instance;
    switch (code) {
      case CIRC:
        instance = Player.circ;
        break;
      case CRSS:
        instance = Player.crss;
        break;
      default:
        instance = Player.none;
        break;
    }
    return instance;
  };
}

export default Player;
