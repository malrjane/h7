export default class Validator {
  constructor(name) {
    this.name = name;
  }
  validateUsername() {
    if ((/^[aA-zZ\-_\d]+$/.test(this.name)) && (!/\d{4}/.test(this.name)) && (/^[^\d\-_]/.test(this.name))) {
      return true;
    } else {
      return false;
    }
  }
}


