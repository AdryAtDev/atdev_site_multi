const CleanCSS = require('clean-css')
const { minify } = require('terser')
const htmlmin = require('html-minifier')
const { EleventyI18nPlugin } = require('@11ty/eleventy')

module.exports = function (eleventyConfig) {
	eleventyConfig.setQuietMode(true)
	eleventyConfig.addPlugin(EleventyI18nPlugin, { defaultLanguage: 'en'})
	
	eleventyConfig.addLayoutAlias('base', 'layouts/base.njk')

	eleventyConfig.addPassthroughCopy({ 'assets/css': 'css' })
	eleventyConfig.addPassthroughCopy({ 'assets/img': 'img' })
	eleventyConfig.addPassthroughCopy({ 'assets/logos': 'logos' })
	eleventyConfig.addPassthroughCopy({ 'assets/icons': 'icons' })
	eleventyConfig.addPassthroughCopy({ 'assets/js': 'js' })
	eleventyConfig.addPassthroughCopy({ 'assets/fonts': 'fonts' })
	eleventyConfig.addPassthroughCopy({ 'src/_data': 'data' })

	eleventyConfig.addFilter('cssmin', function (code) {
		return new CleanCSS({}).minify(code).styles
	})

	eleventyConfig.addNunjucksAsyncFilter('jsmin', async function (code, callback) {
		try {
			const minified = await minify(code)
			callback(null, minified.code)
		} catch (err) {
			console.error('Terser error: ', err)
			callback(null, code)
		}
	})

	eleventyConfig.addTransform('htmlmin', function (content) {
		if (this.page.outputPath && this.page.outputPath.endsWith('.html')) {
			let minified = htmlmin.minify(content, { useShortDoctype: true, removeComments: true, collapseWhitespace: true })
			return minified
		}
		return content
	})

	// START IGNORING FILES
	eleventyConfig.ignores.add('_site')
	eleventyConfig.ignores.add('dist')
	eleventyConfig.ignores.add('node_modules')
	// END IGNORING FILES

	return {
		passthroughFileCopy: true,
		dir: {
			input: 'src',
		},
		templateFormats: ['md', 'njk', 'html'],
		markdownTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
	}
}
