import React from "react"
import * as classes from '../../sass/MobileNavBar.module.scss';
import {
    AppShell,
    Burger, Button,
    Center,
    Container,
    Divider,
    Group,
    ScrollArea,
    Space,
    Text,
    Title,
    UnstyledButton
} from "@mantine/core";
import {
    useDisclosure,
    useElementSize,
    useHeadroom,
    useInViewport,
    useViewportSize,
    useWindowScroll
} from "@mantine/hooks";
import {ActionToggle} from "../themeToggle/ActionToggle";
import {Footer} from "../../../.cache/fast-refresh-overlay/components/overlay";
import {FooterSimple} from "./footer";
import {IconDownload} from "@tabler/icons-react";

const links = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Projects",
        href: "/projects"
    },

    {
        label: "Contact",
        href: "/contact"
    },
]


export default function Layout({children}) {
    const [scroll, scrollTo] = useWindowScroll();
    const [opened, {toggle}] = useDisclosure();
    const {ref, inViewport} = useInViewport();
    const pinned = useHeadroom({ fixedAt: 50 });

    // if the height of the layout is less than the height of the viewport, then we don't need to show the footer



    const linkList = links.map((link, index) => (
        <UnstyledButton key={index} component={'a'} className={classes.control} {...link} >{link.label} </UnstyledButton>))

    const navList = links.map((link, index) => (<React.Fragment key={index}>
        <UnstyledButton component={'a'} href={link.href} className={classes.control}>{link.label}</UnstyledButton>
        <Divider/>
    </React.Fragment>))
    const showFooter = !(scroll.y > 50 && inViewport);
    return (
        <AppShell
            header={{height: 60, collapsed: !pinned}}
            navbar={{width: 300, breakpoint: 'sm', collapsed: {desktop: true, mobile: !opened}}}
            footer={{height: 50, collapsed: showFooter}}
            padding="md"
        >
            <AppShell.Header>
                <Container h={'100%'}>
                    <Group h="100%" px="md">
                        <Group align={"center"} justify="space-between" style={{flex: 1}}>
                            <div>
                                <Title m={0} mb={-6} order={4}>Michael</Title>
                                <Title m={0} mb={-6} order={4}>Walker</Title>
                            </div>
                            <Group ml="xl" gap={0} visibleFrom="sm">
                                {linkList}
                                <ActionToggle/>
                                <Button mx={'1rem'} size={'sm'} rightSection={<IconDownload size={'1rem'}/>}  component={'a'} href="/CV.docx" download> Resume </Button>
                            </Group>
                            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
                        </Group>
                    </Group>
                </Container>

            </AppShell.Header>
            <AppShell.Navbar py="md" px={4}>
                <AppShell.Section>
                    <Title pl={'2rem'} order={3}>
                        Links
                    </Title>
                </AppShell.Section>
                <Divider/>
                <AppShell.Section grow my={'md'} component={ScrollArea}>
                    {navList}
                </AppShell.Section>
                <Divider/>
                <AppShell.Section mb={'3rem'} pl={'2rem'}>
                    <Title order={3}>Controls</Title>
                </AppShell.Section>
                <Center>
                    <ActionToggle/>
                </Center>
            </AppShell.Navbar>
            <AppShell.Main className={`layout-wrapper`}>
                {children}
                <Text ref={ref} opacity={"0"}>
                    bottom
                </Text>
            </AppShell.Main>
            <AppShell.Footer>
                <FooterSimple show={inViewport}/>
            </AppShell.Footer>
        </AppShell>
    )
}