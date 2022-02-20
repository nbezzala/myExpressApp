const config = {};

config.host = process.env.host || 'https://ajnabee-db.documents.azure.com:443/'
config.authKey = process.env.authKey || 'gyDFSXodPHrR1JvSKu8sREUxt3vxBdZmOacMAuMVgzdNmJwskQLDU45SPOOMpliTGlHq15ldxPjmKzUAbRF5NA=='

config.databaseId = "AppDB"
config.containerId = "articles"

if (config.host.includes("https://localhost:")) {
    console.log("Local environment detected");
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
}

module.exports = config;
