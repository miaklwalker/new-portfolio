import React from 'react';
import {Button, Container, Group, Title, Text} from "@mantine/core";
import * as classes from "../sass/pages/NotFound.module.css";
import Layout from "../layouts";

const PageMissing = () => {
    return (
        <Layout>
            <Container className={classes.root}>
                <div className={classes.label}>404</div>
                <Title className={classes.title}>You have found a secret place.</Title>
                <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                    Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has
                    been moved to another URL.
                </Text>
                <Group justify="center">
                    <Button variant="subtle" size="md">
                        Take me back to home page
                    </Button>
                </Group>
            </Container>
        </Layout>

    );
};

export default PageMissing;