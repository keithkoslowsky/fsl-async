'use strict';

const fs = require('fs');
const mkdir = require('./mkdir');
const path = require('path');

exports.writeFile = (file = '', text = '', options = {encoding: 'utf8'}) => {
    return new Promise((resolve, reject) => {
	if (typeof options === 'string') options = { encoding: options };

	fs.writeFile(file, text, options, (err) => {
	    if (err && err.code === 'ENOENT') {
		return resolve(
		    mkdir(path.dirname(file))
			.then(this.writeFile(file, text, options))
		);
	    } else if (err && err.code === 'EISDIR') {
		return reject(file + ' is already a directory. Cannot write.');
	    } else if (err) {
		return reject(err);
	    } else {
		return resolve();
	    }
	});
    });
};

module.exports = this.writeFile;
