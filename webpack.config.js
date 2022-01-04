// @ts-check

const { WebpackManifestPlugin } = require('webpack-manifest-plugin');


/** @type { import('webpack').Configuration } */
const config = {
    plugins: [
        new WebpackManifestPlugin({
            generate: () => {
                return {
                    stringKey: 'aaaaaa',
                    objectKey: {
                        some: 1
                    }
                };
            },
            writeToFileEmit: true,
        }),
    ]
}

module.exports = config;
