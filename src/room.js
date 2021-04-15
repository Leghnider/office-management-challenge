'use strict';

class Room {
    constructor(name) {
        this.name = name
        this.available = true;
    }

    availabilityStatus() {
        return this.available;
    }
    
    enter() {
        if(this.availabilityStatus() === false) {
            throw new Error('Room occupied; cannot enter!');
        }
        this.available = false;
    }

    leave() {
        if(this.availabilityStatus() === true) {
            throw new Error ('Room is already vacant')
        }
        this.available = true;
    }
}