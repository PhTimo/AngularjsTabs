document.addEventListener('deviceready', function onDeviceReady() {
            angular.bootstrap(document, ['tabs.demo']);
        }, false);

angular.module('tabs.demo', ['ui.bootstrap']);
angular.module('tabs.demo').controller('tabsCtrl', function ($scope) {
  $scope.tabs = [
    { title:'Tab1 ', content:'/tab1.html' },
    { title:'Tab2', content:'/tab2.html'},
    { title:'Tab3', content:'/tab3.html'}
  ];


});


angular.module('tabs.demo').controller('newCtrl', function ($scope) {
    $scope.cards = [
      { title: '11', content: '/tab1.html' },
      { title: '2', content: '/tab2.html' },
      { title: '3', content: '/tab3.html' }
    ];
});
