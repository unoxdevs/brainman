# 🤖 Brainman
Brainman is a fast and simple to use AI & personal assistant. 

## 📦 Install
```bash
npm install brainman
```

## 🎉 Updates
- New versions added.
- Minor bugs fixed.

## ⏳ Upcoming Updates
- Image creation command will be added.
- Other versions of AI will be added.

## 🚀 Start
```js
const brainman = require("brainman");

async function brainmanStart(prompt) {
    /* 'v4', 'v3-turbo', 'v4-32k' */
    await brainman.chat({ version: "v4", prompt: prompt }).then(response => {
        console.log(response);
    })
}

brainmanStart("hello")
```

## 🛠️ Support
- [Discord](https://discord.gg/9yYPF6BXt7)
- [GitHub](https://github.com/unoxdevs/brainman)
- [Telegram](https://t.me/unoxdevs)

## © Copyright
This project was created by [UnoxDevs](https://github.com/unoxdevs/brainman) and all source code rights are owned by [UnoxDevs](https://github.com/unoxdevs/brainman) and [Queaxtra](https://github.com/queaxtra).