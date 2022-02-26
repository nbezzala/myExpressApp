const config = {};

config.host = process.env.host || '';
config.authKey = process.env.authKey || '';

config.databaseId = "AppDB"
config.containerId = "articles"

if (config.host.includes("https://localhost:")) {
    console.log("Local environment detected");
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
}

module.exports = config;
