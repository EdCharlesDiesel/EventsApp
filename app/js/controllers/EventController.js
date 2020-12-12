'use strict';

eventsApp.controller('EventController', 
    function EventController($scope, eventData, $routeParams, $route) {
        $scope.sortorder = 'name';
        $scope.event = $route.current.locals.event
        $scope.reload = function() {
            $route.reload();
        }

        $scope.upVoteSession = function(session) {
          session.upVoteCount++;
        };

        $scope.downVoteSession = function(session) {
          session.upVoteCount--;
        }

        $scope.scrollToSession = function() {
            $anchorScroll();
        }
    }
);