webpack-dummy
=============

  > Testing webpack and trying to replace gulp as a build tool.

--


## Usage

```
# setup
npm i -g webpack && npm i

# use
webpack
```

See [webpack CLI docs](https://webpack.github.io/docs/cli.html).


## Challenges


### Accomplished

  * bundle raw javascripts
      - support CommonJS with custom require basedir

  * parse stylus 
      - use custom plugins by glob

  * use postcss with plugins and custom options
      - use autoprefixer
      - use mqpacker

  * generate html from a jade template

  * when watching stylus, also watch required/imported files
  
  * clean generated files before build


### Unsolved or untested

  * simply concatenate javascripts that do not support CommonJS or AMD

  * agnostically create multiple entries and outputs by glob

  * create a static html structure by globbing templates

  * create css files without creating javascript files

  * when watching, clean before rebuild

  * when watching jade, also watch extended/included files

  * when parsing stylus, use custom options like paths, url and 'include css'

  * when creating html from jade, use custom options like basedir and create custom filters

  * when creating html from jade, use folder/file names from template structure

  * release static site to remote server via rsync or similar

  * optimize images (png, jpg, svg) with custom options

  * in pruduction env, do not build css if stylint throws errors on stylus sources

  * in pruduction env, do not bundle js if eslint throws errors on javascript sources

  * in production env, minify/uglify assets


## License

[MIT &copy; Simon Lepel 2016](http://simbo.mit-license.org/)
