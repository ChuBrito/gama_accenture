export default class SearchObject {
  constructor({
    oneWay = false,
    originPlace = "",
    destinyPlace = "",
    initialDate = "",
    returnDate = "",
    passengers = 1,
  }) {
    this.oneWay = oneWay;
    this.originPlace = originPlace;
    this.destinyPlace = destinyPlace;
    this.initialDate = initialDate;
    this.returnDate = returnDate;
    this.passengers = passengers;
  }
}
