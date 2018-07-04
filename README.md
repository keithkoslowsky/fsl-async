Node.js: fsl-async
=================

Installation
------------

    npm install --save fsl-async

Usage
-----

`fsl-async` contains drop in replacements for fs.writeFile and fs.mkdir. If the path you specify doesn't exist, it will create it. It doesn't contain any dependencies. Uses Promises.

```js
const fsl = require('fsl-async');
```

### mkdir

```js
fsl.mkdir('/tmp/dir/does/not/exist/yet').then(() => {
    console.log('Done.');
});
```

The second argument sets a mode and follows the same rules as [fs.mkdir](https://nodejs.org/api/fs.html#fs_fs_mkdir_path_mode_callback).

```js
fsl.mkdir('/tmp/dir/does/not/exist/yet', 0o664).then(() => {
    console.log('Done.');
});
```

### writeFile

```js
fsl.writeFile('/tmp/dir/does/not/exist/yet/myfile', 'hello world').then(() => {
    console.log('Done.');
});
```

Supports [fs.writeFile](https://nodejs.org/api/fs.html#fs_fs_writefile_file_data_options_callback) options as its third argument. 
```js
fsl.writeFile('/tmp/dir/does/not/exist/yet/myfile', 'hello world', 'utf8').then(() => {
    console.log('Done.');
});
```

OR

```js
fsl.writeFile('/tmp/dir/does/not/exist/yet/myfile', 'hello world', { encoding: 'utf8' }).then(() => {
    console.log('Done.');
});
```



