'use strict';

describe ('Office', function() {
    var office; 

    beforeEach(function() {
        office = new Office('Marketing briefing');
    });

    it('has one meeting room in the office by default', function() {
        expect(office.list).not.toEqual([]);
    });

    it('add a room to the office', function() {
        office.add('Finance strategy 101');
        expect(office.list()).toEqual(['Marketing briefing', 'Finance strategy 101'])
    });

    // it('lists rooms that are available', function() {
    //     if ()
    // });
});

