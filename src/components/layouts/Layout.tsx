import { ScriptProps } from 'next/script';
import React from 'react';
import NavigationBar from './NavigationBar';

interface Layout{
    children: ScriptProps
}

const Layout = (props: Layout) => {
    return (
        <>
            <NavigationBar>
            </NavigationBar>
            {props.children}
        </>
    )
}

export default Layout
