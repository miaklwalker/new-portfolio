import React, {useEffect} from "react"
import Layout from "../layouts";
import splash from "../images/splash.png";
import * as classes from '../sass/pages/index.module.scss';
import {
    Button,
    Container, createTheme,
    Group,
    Image, MantineProvider, Overlay,
    Stack,
    Text,
    Title,
    useMantineColorScheme,
    useMantineTheme
} from "@mantine/core";

class option {
    constructor(ajective, noun) {
        this.adjective = ajective;
        this.noun = noun;
    }
}

const options = [
    new option("EASY-TO-USE", "WEBSITES"),
    new option("USER-FRIENDLY", "EXPERIENCES"),
    new option("INNOVATIVE", "SOLUTIONS"),
    new option("DIGITAL MAGIC", "HAPPEN"),
]


const Index = () => {
    const theme = useMantineTheme();
    const {colorScheme} = useMantineColorScheme();
    const overlayBg = colorScheme === 'dark' ? theme.colors['dark'][9] + "88" : "rgba(255, 255, 255, 0.2)";
    const fontColor = colorScheme === 'dark' ? theme.white : theme.black;
    const intervalRef = React.useRef(null);
    const [option, setOption] = React.useState(options[Math.floor(Math.random() * options.length)]);

    useEffect(() => {
        setInterval(() => {
            setOption(options[Math.floor(Math.random() * options.length)]);
        }, 5000);
        return () => clearInterval(intervalRef.current);
    }, []);


    return (

        <Layout>
            <Container style={{position: "relative"}}>
                <Group h={"80vh"} className={classes.textContainer}>
                    <Stack p={'1rem'} style={{borderRadius: '5px'}} ta={"center"}>
                        <Title className={classes.heroText} fw={"800"} c={fontColor}> I MAKE </Title>
                        <Title className={classes.heroText} fw={"200"}
                               c={theme.colors.blue[5]}> {option.adjective} </Title>
                        <Title className={classes.heroText} fw={"800"} c={fontColor}> {option.noun} </Title>
                        <Text mb={'3rem'} className={classes.subText} c={theme.colors['gray'][6]}> Full Stack Web
                            Developer </Text>
                        <Button size={"lg"} bg={'red'}>Get Started</Button>
                    </Stack>
                    <Image className={classes.splash} src={splash} alt={'hero'}/>
                </Group>
            </Container>
            <Overlay bg={overlayBg} style={{zIndex: -1}}/>
        </Layout>


    );
};

export default Index;