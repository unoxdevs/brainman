const axios = require('axios');
const supportedVersions = ['v1', 'v2'];

class Brainman {
    constructor(apiKey) {
        if (apiKey && !apiKey.startsWith("br_")) {
            throw new Error("Invalid API key format. API key must start with 'br_'");
        }
        this.apiKey = apiKey;
    }

    async chat(options) {
        const { version, prompt } = options;

        if (!supportedVersions.includes(version)) {
            throw new Error(`Unsupported version: ${version}. Supported versions are: ${supportedVersions.join(', ')}`);
        }

        if (version === 'v2' && !this.apiKey) {
            throw new Error("API key is required for version 'v2'");
        }

        const url = `https://brainman.is-a-cool.dev/api/${version}/chat`;

        const payload = {
            message: prompt,
        };

        if (version === 'v2') {
            payload.apiKey = this.apiKey;
        }

        try {
            const response = await axios.post(url, payload, {
                headers: { 'Content-Type': 'application/json' },
                timeout: 5000,
            });

            return response.data;
        } catch (error) {
            if (error.response) {
                throw new Error(error.response.data.error);
            } else {
                throw new Error("Network error or timeout");
            }
        }
    }
}

module.exports = { Brainman };
