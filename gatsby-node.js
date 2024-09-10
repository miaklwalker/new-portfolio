/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const React = require("react");
require("dotenv").config({
    path: `.env`,
});
const pathsToIgnore = ['/layoutTestPage/'];
exports.onCreatePage = ({page,actions:{deletePage}})=>{
    if(process.env.NODE_ENV !== 'production') return;
    if(pathsToIgnore.includes(page.path)){
        deletePage(page);
    }
}
exports.createPages = async ({actions:{createPage},graphql}) => {
    const query = await graphql(`
  query makePages {
      allContentfulBlogPost {
        nodes {
          slug
        }
      }
      allContentfulProject {
        nodes {
          slug
        }
      }
    }`);

    const {allContentfulBlogPost,allContentfulProject} = query.data;
    allContentfulBlogPost.nodes.forEach(({slug})=>{
        createPage({
            path:`blog/${slug}`,
            component:require.resolve("./src/templates/blogPost.jsx"),
            context:{
                slug:slug
            }
        })
    })

    allContentfulProject.nodes.forEach(({slug})=>{
        createPage({
            path:`projects/${slug}`,
            component:require.resolve("./src/templates/project.jsx"),
            context:{
                slug:slug
            }
        })
    })
}





