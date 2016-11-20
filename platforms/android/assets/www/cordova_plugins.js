cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-device.device",
        "file": "plugins/cordova-plugin-device/www/device.js",
        "pluginId": "cordova-plugin-device",
        "clobbers": [
            "device"
        ]
    },
    {
        "id": "cordova-plugin-sqlite.SQLitePlugin",
        "file": "plugins/cordova-plugin-sqlite/www/SQLitePlugin.js",
        "pluginId": "cordova-plugin-sqlite",
        "clobbers": [
            "window.sqlitePlugin",
            "cordova.plugins.sqlitePlugin"
        ]
    },
    {
        "id": "cordova-sqlite-plugin.SQLite",
        "file": "plugins/cordova-sqlite-plugin/www/sqlite.js",
        "pluginId": "cordova-sqlite-plugin"
    },
    {
        "id": "cordova-sqlite-ext.SQLitePlugin",
        "file": "plugins/cordova-sqlite-ext/www/SQLitePlugin.js",
        "pluginId": "cordova-sqlite-ext",
        "clobbers": [
            "SQLitePlugin"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.0",
    "cordova-plugin-device": "1.1.3",
    "cordova-plugin-sqlite": "1.0.3",
    "cordova-sqlite-plugin": "3.1.1",
    "cordova-sqlite-ext": "0.10.2"
};
// BOTTOM OF METADATA
});