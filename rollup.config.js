import merge from 'deepmerge';
import { createSpaConfig } from '@open-wc/building-rollup';

const baseConfig = createSpaConfig({
    // Transpilar codigo a ES5
    legacyBuild: true
});

export default merge(baseConfig, {
    input: './index.html'
});