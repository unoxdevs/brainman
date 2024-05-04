const axios = require('axios');

module.exports = {
  chat: async (options) => {
    const response = await axios.post("https://brainman.unoxdevs.fun/chat", {
      prompt: options.prompt,
      version: options.version
    });
    return response.data;
  },

  imagine: async (options) => {
    const response = await axios.post("https://brainman.unoxdevs.fun/imagine", {
      prompt: options.prompt,
      version: options.version
    });
    return response.data;
  }
};
