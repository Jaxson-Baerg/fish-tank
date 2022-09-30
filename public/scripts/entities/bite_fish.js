class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.imageUri = "/images/fish04.png";
  }

  update(t) {
    // if you're out of bounds, despawn
    if (this.outOfBounds(this.tank.getBounds())) {
      this.kill();
    } else {
      for (var i = 0; i < this.calcPhysicsTicks(t); i++) {
        this.updateOneTick();
      }
    }

    let biteThis = this;
    let nearby = this.tank.getProximateDenizens(this.position, 20);
    $(".denizen").each(function() {
      if (nearby.length > 1) {
        for (let n of nearby) {
          if (n.id === this.id && n.id !== biteThis.id) {
            n.kill();
            biteThis.width += 20;
            biteThis.height += 20;
          }
        }
      }
    });
  }
}
