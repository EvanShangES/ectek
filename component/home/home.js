/**
 * Created by Evan Shang on 2017-05-12.
 */
angular.module('armoroc.home', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('armoroc.home', {
               url: '/home',
               views: {
                   "content@armoroc":{
                       templateUrl: 'component/home/views/home1.html',
                       controller : 'homeController'
                   }
               }
            });
    });