import React from "react";
import {graphql} from "gatsby";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Layout from "../layouts";
import {Container} from "@mantine/core";

function toJson(data) {
    return JSON.parse(data.raw);
}

function ContentArea({data}) {
    return <div>{documentToReactComponents(data)}</div>
}

export let query = graphql`
  query blogPosts ($slug:String) {
    allContentfulBlogPost(filter: { slug: { eq: $slug } }) {
      nodes{
        body{
            raw
        }
        createdAt
        title
        author
        slug
      }
    }
  }
  `;

const options = {

}

export default function Project({data}) {
    const node = data["allContentfulBlogPost"].nodes[0];

    const {title, author, createdAt, body} = node;
    console.log(body)
    console.log(renderRichText(body, options))
    return (
        <Layout>
            <Container>
                {renderRichText(body, options)}
            </Container>
        </Layout>
    )
}