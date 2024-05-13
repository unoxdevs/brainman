const axios = require('axios');

module.exports = {
  chat: async (options) => {
    const response = await axios.post("https://brainman.only-fans.club/chat", {
      prompt: options.prompt,
      version: options.version
    });
    return response.data;
  },

  imagine: async (options) => {
    const response = await axios.post("https://brainman.only-fans.club/imagine", {
      prompt: options.prompt,
      version: options.version
    });
    return response.data;
  }
};
