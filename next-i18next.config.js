const path = require("path");

module.exports = {
    i18n: {
        defaultLocale: 'am',
        locales: ['am', 'en', 'ru'],
        localeDetection: false,
    },
    localePath: path.resolve("./public/locales"),
};
