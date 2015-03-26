Package.describe({
    summary: 'Many awesome utilities',
    name: 'vazco:universe-utilities',
    version: '1.0.0',
    git: 'https://github.com/vazco/meteor-universe-utilities'
});

Package.on_use(function (api) {
    api.versionsFrom(['METEOR@1.0.4']);
    api.use(['templating', 'ui', 'blaze'], 'client');
    api.use([
        'underscore'
    ]);

    api.add_files([
        'lib/UniUtils.js',
        'lib/UniUtilsStrings.js',
        'lib/ProvidingGlobals.js',
        'lib/UniConfig.js'
    ]);

    api.add_files(['client/SpacebarsHelpers.js'],['client']);

    api.export([
        'UniUtils',
        'UniConfig',
        'Vazco',
        'Colls',
        'App'
    ]);
});