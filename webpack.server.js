import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.babel';
import path from 'path';

const compiler = webpack(webpackConfig);
const serverConfig = {
    contentBase: path.resolve(__dirname, 'dist'),
    https: false,
    historyApiFallback: true,
    compress: true,
    stats: {
        colors: true,
        hash: false,
        timings: true,
        chunks: false,
        chunkModules: false,
        modules: false,
    },
};

export default new WebpackDevServer(compiler, serverConfig).listen(8080, 'localhost', function devServerListener(err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Listening at localhost:8080`);
});
