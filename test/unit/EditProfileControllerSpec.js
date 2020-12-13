'use strict';

describe('EditProfileControllerSpec', function(){

    var $controllerContructor, scope, mockGravatarUrlBuilder;
    beforeEach(module("eventsApp"));


    beforeEach(inject(function ($controller, $rootScope) {
        $controllerContructor = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl:function(){}})
    }));

    it('should build the gravatar with the given email', function(){
        $controllerContructor("EditProfileController",
        {'$scope':scope, gravatarUrlBuilder: mockGravatarUrlBuilder});

        var email = 'ckhotso@gmail.com';

        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
    })
});