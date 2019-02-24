module.exports = function(eleventyConfig) {
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  })

  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('js')

  return {
    passthroughFileCopy: true
  }
}
