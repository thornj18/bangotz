App.controller('AppCtrl', function ($scope, $timeout, $log, $location) {


    $scope.menu = function(page){
        $location.path('/account');
    }

});
App.controller('PostCtrl', function ($scope, $timeout, $mdSidenav, $log, $location, dataService) {

  dataService.getPost().then(function(response){
      if(response){
        console.log(response);
        $scope.posts = response;

      }else {
        console.log("ERROR");
      }

  });
});
