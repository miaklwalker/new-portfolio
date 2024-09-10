import React from "react"
import "@mantine/core/styles.css";
import '@mantine/code-highlight/styles.css';

import { MantineProvider } from '@mantine/core';
import { theme } from './src/theme';

export const wrapPageElement = ({ element }) => {
    return <MantineProvider theme={theme}>{element}</MantineProvider>;
};