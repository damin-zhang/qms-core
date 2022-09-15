export default {
    entry: 'src/index.js',
    esm: {
        type: 'babel',
        minify: true
    },
    cjs: {
        type: 'babel',
        minify: true
    },
    cssModules: true
}