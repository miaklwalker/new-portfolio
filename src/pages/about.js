import React, {Component} from "react"
import Layout from "../components/layout"
import {Center, Code, Text, Title} from "@mantine/core";


function About () {
    return (
        <Layout>
            <Title mb={'2rem'} ta={'center'}> About Me </Title>
                <Code color={'transparent'} block>
                    {`
                            <AboutMe>
                                <Description>
                                    I am a: 
                                     full stack web developer, 
                                     General purpose programmer,
                                     enthusiastic problem solver,
                                     Multi-Instrumental Musician.
                                     
                                    I have a passion for learning and a desire to help others.
                                    I have experience with a variety of programming languages and technologies.
                                    I am always looking for new challenges and opportunities to learn and grow.
                                </Description>
                                <Skills>
                                    <ProgrammingLanguages>
                                        * HTML 
                                        * CSS
                                        * JavaScript / Node.js
                                        * TypeScript
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
                                </Skills>
                            </AboutMe>
                        `}
                </Code>
        </Layout>
    )
}

export default About