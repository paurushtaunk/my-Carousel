var appRoot = angular.module('myApp', []);

appRoot.service('deleteservice', function () {
  this.imageUrls = [
    "https://images.unsplash.com/photo-1535726890525-b0557398cb32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1545573139-feec87d23486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    "https://images.unsplash.com/photo-1529907109632-2a4924535fc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80",
    "https://images.unsplash.com/photo-1529831129093-0fa4866281ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=2133&q=80",
    "https://images.unsplash.com/photo-1546525374-64a93a33db58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1523286435788-0abb75f0fbd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1289&q=80",
    "https://images.unsplash.com/photo-1549725731-e8b29d266553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  ];
  this.delete = function ($index) {
    // this.imageUrls = imageUrls.splice(index, 1);
    this.imageUrls.splice(index, 1);
  }
  
});
appRoot.controller('AppController', ['$scope','deleteservice', function ($scope, deleteservice) {
  $scope.vm = {};
  $scope.vm.message = "Welcome to angularjs directive";
  $scope.vm.imageUrls = [
    "https://images.unsplash.com/photo-1535726890525-b0557398cb32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80",
    "https://images.unsplash.com/photo-1545573139-feec87d23486?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
    "https://images.unsplash.com/photo-1529907109632-2a4924535fc1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1947&q=80",
    "https://images.unsplash.com/photo-1529831129093-0fa4866281ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=2133&q=80",
    "https://images.unsplash.com/photo-1546525374-64a93a33db58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    "https://images.unsplash.com/photo-1523286435788-0abb75f0fbd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1289&q=80",
    "https://images.unsplash.com/photo-1549725731-e8b29d266553?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80",
  ];

  //Delete image using scope
  $scope.vm.removeImage = function (index) {
    $scope.vm.imageUrls.splice(index, 1);
  }

  //insert image using scope
  $scope.vm.insertImage = function insertImage() {
    if ($scope.vm.imageUrls) {
      $scope.vm.imageUrls.push($scope.vm.gitImage);
      
    }
  };
  // Delete Service method call
  // this.removeImage = function (){
  //   deleteservice.delete();
  // };
}]);