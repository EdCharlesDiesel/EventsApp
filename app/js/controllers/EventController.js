'use strict';

eventsApp.controller('EventController',
function EventController($scope){
    $scope.event = {
        name: 'Angular Boot camp',
        date:'1/1/2014',
        time:'10:30 am'
    }
})