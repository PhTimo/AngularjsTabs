


var tabsdemo = angular.module('tabsdemo', []);
angular.module('tabsdemo', ['ui.bootstrap']);
angular.module('tabsdemo').controller('tabsCtrl', function ($scope) {
  $scope.tabs = [
    { title:'Tab1 ', content:'/tab1.html' },
    { title:'Tab2', content:'/tab2.html'},
    { title:'Tab3', content:'/tab3.html'}
  ];


});


angular.module('tabsdemo').controller('newCtrl', function ($scope) {
    $scope.cards = [
      { title: '11', content: '/tab1.html' },
      { title: '2', content: '/tab2.html' },
      { title: '3', content: '/tab3.html' }
    ];
});


document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
alert("js is loaded");
angular.bootstrap(document, ['tabsdemo']);
} 
