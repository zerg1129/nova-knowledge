# Wonseok Whisky Distillery Tasting Microsite

Nova Whisky Bar 店內 QR Code 導飲用的一頁式靜態網站。內容整理自：

- `TalkFile_Wonseok Whisky Distillery_Brief introduction_260621原文.pdf`
- `Wonseok_Whisky_Distillery_Chinese_Translation_Revised.pdf`

## 如何開啟

直接用瀏覽器開啟 `index.html` 即可。

若要用本機預覽伺服器，可在此資料夾執行：

```bash
python3 -m http.server 8026
```

然後開啟：

```text
http://localhost:8026/
```

## 部署

這是純靜態網站，只需要以下檔案：

- `index.html`
- `styles.css`
- `script.js`
- `README.md`

適合部署到 GitHub Pages、Netlify、Vercel 或 Cloudflare Pages。

## QR Code 正式網址

未來產生 QR Code 時，請將正式網址填在這裡：

```text
正式網址：https://zerg1129.github.io/nova-knowledge/wonseok-tasting/
```

部署後可將上方網址替換成實際網址，再用該網址產生 QR Code。
