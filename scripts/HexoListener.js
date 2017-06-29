var exec = require('child_process').exec;

hexo.on('new', function(data) {
    exec('start "C:\Users\Moz\AppData\Roaming\Haroo Studio\Haroopad\haroopad.exe" '+ data.path);
});