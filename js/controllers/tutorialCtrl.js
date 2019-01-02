angular.module("tutorialCtrlModule",[])
//controller
.controller("TutorialCtrl",["$scope","Calculations",function($scope,Calculations){
  $scope.tutorialObject={};
  $scope.tutorialObject.title="Main Page";
  $scope.tutorialObject.subTitle="Sub Title";
  $scope.tutorialObject.bindOutput=2;
  $scope.tutorialObject.firstname="Jason";
  $scope.tutorialObject.lastname="Chin";
  $scope.timesTwo = function(){
    $scope.tutorialObject.bindOutput = Calculations.timesTwo($scope.tutorialObject.bindOutput);
  }
}])
//html directive - convert to dash format in view, prefix with special code
.directive("jcWelcomeMessage",function(){
  return{
    restrict: "AE",
    template: "<div>howdy how are you</div>"
  }
})
//service - function shared between modules
.factory("Calculations",function(){
  var calculations={};
  calculations.timesTwo = function(a){
    return a * 2;
  }
  return calculations;
})
.controller("TutorialCtrl2",["$scope",function($scope){
    $scope.secondTutorial="This is the second tutorial";
}])
