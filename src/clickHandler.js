const electron = require('electron');
const ipc = electron.ipcRenderer;
module.exports = function(){
    document.getElementById('btn').addEventListener('click',function(){
        ipc.send('handle-click')
    })

    ipc.on('handle-response', function(event, data){
        document.getElementById('app').innerHTML = data
    })
}

