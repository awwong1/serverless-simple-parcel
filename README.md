# serverless-simple-parcel

[![Travis](https://shields.alexander-wong.com/travis/awwong1/serverless-simple-parcel.svg?style=flat-square)](https://travis-ci.org/awwong1/serverless-simple-parcel)
[![npm](https://shields.alexander-wong.com/npm/v/serverless-simple-parcel.svg?style=flat-square)](https://www.npmjs.com/package/serverless-simple-parcel)

Serverless plugin for zero-config [parcel.js](https://parceljs.org/) bundling.

## Install

```bash
# yarn
yarn add --dev serverless-simple-parcel
# npm
npm install --save-dev serverless-simple-parcel
```

Add the plugin to your `serverless.yml`:

```yml
plugins:
  - serverless-simple-parcel

custom:
  parcel:
    options:
      outDir: dist # options for all parcel entries
    entries:
      - file: src/public/index.html
        outDir: dist/src/public # entry specific options override global options
        minify: true
        target: browser
      - file: src/ssr.ts
        target: node
        outFile: handler.js
```

Supported serverless commands include:

```bash
$ serverless offline start # serverless-offline (watch)
$ serverless deploy
$ serverless invoke local 
```

A full list of options can be found on [parcel's api docs](https://parceljs.org/api.html)

## Acknowledgements

Forked from [johnagan/serverless-parcel](https://github.com/johnagan/serverless-parcel).

## License

This is [free software](https://www.gnu.org/philosophy/free-sw.en.html), licensed under [MIT License](LICENSE.md).

```text
The MIT License

Copyright (c) 2018 Alexander Wong

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
