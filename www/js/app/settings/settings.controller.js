angular.module('wakeupApp')
  .controller('SettingsCtrl', function ($scope, $rootScope, localStorageService) {

    $scope.settings = {};

    console.log(localStorageService.get('settings.enableNotificationsBeforeCourses'));
    console.log(localStorageService.get('settings.enableAlarms'));

    if (localStorageService.get('settings.enableNotificationsBeforeCourses') != null) {
      $scope.settings.enableNotificationsBeforeCourses = localStorageService.get('settings.enableNotificationsBeforeCourses');
    } else {
      localStorageService.set('settings.enableNotificationsBeforeCourses', true);
    }

    if (localStorageService.get('settings.enableAlarms') != null) {
      $scope.settings.enableAlarms = localStorageService.get('settings.enableAlarms');
    } else {
      localStorageService.set('settings.enableAlarms', true);
    }

    if (localStorageService.get('settings.timeBetweenAlarmAndCourses')) {
      $scope.settings.timeBetweenAlarmAndCourses = localStorageService.get('settings.timeBetweenAlarmAndCourses');
    } else {
      localStorageService.set('settings.timeBetweenAlarmAndCourses', 90);
    }

    console.log($scope.settings);

    $scope.unbind1 = localStorageService.bind($scope, 'settings.enableNotificationsBeforeCourses');
    $scope.unbind2 = localStorageService.bind($scope, 'settings.enableAlarms');
    $scope.unbind3 = localStorageService.bind($scope, 'settings.timeBetweenAlarmAndCourses');

    $scope.checkEnableNotifications = function () {
      $rootScope.settings.enableNotificationsBeforeCourses = $scope.settings.enableNotificationsBeforeCourses;
    }

    $scope.checkEnableAlarms = function () {
      $rootScope.settings.enableAlarms = $scope.settings.enableAlarms;
    }

    $scope.checkTimeAlarm = function () {
      if ($scope.settings.timeBetweenAlarmAndCourses > 180) {
        $scope.settings.timeBetweenAlarmAndCourses = 180;
      } else if ($scope.settings.timeBetweenAlarmAndCourses < 0) {
        $scope.settings.timeBetweenAlarmAndCourses = 0;
      }

      //$rootScope.settings.timeBetweenAlarmAndCourses = $scope.settings.timeBetweenAlarmAndCourses;
      //localStorageService.set('settings.timeBetweenAlarmAndCourses', $scope.settings.timeBetweenAlarmAndCourses);
      console.log(localStorageService.keys());
    }

  })
;
