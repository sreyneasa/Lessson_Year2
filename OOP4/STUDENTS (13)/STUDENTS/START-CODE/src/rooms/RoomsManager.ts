import { Room } from "./Room";

export class RoomsManager {
  public rooms: Room[] = [];

  getNumberOfRooms(): number {
    return this.rooms.length;
  }

  addRoom(room: Room) {
    return this.rooms.push(room);
  }

  /** Find a room with a free bed
   * @return the first room available with a free bed
   */
  findFreeRoom(): Room | undefined {
    return undefined; // TODO
  }
}
