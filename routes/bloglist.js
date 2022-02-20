const BlogDAO = require("../models/blogDAO")

class BlogList {
    constructor(blogDAO) {
        this.blogDAO = blogDAO
    }

    async showBlogs(req, res) {
        const querySpec = {
            query: "SELECT * FROM root r"
        };
        const items = await this.blogDAO.find(querySpec)
        res.render("index", {
            title: "Blogs List",
            blogs: items
        } );

    }
}

module.exports = BlogList