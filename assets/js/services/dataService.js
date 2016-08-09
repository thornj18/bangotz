App.service('dataService', function($http, $q) {

  return {
    'getPost': function() {
      var defer = $q.defer();
      $http.get('/getpost').success(function(resp){
        defer.resolve(resp);
      }).error( function(err) {
        defer.reject(err);
      });
      return defer.promise;
    },
  }
});
