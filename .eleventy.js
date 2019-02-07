module.exports = function(eleventyConfig) {
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true
  })

  eleventyConfig.addPassthroughCopy('css')

  return {
    passthroughFileCopy: true
  }
}
