angular.module('instaApp', [])
  .controller('instaCtrl', function($scope, $http) {

  var tagResults = false;

  $scope.searchItem = function(tag) {
    var url = "https://api.instagram.com/v1/tags/{tag-name}/media/recent";
    var request = {
      client_id: "f716627148d7477890ca3e35d2ce5d26",
      count: 10,
      callback: "JSON_CALLBACK"
    };

    $http({
      method: 'JSONP',
      url: url.replace("{tag-name}", $scope.tag),
      params: request
    })
    .then(function(response) {
      $scope.results = response.data.data;
      console.log(response.data);
    },
    function(result) {
      alert('error');
    });
  };
});