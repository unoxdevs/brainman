const axios = require('axios');
const supportedVersions = ['v1', 'v2'];

module.exports = {
    chat: async (options) => {
        const { version, prompt } = options;

        if (!supportedVersions.includes(version)) {
            throw new Error(`Unsupported version: ${version}. Supported versions are: ${supportedVersions.join(', ')}`);
        }

        const url = `https://brainman.is-a-cool.dev/api/${version}/chat`;

        const response = await axios.post(url, {
            message: prompt
        });

        return response.data;
    },
};