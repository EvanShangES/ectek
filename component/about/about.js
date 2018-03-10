/**
 * Created by Evan on 2018-03-04.
 */
/**
 * Created by Evan Shang on 2017-05-12.
 */
angular.module('armoroc.about', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('armoroc.about', {
                url: '/about',
                views: {
                    "content@armoroc":{
                        templateUrl: 'component/about/about.html',
                        controller : 'aboutController'
                    }
                }
            });
    });