import { optimization } from './configs/index.mjs';
import * as plugins from './plugins/index.mjs';

export default {
    mode: 'production',
    optimization,
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
    plugins: [plugins.copyWebpackPlugin],
};
