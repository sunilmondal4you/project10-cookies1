/**
 * Created by abc on 30/05/2016.
 */
var app=angular.module('app');

app.controller("default",function($scope,$cookies,$window){
    var allCookie = $cookies.getAll();
    $scope.ALL_COOKIE = allCookie;

    var x=[];
    var y=[];
    $.each($scope.ALL_COOKIE, function(i,n) {
        var obj = JSON.parse(n);
        x.push(obj);
        y.push(i);

    });
    $scope.detail=x;
    $scope.karry=y;

     $scope.savme=function(){
         $cookies.putObject($scope.fruit.username, $scope.fruit);
         $('#mymodal').modal('hide');
         $window.location.reload();
     };

    $scope.remove=function (z) {
        var allCookie = $cookies.remove(z);
        $window.location.reload();
    }




});




app.controller("second",function($scope,myservices){



});

