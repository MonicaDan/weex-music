# Introduction

This boilerplate is targeted towards large, serious projects and assumes you are somewhat familiar with Webpack and `weex-loader`. 

## Quickstart

To use this template, scaffold a project with [weexpack v1.1.1+](https://github.com/weexteam/weex-pack).

``` bash
$ npm install -g weex-toolkit
$ weex create my-project # default will create the webpack template
$ cd my-project && npm start
```

## How to use less/sass/pug

Take `sass` for example:

```
$ npm i node-sass sass-loader --save
```

Then, you just need to change the `style` tag as: `<style lang="sass"><style>`.

## How to create your own template

See [How-to-create-your-own-template](https://github.com/weex-templates/How-to-create-your-own-template).


20190411：
weex APP：
本项目为完成上线的项目之后的一个练手项目，只完善了两个主界面，采用QQ音乐API来获取音乐数据，使用flex布局（weex自带的布局，很省事）搭建页面的界面。ui框架方面使用weex-ui里的slider轮播图、list、cell等。因为数据量太大，所以打包巨慢，比蜗牛还慢！放弃辽~
一些样式需要抽离，不要写行内样式啊喂！
weex的发展速度很快，目前已经发展到了0.20版本。当然前期的坑也很多，比如本人就在它和vue的差异上栽了很多跟头，还有一些原生的技术（ios我是真的不会啊==），比如说添加某些个原生的SDK或者说是加载本地的图片。一些坑我一定要总结出来，放在博客上。最后的打包，这次weex体验让我感受到了很不一样的混合式APP开发的魅力，希望自己把vue弄熟悉之后呢，把RN再看看。
加油！
