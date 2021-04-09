function show(content) {
    localStorage.setItem('content', content);
    webContentsId = utools.createBrowserWindow('large.html', {
        title: 'Large Type',
        fullscreen: false,
        frame: false,
        height: 150,
        width: window.screen.width,
        minimizable: false,
        maximizable: false,
        alwaysOnTop: true,
        transparent: true,
        backgroundColor: '#00000000',
    });
};

window.exports = {
    "large-type": {
        mode: "none",
        args: {
            enter: (action) => {
                window.utools.hideMainWindow();
                show(action.payload);
                window.utools.outPlugin();
            }
        }
    }
}