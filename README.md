# 🤖 Brainman
Brainman is a fast and simple to use AI & personal assistant.

## 📦 Install
```bash
npm install brainman
```

## 🎉 Updates
- Major API improvements for faster and more accurate responses.
- Enhanced error handling for smoother user experience.
- Fixed minor bugs and performance issues.

## 🚀 Start
```js
const brainman = require("brainman");

async function chat(prompt, version) {
    const response = await brainman.chat({
        version: version, // v1 or v2
        prompt: prompt,
    });
    console.log(response);
}

chat(`what's your name?`, 'v2');
```

## 🛠️ Support
- [Discord](https://discord.gg/b9gS3r7XuJ)
- [GitHub](https://github.com/unoxdevs/brainman)
- [Telegram](https://t.me/unoxdevs)

## © Copyright
This project was created by [UnoxDevs](https://github.com/unoxdevs/brainman) and all source code rights are owned by [UnoxDevs](https://github.com/unoxdevs)