/* @flow */

// eslint-disable-next-line import/no-commonjs
module.exports = (api) => {
    const modules = api.env() === 'esm' ? false : 'auto';
    return {
        extends: 'grumbler-scripts/config/.babelrc-node',
        presets: [
            [
                '@babel/env', {
                    modules
                }
            ]
        ]
    };
};
