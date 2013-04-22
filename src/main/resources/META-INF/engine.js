print = lessenv.print;
quit = lessenv.quit;
delete arguments;

var basePath = function(path) {
	if (path != null) {
		return path.replace(/^(.*[\/\\])[^\/\\]*$/, '$1');
	}
	return "";
}


function readFromFile(path,paths) {
    if (!/^\//.test(path) && !/^\w+:/.test(path)) {
		path = paths[0] + path;
	}
    if (!path) return '';
    return String(lessenv.loader.load(path, lessenv.charset));
}

var compile = function compile(source, location, compress) {
    var out = '';
    compile_inner(source, new String(location), compress,function(result) {
        out = result || '';
    });
    return out;
};

