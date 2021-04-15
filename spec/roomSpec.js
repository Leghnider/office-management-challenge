'use strict';

describe('Room', function() {
    var room;

    beforeEach(function () {
        room = new Room('Marketing');
    });

    describe('room availability', function() {     
        it('room has a default status of available', function() {
            expect(room.availabilityStatus()).toEqual(true);
        });

        it('enters a room and changes its availability status', function() {
            room.enter();
            expect(room.availabilityStatus()).toEqual(false);
        });

        it('cannot enter a room if it is occupied', function() {
            room.enter();
            expect(room.availabilityStatus()).toEqual(false);
            expect( function() { room.enter();}).toThrowError('Room occupied; cannot enter!')
        });

        it('changes status to available when leaving a room', function() {
            room.enter();
            expect(room.availabilityStatus()).toEqual(false)
            room.leave();
            expect(room.availabilityStatus()).toEqual(true)
        });
    });

    describe('room properties', function() {
        it('is provided a name by the staff member', function () {
            expect(room.name).toBeTruthy();
        });
    });
})