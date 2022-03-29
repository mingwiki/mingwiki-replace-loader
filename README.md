# replace-loader

```js
const path = require('path')
module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    path: path.resolve(__dirname, './dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: path.resolve(__dirname, 'replace-loader.js'),
            options: { name: "fuming" },
          }
        ]
      }
    ]
  },
}
```
