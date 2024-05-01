const fetch = require('cross-fetch');

module.exports = {
  chat: async (options) => {
    const response = await fetch(`https://brainman-web-1.onrender.com/chat/${options.prompt}/version/${options.version}`);
    const data = await response.json();
    return data;
  },

  imagine: async (propmt) => {
    const response = await fetch(`https://brainman-web-1.onrender.com/imagine/${propmt}`);
    const data = await response.json();
    return data;
  }
};
