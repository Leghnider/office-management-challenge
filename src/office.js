'use strict';

class Office {
    constructor() {
        this._rooms = []
    }

    list() {
        return this._rooms;
    }

    add(room) {
        this.list().push(room)
        console.log(this.list())
    }

    availableRooms() {
        return this._rooms.filter(room => room.availabilityStatus() === true);
    }
}
