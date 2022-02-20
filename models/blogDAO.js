
const CosmosClient = require('azure/cosmos').CosmosClient;
const debug = require('debug')('ajnabee:blogDAO')

const partitionKey = undefined
class BlogDAO {
    
    constructor(CosmosClient, databaseId, containerId) {
        this.client = CosmosClient
        this.databaseId = databaseId
        this.collectionId = containerId

        this.database = null
        this.container = null
    }

    async init() {
        debug('Setting up the database...')
        const dbResponse = await this.client.databases.createIfNotExists({
            id: this.databaseId
        })
        this.database = dbResponse.database
        debug('Setting up the database... Done!')
        debug('Setting up the container...')
        const coResponse = await this.database.containers.createIfNotExists({
            id: this.collectionId
        })
        debug('Setting up the container... done!')
    }

    async find(querySpec) {
        if (!this.container) {
            throw new error('Collection is not initialized')
        }
        const { resources } = await this.container.items.query(querySpec).fetchAll()
        return resources
    }

    async addItem(item) {
        item.createdDate = Date.now()
        item.modifiedDate = Date.now()
        item.title = 'title 1'
        item.content = 'Some content for title 1'
        item.imageUrl = 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
        const {resource: doc} = await this.container.items.create(item)
        return doc
    }

    async updateItem(itemId) {
        const doc = await this.getItem(itemId)
        item.modifiedDate = Date.now()
        const {resource: replaced} = await this.container
            .item(itemId, partitionKey).replace(doc)
        return replaced
    }

    async getItem(itemId) {
        const { resource } = await this.container.item(itemId, partitionKey).read()
        return resource
    }
} 

module.exports = BlogDAO