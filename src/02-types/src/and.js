export class And {

  constructor(first, second) {
    this.first = first;
    this.second = second;
  }

  value() {
    return this.first && this.second;
  }
}
