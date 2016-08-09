App.controller('AuthCtrl', function ($scope, $timeout, $mdSidenav, $log, $location,$window) {

    var client_id ="06f18018ae8a460b8b23762b67fc8df4";
    var redirect_uri ="http://localhost:1337/redirect";

    $scope.doAuth= function(){
       //console.log("Login Button Clicked");
        $window.location.href = "https://instagram.com/oauth/authorize/?client_id=" +client_id+
                "&redirect_uri="+redirect_uri+ "&response_type=code";
   }
});
