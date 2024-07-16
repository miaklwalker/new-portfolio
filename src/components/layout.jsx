import React from "react"
import * as classes from '../sass/MobileNavBar.module.scss';
import {AppShell, Burger, Center, Container, Divider, Group, ScrollArea, Title, UnstyledButton} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {ActionToggle} from "./themeToggle/ActionToggle";

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
        label: "Blog",
        href: "/blog"
    },
    {
        label: "Contact",
        href: "/contact"
    }
]


export default function Layout({children}) {
    const [opened, {toggle}] = useDisclosure();
    const linkList = links.map((link, index) => (
        <UnstyledButton key={index} component={'a'} className={classes.control} href={link.href}>{link.label} </UnstyledButton>))
    const navList = links.map((link, index) => (<React.Fragment key={index}>
        <UnstyledButton component={'a'} href={link.href} className={classes.control}>{link.label}</UnstyledButton>
        <Divider/>
    </React.Fragment>))
    return (
        <AppShell
            header={{height: 60}}
            navbar={{width: 300, breakpoint: 'sm', collapsed: {desktop: true, mobile: !opened}}}
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
                            </Group>
                            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
                        </Group>
                    </Group>
                </Container>

            </AppShell.Header>
            <AppShell.Navbar py="md" px={4}>
                <AppShell.Section><Title pl={'2rem'} order={3}> Links </Title></AppShell.Section>
                <Divider/>
                <AppShell.Section grow my={'md'} component={ScrollArea}>
                    {navList}
                </AppShell.Section>
                <Divider/>
                <AppShell.Section mb={'3rem'} pl={'2rem'}> <Title order={3}>Controls</Title></AppShell.Section>
                <Center>
                    <ActionToggle/>

                </Center>


            </AppShell.Navbar>
            <AppShell.Main className={`layout-wrapper`}>
                {children}
            </AppShell.Main>

        </AppShell>
    )
}