/**
 * Created by Evan on 2018-03-04.
 */
angular.module('armoroc.products', ['ui.router'])
    .config(function($stateProvider){
        console.log('loaded');
        $stateProvider
            .state('armoroc.products', {
                url: '/products',
                views: {
                    "content@armoroc":{
                        templateUrl: 'component/products/products.html',
                        controller : 'productsController'
                    }
                }
            });
    });