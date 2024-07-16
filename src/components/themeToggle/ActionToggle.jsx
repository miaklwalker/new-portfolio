import React from 'react'
import {rem, Switch, useMantineColorScheme, useMantineTheme} from '@mantine/core';
import {IconMoonStars, IconSun} from "@tabler/icons-react";

export function ActionToggle() {
    const theme = useMantineTheme();
    const colorTheme = useMantineColorScheme()
    const sunIcon = (
        <IconSun
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.yellow[4]}
        />
    );

    const moonIcon = (
        <IconMoonStars
            style={{ width: rem(16), height: rem(16) }}
            stroke={2.5}
            color={theme.colors.blue[6]}
        />
    );

    return (
        <Switch size="md" color="dark.4" checked={colorTheme.colorScheme === "light"}  onClick={colorTheme.toggleColorScheme} onLabel={sunIcon} offLabel={moonIcon} />
    );
}