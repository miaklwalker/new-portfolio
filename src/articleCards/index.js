import React from "react"
import { Card, Image, Avatar, Text, Group } from '@mantine/core';
import * as classes from './ArticleCardVertical.module.css';
import {GatsbyImage} from "gatsby-plugin-image";

export function ArticleCardVertical({node:{author, childrenContentfulBlogPostBodyTextNode, publishDate, thumbnail, title, topics, slug}}) {
    return (
        <Card component={'a'} href={`/blog/${slug}`} withBorder radius="md" p={0} className={classes.card}>
            <Group wrap="nowrap" gap={0}>
                <GatsbyImage
                    image={thumbnail.gatsbyImageData}
                    style={{
                        maxWidth: "50%",
                        maxHeight: "120px"
                    }}

                    alt={title}

                />
                <div className={classes.body}>
                    {/*<Text tt="uppercase" c="dimmed" fw={700} size="xs">*/}
                    {/*    technology*/}
                    {/*</Text>*/}
                    <Group>
                        <Text size="xs" c="dimmed">
                            {topics.join(", ")}
                        </Text>
                    </Group>
                    <Text className={classes.title} mt="xs" mb="md">
                        {title}
                    </Text>
                    <Group mb={'lg'} wrap="nowrap" gap="xs">
                        <Group gap="xs" wrap="nowrap">
                            <Text size="xs">{author}</Text>
                        </Group>
                        <Text size="xs" c="dimmed">
                            •
                        </Text>
                        <Text size="xs" c="dimmed">
                            {new Date(publishDate).toDateString()}
                        </Text>
                    </Group>
                </div>
            </Group>
        </Card>
    );
}