const path = require('path');

// Needed for webpack-resolver
process.env.NODE_ENV = 'production';

const constants = require('./eslint/constants');
const ERROR = constants.ERROR;
const WARN = constants.WARN;
const OFF = constants.OFF;


module.exports = {
    root: true,
    extends: [
        'sensible/babel',
        'sensible/jsdoc',
        './eslint/react.js',
        './eslint/lodash.js',
    ],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    rules: {
        'no-inline-comments': OFF,
        'valid-jsdoc': WARN,
        'require-jsdoc': OFF,
        'lodash/consistent-compose': ERROR,
        'indent': OFF,
        'yoda': OFF,
        'react/jsx-indent-props': OFF,
        'react/jsx-indent': OFF
    },
    globals: {
        'ga': true,
        '__PH': true,
        'DocumentTouch': true
    },
    settings: {
        'import/resolver': {
            webpack: {
                config: path.join(__dirname, 'webpack/client.config.babel.js')
            }
        }
    }
};