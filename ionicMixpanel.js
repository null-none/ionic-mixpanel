angular.module('ionicMixPanel', [])

.service('MixPanel', function($q, $rootScope, MIXPANEL) {

  this.init = function(token) {
    document.addEventListener("deviceready", function() {
      $rootScope.mixpanel = window.mixpanel;
      $rootScope.mixpanel.init(token, function(data) {
          console.log(data);
        },
        function(err) {
          console.log(err);
        });
    }, false);
  }

  this.track = function(text, params) {
    document.addEventListener("deviceready", function() {
      $rootScope.mixpanel.track(text, params, function(data) {
        console.log(data);
      }, function(err) {
        console.log(err);
      })
    }, false);
  }

  this.init(MIXPANEL);

});
