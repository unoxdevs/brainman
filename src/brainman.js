const axios = require('axios');

module.exports = {
  chat: async (options) => {
    const response = await axios.post("http://ai.unoxdevs.fun:3000/chat", {
      prompt: options.prompt,
      version: options.version,
      category: options.category
    });
    return response.data;
  },

  imagine: async (options) => {
    const response = await axios.post("http://ai.unoxdevs.fun:3000/imagine", {
      prompt: options.prompt,
      version: options.version
    });
    return response.data;
  }
};
