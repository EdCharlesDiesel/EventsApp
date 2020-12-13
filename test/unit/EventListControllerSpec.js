'use strict';

describe('EventListController', function () {
    var $controllerContructor, scope, mockEventData;
    beforeEach(module("eventsApp"));


    beforeEach(inject(function ($controller, $rootScope) {
        $controllerContructor = $controller;
        scope = $rootScope.$new();
        mockEventData = sinon.stub({getAllEvents:function(){}})
    }));

    it('should set the scope events to the result of eventData.getAllEvents', function () {
        var mockEvents = {};
        mockEventData.getAllEvents.returns(mockEvents);
        $controllerContructor("EventListController",
            { '$scope': scope, eventData: mockEventData });

        expect(scope.events).toBe(mockEvents);
    });
});