import { app, BrowserWindow } from "electron"

function createWindow() {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
  });

  // 🔹 en modo dev, abrimos el server de Vite
  win.loadURL("http://localhost:5173/login");

  // 🔹 en producción usarías:
  //win.loadFile("dist/index.html");
}

app.whenReady().then(() => {
  createWindow();
});
