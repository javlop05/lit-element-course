import merge from 'deepmerge';
import { createSpaConfig } from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
    // Transpile code to ES5
    legacyBuild: true
});

export default merge(baseConfig, {
    input: './index.html'
});