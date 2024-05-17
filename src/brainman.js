const axios = require('axios');

module.exports = {
  chat: async (options) => {
    const response = await axios.post("https://ai.unoxdevs.fun/chat", {
      prompt: options.prompt,
      version: options.version,
      category: options.category
    });
    return response.data;
  },

  imagine: async (options) => {
    const response = await axios.post("https://ai.unoxdevs.fun/imagine", {
      prompt: options.prompt,
      version: options.version
    });
    return response.data;
  }
};
