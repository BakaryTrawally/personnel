import { app, BrowserWindow } from "electron";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createWindow() {
  const win = new BrowserWindow({
    width: 700,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Open DevTools for debugging
  win.webContents.openDevTools();

  if (process.env.NODE_ENV === "development") {
    win.loadURL("http://localhost:5173");
  } else {
console.log("Loading:", path.join(__dirname, 'build', 'index.html'));
win.loadFile(path.join(__dirname, 'dist', 'index.html'));
    // win.loadFile(path.join(__dirname, "dist", "index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
