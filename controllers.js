angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('LesRDV', ["$scope","sqlPrd"], function($scope, sqlPrd)
{
	$scope.LesRDV = [];

	sqlPrd.select("SELECT * FROM rendezvous WHERE dateRdv=:date AND heure>=:heure", [], $scope.LesRDV) 

	$scope.remove = function(personne)
	{
		return sqlPrd.delete("")
	}
}
