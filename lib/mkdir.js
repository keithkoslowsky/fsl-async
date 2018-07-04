'use strict';

const fs = require('fs');
const path = require('path');

exports.mkdir = (dirname = false, mode = false, toDo = []) => {
    return new Promise((resolve, reject) => {
	if (dirname) toDo.push(dirname);

	const key = toDo.length - 1;
	dirname = toDo[key];

	fs.mkdir(dirname, mode, (err) => {
	    if (err && err.code === 'ENOENT') {
		toDo.push(path.dirname(dirname));
		return resolve(this.mkdir(false, mode, toDo));
	    } else if ((err && err.code === 'EEXIST') || ! err) {
		toDo.splice(key, 1);
		
		if (toDo.length) {
		    return resolve(this.mkdir(false, mode, toDo));
		} else {
		    return resolve();
		}
	    } else if (err) {
		return reject(err);
	    }
	});
    });
};

module.exports = this.mkdir;
