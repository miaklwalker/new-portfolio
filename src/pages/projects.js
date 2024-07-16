import React from 'react';
import {graphql, useStaticQuery} from "gatsby";
import {ActionIcon, Button, Container, Flex, Group, Paper, SimpleGrid, Text, Title} from "@mantine/core";
import {GatsbyImage, getImage} from "gatsby-plugin-image";
import "../sass/pages/projects.scss";
import Babel from "../components/techIcons/BABEL";
import Css from "../components/techIcons/CSS";
import Gatsby from "../components/techIcons/Gatsby";
import Html from "../components/techIcons/HTML";
import JavaScript from "../components/techIcons/JavaScript";
import Jest from "../components/techIcons/JEST";
import NODE from "../components/techIcons/NODE";
import R from "../components/techIcons/R";
import REDUX from "../components/techIcons/REDUX";
import SASS from "../components/techIcons/SASS";
import Typescript from "../components/techIcons/TYPESCRIPT";
import Layout from "../components/layout";
import {
    IconBook, IconBookFilled,
    IconBrandGithub,
    IconBrandGithubFilled,
    IconPlayerPlay,
    IconPlayerPlayFilled
} from "@tabler/icons-react";

const Icons = {
    babel: Babel,
    css: Css,
    gatsby: Gatsby,
    html: Html,
    javascript: JavaScript,
    jest: Jest,
    node: NODE,
    r:R,
    redux: REDUX,
    sass: SASS,
    typescript: Typescript
}

const Projects = () => {
    const query = useStaticQuery(graphql`
    query ProjectsQuery {
      allContentfulProject {
        edges {
          node {
            name
            slug
            github
            images{
              gatsbyImageData(
                placeholder: BLURRED
                formats: [AUTO, WEBP]
              )
            }
            demo
            caption
            languages
            startDate
          }
        }
      }
    }
`);
    const edges = query.allContentfulProject.edges;

    return (
        <Layout>
            <Container>
                <Title ta={'center'} my={'xl'}>PROJECTS</Title>
                <SimpleGrid px={'1rem'} cols={{md:2}}>
                    {edges.map((edge, index) => {
                        const image = getImage(edge.node.images.gatsbyImageData);
                        return (
                            <Paper key={index} withBorder p={'2%'}>
                                <Group mt={'1rem'} mb={'1.3rem'} justify={'space-between'}>
                                    <Title order={3}> {edge.node.name} </Title>
                                    <Text fz={'xs'} c={'dimmed'}> {edge.node.startDate} </Text>
                                </Group>
                                <SimpleGrid mb={'2rem'} height={'center'} justify={'center'} cols={{md:2}}>
                                    <Text h={'100%'}> {edge.node.caption} </Text>
                                    <GatsbyImage style={{ aspectRatio: "3/2"}} image={image} alt={"this is alt"} />
                                </SimpleGrid>
                                <SimpleGrid cols={{sm:2}}>
                                    <Flex className={"language-container"} w={{ md:'100%' }} justify={'space-evenly'}>
                                        { edge.node.languages && edge.node.languages.map( (language, i) => {
                                            let Icon = Icons[language.toLowerCase()];
                                            if(!Icon) {
                                                return null;
                                            }
                                            return <Icon key={i} className={language.toLowerCase()} />
                                        })}
                                    </Flex>
                                    <Flex w={{ md:'100%' }} justify={'space-around'}>
                                        <ActionIcon variant="light" size={'lg'} component={'a'} href={edge.node.github} target="_blank" rel="noreferrer"> <IconBrandGithub/> </ActionIcon>
                                        <ActionIcon variant="light" size={'lg'} component={'a'} href={edge.node.demo} target="_blank" rel="noreferrer"> <IconPlayerPlay/> </ActionIcon>
                                        <ActionIcon variant="light" size={'lg'} component={'a'} href={`/projects/${edge.node.slug}`} > <IconBook/> </ActionIcon>
                                    </Flex>
                                </SimpleGrid>

                            </Paper>
                        )
                    })}
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Projects;