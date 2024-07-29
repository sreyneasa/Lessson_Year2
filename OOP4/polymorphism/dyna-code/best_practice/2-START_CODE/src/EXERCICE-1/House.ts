class House {
  private chairs: Chair[] = [];

  /**
   * Add a chair of given ID
   * @param chairID the chair ID
   * @return the created chair
   */

  addChair(chairID: number) {
    if (this.chairs.length === 0) {
      this.chairs = this.chairs.concat(new Chair(chairID, this))
    } else {
      this.chairs.forEach(chair => {
        if (chairID != chair.getID()) {
          this.chairs = this.chairs.concat(new Chair(chairID, this))
        }
      });
    }
  }
}

class Chair {
  constructor(private chairId: number, private house: House) { }
  public getID(): number { return this.chairId; }
}

// MAIN
let newHouse = new House();
let newChair = newHouse.addChair(1); // Add a chair of id 45

console.log(newHouse);
