# 🤖 Brainman
Brainman is a fast and simple to use AI & personal assistant.

## 📦 Install
```bash
npm install brainman
```

## 🎉 Updates
- Image creation added.
- Fixed minor bugs in chat.

## ⏳ Upcoming Updates
- Website to be made.
- More versions to be added.

## 🚀 Start
```js
// Chat with Brainman
const brainman = require('brainman');

async function brainmanStart(prompt) {
  // 'v4', 'v3-turbo', 'v4-32k'
  await brainman.chat({ version: "v4", prompt: prompt }).then(response => {
    console.log(response);
  })
}

brainmanStart("hello");


// Imagine with Brainman
async function brainmanImagine(prompt) {
  // Enter the prompt for an image you want to create.
  await brainman.imagine(prompt).then(response => {
    console.log(response);
  })
}

brainmanImagine("A beautiful sunset over the ocean.");
```

## 🛠️ Support
- [Discord](https://discord.gg/9yYPF6BXt7)
- [GitHub](https://github.com/unoxdevs/brainman)
- [Telegram](https://t.me/unoxdevs)

## © Copyright
This project was created by [UnoxDevs](https://github.com/unoxdevs/brainman) and all source code rights are owned by [UnoxDevs](https://github.com/unoxdevs/brainman) and [Queaxtra](https://github.com/queaxtra).
