export class Accommodation {
    constructor(name, address, bookingPricePerDay, type, hasAC, hasPrivateParking, hasWifi, isAvailable) {
        this.name = name;
        this.address = address;
        this.bookingPricePerDay = bookingPricePerDay;
        this.type = type;
        this.hasAC = hasAC;
        this.hasPrivateParking = hasPrivateParking;
        this.hasWifi = hasWifi;
        this.isAvailable = isAvailable;
    }
}
