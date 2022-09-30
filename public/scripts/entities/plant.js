class Plant extends Denizen {
  constructor(options) {
    super(options);
    this.imageUri = '/images/plant01.png';
    this.position.y += 5;
  }
}
