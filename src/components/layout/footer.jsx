import {Container, Group, Anchor, Title, Button, Affix, Transition, rem} from '@mantine/core';

import * as classes from './FooterSimple.module.css';
import React from "react";
import {useWindowScroll} from "@mantine/hooks";
import {IconArrowUp} from "@tabler/icons-react";

const links = [
    {link: '#', label: 'Contact'},
    {link: '#', label: 'Privacy'},
    {link: '#', label: 'Blog'},
    {link: '#', label: 'Careers'},
];

export function FooterSimple({show}) {

    const [scroll, scrollTo] = useWindowScroll();


    const items = links.map((link) => (
        <Anchor
            c="dimmed"
            key={link.label}
            href={link.link}
            onClick={(event) => event.preventDefault()}
            size="sm"
        >
            {link.label}
        </Anchor>
    ));
    if (show === undefined) {
        show = scroll.y > 50;
    }else{
        show = (show && scroll.y > 50);
    }
    console.log(show)
    return (
        <Container>
            <Group justify={'space-between'}>
                <Group>
                    <div>
                        <Title m={'.75rem'}  order={4}>Michael Walker</Title>
                    </div>
                    <Group className={classes.links}>{items}</Group>
                </Group>
                <Affix position={{ bottom: 35, right: 20 }}>
                    <Transition transition="slide-up" mounted={show}>
                        {(transitionStyles) => (
                            <Button
                                leftSection={<IconArrowUp style={{ width: rem(16), height: rem(16) }} />}
                                style={transitionStyles}
                                onClick={() => scrollTo({ y: 0 })}
                            >
                                Scroll to top
                            </Button>
                        )}
                    </Transition>
                </Affix>
            </Group>


        </Container>
    );
}