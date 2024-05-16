# 🤖 Brainman
Brainman is a fast and simple to use AI & personal assistant.

![NPM Downloads](https://img.shields.io/npm/dm/brainman?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/brainman?style=flat-square)
![NPM License](https://img.shields.io/npm/l/brainman?style=flat-square)
![GitHub Repo stars](https://img.shields.io/github/stars/unoxdevs/brainman?style=flat-square)
![Uptime](https://uptime.betterstack.com/status-badges/v2/monitor/184np.svg)


## 📦 Install
```bash
npm install brainman
```

## 🎉 Updates
- DALLE version was built from scratch and bugs were fixed.
- Category option added. You can now specify which category you want the chat to be in.

## ⏳ Upcoming Updates
- Discord bot will be made.

## 🚀 Start
```js
const brainman = require('brainman');

// Chat with Brainman
async function brainmanStart(prompt, version, category) {
    const response = await brainman.chat({
        prompt: prompt,
        version: version, // v3-turbo, v4, v4-32k, gemini
        category: category // software, entertainment, food, travel etc.
    });
    console.log(response);
}

brainmanStart('create a basic html code', 'v4', 'software');


// Imagine with Brainman
async function brainmanImagine(prompt, version) {
    const response = await brainman.imagine({
        prompt: prompt,
        version: version // stablediffusion, dalle
    });
    console.log(response);
}

brainmanImagine('a cat', 'dalle');
```

## 🖥️ Usage Website
![Screenshot](https://www.upload.ee/image/16637434/Queaxtra_02.png)
- [Website Link](https://brainman.unoxdevs.fun)

## 🛠️ Support
- [Discord](https://discord.gg/9yYPF6BXt7)
- [GitHub](https://github.com/unoxdevs/brainman)
- [Telegram](https://t.me/unoxdevs)
- [Buy me a coffee](https://www.buymeacoffee.com/queaxtra)

## © Copyright
This project was created by [UnoxDevs](https://github.com/unoxdevs/brainman) and all source code rights are owned by [UnoxDevs](https://github.com/unoxdevs/brainman) and [Queaxtra](https://github.com/queaxtra).
