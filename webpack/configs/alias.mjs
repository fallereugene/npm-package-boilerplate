import { resolve } from 'path';
import { rootDir } from '../utils/index.mjs';

export const alias = {
    '@': resolve(rootDir, './src'),
};
