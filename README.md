# 🤖 Brainman
Brainman is a fast and simple to use AI & personal assistant.

## 📦 Install
```bash
npm install brainman
```

## 🎉 Updates
- Improved Response Speed: Optimized API for quicker and more precise responses.
- Advanced Error Handling: Enhanced error feedback for a smoother experience.
- New v2 Features: Expanded functionality in v2, requiring API key access.
- Performance Enhancements: Reduced latency and increased efficiency.
- Bug Fixes: Resolved various minor issues for better stability.

## 🚀 Start
### Using Brainman with v1 (No API Key Required)
Version v1 does not require an API key. This is ideal for simple, open-access usage.
```js
const { Brainman } = require("brainman");
const ai = new Brainman(); // No API key needed for v1

async function chat(prompt, version) {
    const response = await ai.chat({
        version: version,
        prompt: prompt,
    });

    console.log(response);
}

chat("What's your name?", "v1");
```

### Using Brainman with v2 (API Key Required)
Version v2 requires an API key and provides enhanced functionality and access to more advanced features.

**Note:** To obtain an API key for v2 access, please contact us through our [Discord server.](https://discord.gg/b9gS3r7XuJ)

```js
const { Brainman } = require("brainman");
const ai = new Brainman("YOUR_API_KEY"); // Replace with your API key   

async function chat(prompt, version) {
    const response = await ai.chat({
        version: version,
        prompt: prompt,
    });

    console.log(response);
}

chat("What's your name?", "v2");
```

## 🛠️ Support
- [Discord](https://discord.gg/b9gS3r7XuJ)
- [GitHub](https://github.com/unoxdevs/brainman)
- [Telegram](https://t.me/unoxdevs)

## © Copyright
This project was created by [UnoxDevs](https://github.com/unoxdevs/brainman) and all source code rights are owned by [UnoxDevs](https://github.com/unoxdevs)