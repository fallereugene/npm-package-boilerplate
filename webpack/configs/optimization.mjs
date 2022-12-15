import TerserJSPlugin from 'terser-webpack-plugin';

export const optimization = {
    splitChunks: {
        chunks: 'all',
        cacheGroups: {
            commons: {
                test: /[\\/]node_modules[\\/]/,
                name: `vendor`,
                chunks: `initial`,
            },
        },
    },
    minimize: true,
    minimizer: [
        new TerserJSPlugin({
            extractComments: false,
            minify: (file, sourceMap) => {
                const uglifyJsOptions = {
                    /* your `uglify-js` package options */
                };

                if (sourceMap) {
                    uglifyJsOptions.sourceMap = {
                        content: sourceMap,
                    };
                }
                // eslint-disable-next-line
                return require('uglify-js').minify(file, uglifyJsOptions);
            },
        }),
    ],
};
