const webpack = require('webpack'),
	path = require('path'),
	HtmlWebpackPlugin = require('html-webpack-plugin'),
	ip = require('ip');

const env = process.env.NODE_ENV == "prod";
const resolve = dir => {
	return path.join(__dirname, "./src", dir)
}

var webpackConfig = {
	entry: {
		app: [resolve("./app.js")],
	},
	output: {
		path: resolve("./dist"),
		publicPath: '',
		filename: "assets/js/[name].js",
		chunkFilename: "chunk/[name].js",
	},
	devServer: {
		inline: true, //开启页面自动刷新
		lazy: false, //不启动懒加载
		quiet: false, //控制台中不输出打包的信息
		progress: true, //显示打包的进度
		open: true,
		port: 9000,
		compress: true,
		host: ip.address(),
		historyApiFallback: true,
		contentBase: "./",
		https: false, //先不启动
	},
	//4.0配置
	optimization: {
		runtimeChunk: {
			name: "manifest"
		},
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]/,
					name: "../assets/js/vendor",
					chunks: "all",
				}
			}
		},
		occurrenceOrder: true // 在不同的模式之间保持文件名一致（例如只构建）
	},
	resolve: {
		alias: {
			'vue': 'vue/dist/vue.min',
			'vue-router': 'vue-router/dist/vue-router.min',
			'vuex': 'vuex/dist/vuex.min',
			"views": resolve("./views")
		},
		extensions: ['.js', '.less', '.css', '.vue', '.jsx', '.txt', '.json'], //2.0的配置
	},
	resolveLoader: {
		moduleExtensions: ['-loader']
	},
	externals: {},
	module: {
		//4.0之前是 loaders,现在修改为 rules
		rules: [{
			test: /\.js$/,
			include: resolve("/"),
			loader: 'babel',
		}, {
			test: /\.vue$/,
			loader: 'vue',
		}, {
			test: /\.(css|less)$/,
			include: resolve("/"),
			loader: "style!css!less"
		}, {
			test: /\.(html|tpl)$/,
			include: resolve("/"),
			loader: 'html'
		}, {
			test: /\.json$/,
			loader: "json"
		}, {
			test: /\.xml$/,
			include: resolve("/"),
			loader: "xml"
		}, {
			test: /\.(png|jpg|jpeg|gif|icon|ico|webp)$/,
			include: resolve("/"),
			loader: 'url?limit=4192&name=assets/img/[name].[hash:5].[ext]'
		}, {
			test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
			include: resolve("/"),
			loader: "file?&name=assets/fonts/[name].[ext]"
		}, {
			test: /\.(swf|mp4)?$/,
			include: resolve("/"),
			loader: 'file?name=assets/video/[name].[hash:5].[ext]',
		}, {
			test: /\.txt$/,
			include: resolve("/"),
			loader: "text"
		}],

	},
	plugins: [
		new HtmlWebpackPlugin({
			template: resolve('/index.ejs')
		}),
	]
};



module.exports = webpackConfig;