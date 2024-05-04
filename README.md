# 🤖 Brainman
Brainman is a fast and simple to use AI & personal assistant.

## 📦 Install
```bash
npm install brainman
```

## 🎉 Updates
- Fixed a few bugs in Chat and Imagine commands.

## ⏳ Upcoming Updates
- Website to be made.

## 🚀 Start
```js
const brainman = require('brainman');

// Chat with Brainman
async function brainmanStart(prompt, version) {
    const response = await brainman.chat({
        prompt: prompt,
        version: version // v3-turbo, v4, v4-32k
    });
    console.log(response);
}

brainmanStart('hello', 'v4');


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

## 🛠️ Support
- [Discord](https://discord.gg/9yYPF6BXt7)
- [GitHub](https://github.com/unoxdevs/brainman)
- [Telegram](https://t.me/unoxdevs)
- [Buy me a coffee](https://www.buymeacoffee.com/queaxtra)

## © Copyright
This project was created by [UnoxDevs](https://github.com/unoxdevs/brainman) and all source code rights are owned by [UnoxDevs](https://github.com/unoxdevs/brainman) and [Queaxtra](https://github.com/queaxtra).
