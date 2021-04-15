'use strict';

class Office {
    constructor(room) {
        this._rooms = [room]
    }

    list() {
        return this._rooms;
    }

    add(room) {
        this.list().push(room)
        console.log(this.list())
    }
}