const { app, BrowserWindow } = require('electron');

function creatWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600
    });

    mainWindow.loadFile(__dirname + '/src/index.html');
    mainWindow.on('exit', function(){
        mainWindow = null;
    });
}

app.on('ready', creatWindow);
