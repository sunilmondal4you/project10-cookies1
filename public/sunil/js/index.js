/**
 * Created by abc on 30/05/2016.
 */
var app  = angular.module('app', ['ngRoute','ngCookies']);

app.config(function($routeProvider) {
    $routeProvider
        .when("/",{
            templateUrl : "first.html",
            controller : "default"
        })

        .when("/second",{
            templateUrl : "second.html",
            controller : "second"
        })

});