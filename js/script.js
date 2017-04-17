var app = angular.module('paperAnimation', []);
app.controller('paperAnimationHome', function($scope, $timeout) {

    $scope.classVar = '';
    $scope.sectionsVisible= 'visible';
    //LEFT TO RIGHT ANIMATION
    $scope.openAnimationLeftToRight = function() {
        $scope.classVar = 'open-section';
        $timeout(function () {
           $scope.firstbox = 'active';
        }, 300);
        $timeout(function () {
            $scope.firsttitleOpening = 'tile_opening';
        }, 400);
        $timeout(function () {
          $scope.firstinfoWrap = 'info-wrap-open';
        }, 500);
        $timeout(function () {
           $scope.firstinfoWrap = 'second';
        }, 600);
        $timeout(function () {
            $scope.showContentFirst = 'active';
        }, 1800);
    };
    $scope.closeAnimationLeftToRight = function () {
        $scope.firsttitleOpening = '';
        $scope.showContentFirst = '';
        $timeout(function () {
            $scope.firstbox = 'transition';
        }, 1000);
        $timeout(function () {
            $scope.classVar = '';
        }, 1400);
        $timeout(function () {
            $scope.firstinfoWrap = '';
        }, 1200);
    };

});