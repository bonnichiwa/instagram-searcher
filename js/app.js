angular.module('instaApp', [])
  .controller('instaCtrl', function($scope, $http) {
  $scope.searchItem = function(tag) {
    var url = "https://api.instagram.com/v1/tags/{tag}/media/recent";
    var request = {
      client_id: "f716627148d7477890ca3e35d2ce5d26",
      tags: tag,
      callback: "JSON_CALLBACK"
    };

    $http({
      method: 'JSONP',
      url: url,
      params: request
    })
    .then(function(response) {
      $scope.results = response.data;
    },
    function(result) {
      alert('error');
    });
  };
});