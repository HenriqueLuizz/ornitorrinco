const { app, BrowserWindow, ipcMain } = require('electron');

app.on('ready', () =>{
    //console.log('Aplicação Iniciada!');
    let mainWindow = new BrowserWindow({
        width: 950,
        height: 685
    });

    console.log(__dirname);

    mainWindow.loadURL(`file://${__dirname}/public/index.html`);
});

app.on('window-all-closed', () => {
    app.quit();
});

let sobreWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
    if(sobreWindow == null){
        sobreWindow = new BrowserWindow({
            width: 300,
            height: 220,
            alwaysOnTop: true, //Verificar porque não está funcionando!!!! no Linux
            //frame: false
        });

        sobreWindow.on('closed', () => {
            sobreWindow = null;
        });
    }
    sobreWindow.loadURL(`file://${__dirname}/src/public/sobre.html`);
});

ipcMain.on('fechar-janela-sobre', () => {
    sobreWindow.close();
});