import React from 'react';
import {Avatar, Card, Container, Group, Title, Text, SimpleGrid} from "@mantine/core";
import {graphql, useStaticQuery} from "gatsby";
import Layout from "../../layouts";
import {ArticleCardVertical} from "../../articleCards";


const Blogs = () => {
    const query = useStaticQuery(graphql`
    query BlogQuery {
        allContentfulBlogPost {
          nodes {
            author
            publishDate
            slug
            topics
            title
            thumbnail {
                gatsbyImageData(
                width: 200
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
                )
            }
          }
        }
    }
`);
    console.log(query.allContentfulBlogPost.nodes)
    return (
        <Layout>
            <Container size={'responsive'}>
                <Title mb={'xl'} ta={'center'}>Blog Posts</Title>
                <SimpleGrid cols={{md: 2, base: 1}}>
                    {query.allContentfulBlogPost.nodes.map((node, i) => <ArticleCardVertical key={i} node={node}/>)}
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Blogs;