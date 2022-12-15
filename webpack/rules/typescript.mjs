import { join } from 'path';
import { rootDir, mode } from '../utils/index.mjs';

const tsConfigFile = join(rootDir, 'tsconfig.json');

const isDevelopmentMode = mode !== 'production';

export const typescriptRule = {
    test: /\.tsx?$/,
    loader: 'ts-loader',
    options: {
        // disable type checker - we will use it in fork plugin
        transpileOnly: isDevelopmentMode,
        logLevel: 'info',
        compilerOptions: tsConfigFile,
        happyPackMode: isDevelopmentMode,
    },
    exclude: /node_modules/,
};
