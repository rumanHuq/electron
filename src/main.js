const electron = require('electron');
const {app, BrowserWindow,ipcMain} = electron;
let mainWindow
app.on('ready',function(){
    mainWindow = new BrowserWindow({
        height : 600,
        width : 480
    }) ; 

    mainWindow.loadURL(`file://${__dirname}/index.html`) ; 

    let time_beat = function(callback){
        let counter = 10
        let timer = setInterval(function(){
            callback(counter--)
            if (counter == 0) {
                clearInterval(timer)
            }
        },300) ;
        
    }
    ipcMain.on('handle-click', function(){
        time_beat(function(counter){
            mainWindow.webContents.send('handle-response', counter)
        })
    })

    mainWindow.on('closed', function(){
        console.log('...closed')
    })
});
