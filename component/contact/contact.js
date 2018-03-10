/**
 * Created by Evan on 2018-03-04.
 */
/**
 * Created by Evan on 2018-03-04.
 */
/**
 * Created by Evan Shang on 2017-05-12.
 */
angular.module('armoroc.contact', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('armoroc.contact', {
                url: '/contact',
                views: {
                    "content@armoroc":{
                        templateUrl: 'component/contact/contact.html',
                        controller : 'contactController'
                    }
                }
            });
    });