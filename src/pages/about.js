import React, {Component} from "react"
import {Center, Code, Text, Title} from "@mantine/core";
import {CodeHighlight} from "@mantine/code-highlight";
import Layout from "../layouts";


function About () {
    const aboutMeText = `
    <AboutMe>
        <Description>
            I am a: 
             Full stack web developer for SIGMA Equipment, 
             General purpose programmer,
             Enthusiastic problem solver,
             Multi-instrumental musician.
             
            I have a passion for learning and a desire to help others.
            I have experience with a variety of programming languages and technologies.
            I am always looking for new challenges and opportunities to learn and grow.
        </Description>
        <Skills>
            <ProgrammingLanguages>
                * HTML 
                * CSS
                * JavaScript / Node.js / TypeScript / DENO / BUN 
                * Go
                * Python
                * Bash
            </ProgrammingLanguages>
            <Frameworks>
                * React
                * Gatsby
                * Next.js
                * Express
                * Fastify
                * GraphQL
                * GORM
                * Gin
            </Frameworks>
            <GeneralProgrammingSkills>
                * Git 
                * Bash
                * Postgres
                * MongoDB
                * Linux
                * Shell
                * REST
            </GeneralProgrammingSkills>
            <ThirdPartyServices>
                * Insightly
                * ShipStation
                * SkuVault
                * Pimberly
                * BigCommerce
                * ChannelAdvisor
                * SellerCloud
            </ThirdPartyServices>
            <Instruments>
                * Guitar
                * Bass
                * Drums
                * Piano
                * Mandolin
                * Ukulele
                * Banjo
                * Harmonica
                * Vocals
            </Instruments>
        </Skills>
    </AboutMe>
`
    return (
        <Layout>
            <Title mb={'2rem'} ta={'center'}> About Me </Title>
            <Center>
                <CodeHighlight
                    code={aboutMeText}
                    bg={'transparent'}
                    withCopyButton={false}

                />
            </Center>

                {/*<Code color={'transparent'} block> {aboutMeText} </Code>*/}
        </Layout>
    )
}

export default About