# serverless-parcel

Serverless plugin for zero-config [parcel bundler](https://parceljs.org/) support.

## Install

```
yarn add serverless-parcel --dev
```

Add the plugin to your `serverless.yml`:

```
plugins:
  - serverless-parcel
```

## Configure

```yml

plugins:
  - serverless-parcel

package:
  include:
    - handler.ts

custom:
  parcel:
    options:
      outDir: .build/src/dist # options for all entries
    entries:
      - file: src/dist/index.html # entry specific options override global options
        minify: true
        target: browser

```

A full list of options can be found on [parcel's api docs](https://parceljs.org/api.html)

## Shout Out

This project was heavily inspired by [serverless-plugin-typescript](https://github.com/prisma/serverless-plugin-typescript) and [serverless-webpack](https://github.com/serverless-heaven/serverless-webpack). Both are epic projects and I hope this projects grows up to be like them one day. :tada:
