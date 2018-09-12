export const NONE = 0,
  CIRC = 1,
  CRSS = 2;

class Player {
  constructor(code) {
    this.code = code;
  }

  static circ = () => new Player(CIRC);
  static crss = () => new Player(CRSS);
  static none = () => new Player(NONE);

  is = code => code == this.code;

  name = () => {
    let name = "-";
    switch (this.code) {
      case CIRC:
        name = "O";
        break;
      case CRSS:
        name = "X";
        break;
    }
    return name;
  };
}

export default Player;
