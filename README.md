# mingwiki-webpack-replace-loader

```bash
npm i mingwiki-webpack-replace-loader
```

## webpack
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
            loader: 'mingwiki-webpack-replace-loader',
            options: { name: "fuming" },
          }
        ]
      }
    ]
  },
}
```
