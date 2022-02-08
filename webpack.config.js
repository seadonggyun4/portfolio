const path = require('path')
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './js/main.js',
  
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    clean: true
  },

  module:{
    rules:[
      {
        //.scss로 끝나는 파일을 찾는 정규식
        // s는 있을수도 있고 없을수도있어 css또한 호환가능하다.
        test:/\.s?css$/,
        // 찾은 파일에서 사용하는 모듈
        use:[
          'style-loader',//js에서 해석된 css를 html 에 삽입을 하는 용도
          'css-loader', //js에서 css를 해석하도록 한다.
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use:[
          'babel-loader'
        ]
      }
    ]
  },

  plugins:[
    new HtmlPlugin({
      template:'./index.html'
    }),

    new CopyPlugin({
      patterns: [
        {from:'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}