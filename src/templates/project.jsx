import React from "react";
import {graphql} from "gatsby";
import {documentToReactComponents} from "@contentful/rich-text-react-renderer"
import Layout from "../layouts";
import {Container, Divider, Grid, Title} from "@mantine/core";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

function toJson(data) {
    return JSON.parse(data.raw);
}

function ContentArea({data}) {
    return <div>{documentToReactComponents(data)}</div>
}

export let query = graphql`
  query Project ($slug:String) {
    allContentfulProject(filter: {slug: {eq: $slug }}) {
      nodes {
        name
        demo
        github
        aboutProject {
          raw
        }
        description{
            raw
        }
        interesting{
            raw
        }
        lessons{
            raw
        }
        interestingImage {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
        lessonImage {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
        aboutImage {
          gatsbyImageData(
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
        slug
      }
    }
  }`;
export default function Project({data}) {
    console.log(data.allContentfulProject.nodes[0])
    let {
        name,
        demo,
        github,
        aboutImage,
        lessonImage,
        interestingImage,
        aboutProject,
        description,
        interesting,
        lessons,
    } = data['allContentfulProject'].nodes[0];

    aboutProject = toJson(aboutProject);
    description = toJson(description);
    interesting = toJson(interesting);
    lessons = toJson(lessons);

    aboutImage = getImage(aboutImage.gatsbyImageData)
    lessonImage = getImage(lessonImage.gatsbyImageData)
    interestingImage = getImage(interestingImage.gatsbyImageData)


    console.log(aboutProject);
    console.log(description);
    console.log(interesting);
    console.log(lessons);

    return (
        <Layout>
            <Container>
                <Title my={'lg'}>{name}</Title>
                <ContentArea data={description}/>
                <Divider my={'lg'}/>
                <GatsbyImage image={aboutImage} alt={""}/>
                <ContentArea data={aboutProject}/>
                <Divider my={'lg'}/>
                <GatsbyImage image={interestingImage} alt={""}/>
                <ContentArea data={interesting}/>
                <Divider my={'lg'}/>
                <GatsbyImage image={lessonImage} alt={""}/>
                <ContentArea data={lessons}/>
            </Container>
        </Layout>
    )
}