const { app, BrowserWindow, shell } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 800,
    autoHideMenuBar: true,
    title: "Bekleyen istekler"
  });
  // Profil bağlantıları uygulama içinde değil, normal tarayıcında açılır
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith("https://www.instagram.com/")) shell.openExternal(url);
    return { action: "deny" };
  });
  win.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
