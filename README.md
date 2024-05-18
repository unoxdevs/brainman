# 🤖 Brainman
Brainman is a fast and simple to use AI & personal assistant.

![NPM Downloads](https://img.shields.io/npm/dm/brainman?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/brainman?style=flat-square)
![NPM License](https://img.shields.io/npm/l/brainman?style=flat-square)
![GitHub Repo stars](https://img.shields.io/github/stars/unoxdevs/brainman?style=flat-square)

## 🤝 Sponsor
We would like to thank [HOSTUDE](https://hostude.net/) for sponsoring this project.
![Sponsor](https://www.upload.ee/image/16645795/Sponsor.png)

## 📦 Install
```bash
npm install brainman
```

## 🎉 Updates
- API link has been changed.

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
You can also use Brainman online [by clicking on this link](https://brainman.unoxdevs.fun).
![Screenshot](https://www.upload.ee/image/16645812/Queaxtra_43.png)

## 🛠️ Support
- [Discord](https://discord.gg/9yYPF6BXt7)
- [GitHub](https://github.com/unoxdevs/brainman)
- [Telegram](https://t.me/unoxdevs)
- [Status](https://status.unoxdevs.fun/)

## © Copyright
This project was created by [UnoxDevs](https://github.com/unoxdevs/brainman) and all source code rights are owned by [UnoxDevs](https://github.com/unoxdevs/brainman) and [Queaxtra](https://github.com/queaxtra).
