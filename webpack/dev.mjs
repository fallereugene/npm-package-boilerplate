import webpack from 'webpack';
import { devServerConfig } from './configs/index.mjs';
import * as plugins from './plugins/index.mjs';

export default {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    devServer: devServerConfig,
    plugins: [plugins.htmlWebpackPlugin, new webpack.HotModuleReplacementPlugin()].filter(Boolean),
};
