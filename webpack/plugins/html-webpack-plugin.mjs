import { join } from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { rootDir } from '../utils/index.mjs';

const config = {
    minify: {
        removeComments: true,
        useShortDoctype: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        sortAttributes: true,
        sortClassName: true,
    },
    template: join(rootDir, `./src/index.html`),
    meta: {
        viewport: 'width=device-width, initial-scale=1',
    },
};

export const htmlWebpackPlugin = new HtmlWebpackPlugin(config);
