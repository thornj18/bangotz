'use strict';

var App = angular.module('bangotz', ['ui.router',  'ngMaterial','md.data.table','ngMdIcons']);

App.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider) {
    
    
    $urlRouterProvider.otherwise('/404');
    $stateProvider
    .state('home',{
        url:'/',
        templateUrl:'templates/pages/index.html'
    })
    .state('404',{
        url:'/404',
        templateUrl:'templates/pages/404.html'
    })
    .state('login',{
        url:'/login',
        templateUrl:'templates/pages/login.html'
    })
    .state('register',{
        url:'/register',
        templateUrl:'templates/pages/register.html'
    })
    .state('dashboard',{
        templateUrl:'templates/pages/dashboard.html'
    })
    .state('dashboard.home',{
        url:'/dashboard',
        templateUrl:'templates/pages/dashboard.home.html'
    })
    .state('dashboard.account',{
        url:'/account',
        templateUrl:'templates/pages/dashboard.account.html'
    });
    
});