module.exports = function (data) {
  // console.log(this.getOptions())
  return data.replace(this.getOptions().name, this.getOptions().name.toUpperCase())
}