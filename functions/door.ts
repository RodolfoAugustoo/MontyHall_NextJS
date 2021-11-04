import DoorModel from "../model/door";

export function createDoor(
  quantity: number,
  portWithGift: number
): DoorModel[] {
  return Array.from({ length: quantity }, (_, index) => {
    const number = index + 1;
    const hasGift = number === portWithGift;
    return new DoorModel(number, hasGift);
  });
}

export function updateDoor(
  doorList: DoorModel[],
  updatedDoor: DoorModel
): DoorModel[] {
  return doorList.map((current) => {
    if (current.number === updatedDoor.number) return updatedDoor;
    else return updatedDoor.isOpen ? current : current.removeSelection();
  });
}
