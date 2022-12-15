import webpack from 'webpack';
import { mode, isServer } from '../utils/index.mjs';

const config = {
    ENV: JSON.stringify(mode),
    IS_DEV_SERVER: JSON.stringify(isServer),
};

export const environmentPlugin = new webpack.EnvironmentPlugin(config);
