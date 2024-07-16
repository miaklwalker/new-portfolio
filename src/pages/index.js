import React from "react"
import Layout from "../components/layout";
import splash from "../images/splash.png";
import * as classes from '../sass/pages/index.module.scss';
import {
    Button,
    Container,
    Group,
    Image, Overlay,
    Stack,
    Text,
    Title,
    useMantineColorScheme,
    useMantineTheme
} from "@mantine/core";

const Index = () => {
    const theme = useMantineTheme();
    const {colorScheme} = useMantineColorScheme();
    const overlayBg = colorScheme === 'dark' ? theme.colors['dark'][9] + "88" : "rgba(255, 255, 255, 0.2)";
    const fontColor = colorScheme === 'dark' ? theme.white : theme.black;
    return (
        <Layout>
            <Container style={{position: "relative"}}>
                <Group h={"80vh"} className={classes.textContainer}>
                    <Stack p={'1rem'} style={{borderRadius: '5px'}} ta={"center"}>
                        <Title className={classes.heroText} fw={"800"} c={fontColor}> I MAKE </Title>
                        <Title className={classes.heroText} fw={"200"} c={theme.colors.blue[5]}> EASY-TO-USE </Title>
                        <Title className={classes.heroText} fw={"800"} c={fontColor}> WEBSITES </Title>
                        <Text mb={'3rem'} className={classes.subText} c={theme.colors['gray'][4]}> - Full Stack Web Developer - </Text>
                        <Button size={"lg"} bg={'red'}>Get Started</Button>
                    </Stack>
                    <Image className={classes.splash} src={splash} alt={'hero'}/>
                </Group>
            </Container>
            <Overlay bg={overlayBg} style={{zIndex:-1}}/>
        </Layout>
    );
};

export default Index;