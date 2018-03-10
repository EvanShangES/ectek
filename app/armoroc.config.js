/**
 * Created by Evan on 2018-01-18.
 */
'use strict';

var appConfig = window.appConfig || {};

window.appConfig = appConfig;

/******************************************************************************
 * Configurations : Components and Dependencies
 ******************************************************************************/
'use strict';

var $appId = 'armoroc';

var $dependencies = [
    'ui.router'
];

var $components = [
    'armoroc.layout',
    'armoroc.home',
    'armoroc.products',
    'armoroc.about',
    //'armoroc.support',
    'armoroc.contact',
    //'armoroc.quote'
    //'yixue.auth',
    //'yixue.start_here'
];

$dependencies = $dependencies.concat($components);