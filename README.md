# Discard storage for multer

A storage implementation for [multer](https://github.com/expressjs/multer) that immediately discards uploaded files without saving them to memory or disk.

## Install

```
npm install multer-discard-storage
```

## Usage

```javascript
var multer = require('multer');
const discardStorage=require('multer-discard-storage')();
var upload = multer({storage: discardStorage});
```

## Example

```javascript

const express = require('express');
const multer = require('multer');
const app = express();
const port = 8080;

app.post('/upload',
    upload.any(),
    function (req, res, next) {

        for (let i in req.files) {
            const file = req.files[i];
            console.log(`No.${i} file uploaded. file size is ${file.size}`);
        }

        res.status(200).json({msg: 'OK'});

    });

app.listen(port, () => {
    console.log('Server started on port:' + port);
});


```