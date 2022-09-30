class GrowFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = "/images/fish03.png";
  }
  onClick(event) {
    this.width += 5;
    this.height += 5;
  }
}
