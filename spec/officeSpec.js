'use strict';

describe ('Office', function() {
    var office; 
    var room1;
    var room2;
    var room3;


    beforeEach(function() {
        office = new Office();
        room1 = new Room('Finance 101');
        room2 = new Room('Monthly Meeting');
        room3 = new Room('Sprint 3 stand up');
    });

    it('has no meeting room in the office by default', function() {
        expect(office.list()).toEqual([]);
    });

    it('add a room to the office', function() {
        office.add(room1);
        expect(office.list()).toEqual([room1]);
    });

    it('lists rooms that are available', function() {
        office.add(room1);
        office.add(room2);
        office.add(room3);
        room2.enter();
        expect(office.availableRooms()).toEqual([room1, room3]);        
    });
});

