# Discard storage for multer

A storage implementation for [multer](https://github.com/expressjs/multer) that immediately discards uploaded files without saving them to memory or disk.

## Install

```
npm install multer-discard-storage
```

## Usage

```javascript
var multer = require('multer');
var discardStorage=require('./discard-storage.js')();
var upload = multer({storage: discardStorage});
```

