const path = require('path');
var prod = process.env.NODE_ENV === 'production'

module.exports = {
    wpyExt: '.wpy',
    build: {
        web: {
            htmlTemplate: path.join('src', 'index.template.html'),
            htmlOutput: path.join('web', 'index.html'),
            jsOutput: path.join('web', 'index.js')
        }
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            'common': path.join(__dirname, 'src/common'),
            'plugins': path.join(__dirname, 'src/plugins'),
            'components': path.join(__dirname, 'src/components'),
            'mixins': path.join(__dirname, 'src/mixins'),
            'images': path.join(__dirname, 'src/images'),
            'wxs': path.join(__dirname, 'src/wxs'),
        },
        modules: ['node_modules']
    },
    eslint: false,
    compilers: {
        less: {
            compress: true
        },
        /*sass: {
          outputStyle: 'compressed'
        },*/
        babel: {
            sourceMap: true,
            presets: [
                'env'
            ],
            plugins: [
                'transform-class-properties',
                'transform-decorators-legacy',
                'transform-object-rest-spread',
                'transform-export-extensions',
            ]
        }
    },
    plugins: {
        uglifyjs: {
            filter: /\.(js|wpy|vue)$/,
            config: {
                'warnings': false,
                'comments': false,
                'beautify': false,
                'mangle': true,
                'mangle-props': true,
                'minify': true,
                'sourcemap': true,
                'compress': {
                    'warnings': false,
                    'dead_code': true,
                    'drop_console': false,
                    'drop_debugger': true
                }
            }
        },
        imagemin: {
            filter: /\.(jpg|png|jpeg)$/,
            config: {
                jpg: {
                    quality: 80
                },
                png: {
                    quality: 80
                }
            }
        }
    },
    appConfig: {
        noPromiseAPI: ['createSelectorQuery']
    }
}

if (prod) {

    delete module.exports.compilers.babel.sourcesMap;
    // 压缩sass
    // module.exports.compilers['sass'] = {outputStyle: 'compressed'}

    // 压缩less
    module.exports.compilers['less'] = { compress: true }

    // 压缩js
    module.exports.plugins = {
        uglifyjs: {
            filter: /\.(js|wpy|vue)$/,
            config: {
                'warnings': false,
                'comments': false,
                'beautify': false,
                'mangle': true,
                'mangle-props': true,
                'minify': true,
                'sourcemap': false,
                'compress': {
                    'warnings': false,
                    'dead_code': true,
                    'drop_console': true,
                    'drop_debugger': true
                }
            }
        },
        imagemin: {
            filter: /\.(jpg|png|jpeg)$/,
            config: {
                jpg: {
                    quality: 80
                },
                png: {
                    quality: 80
                }
            }
        }
    }
}
