const path = require('path');
const resolve = (dir) => path.resolve(__dirname, dir);
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
	transpileDependencies: true,
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('./src'))
			.set('components', resolve('./src/components'))
			.set('views', resolve('./src/views'))
			.set('assets', resolve('./src/assets'));

		config.module.rule('svg')
		.exclude.add(resolve('src/icons'))
		.end()
		config.module
		.rule('icons')
		.test(/\.svg$/)
		.include.add(resolve('src/icons'))
		.end()
		.use('svg-sprite-loader')
		.loader('svg-sprite-loader')
		.options({
			symbolId: 'icon-[name]'
		})
		.end()
	},

});
