import { join } from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import { rootDir } from '../utils/index.mjs';

const PATHS = [join(rootDir, 'ReleaseNotes.txt'), join(rootDir, 'manifest.json'), join(rootDir, 'src/package.json')];

// конфигурация путей, по которым нужно копировать содержимое as is
// в процессе сборки
const config = {
    patterns: PATHS.map((path) => ({
        from: path,
        to: '../',
    })),
};

export const copyWebpackPlugin = new CopyPlugin(config);
