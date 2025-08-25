// WpLoader.tsx
import React, { useEffect } from 'react';

import apiFetch from '@wordpress/api-fetch';
import * as blocks from '@wordpress/blocks';
import * as blockEditor from '@wordpress/block-editor';
import * as blockLibrary from '@wordpress/block-library';
import * as components from '@wordpress/components';
import * as compose from '@wordpress/compose';
import * as data from '@wordpress/data';
import * as editor from '@wordpress/editor';
import * as element from '@wordpress/element';
import * as hooks from '@wordpress/hooks';
import * as i18n from '@wordpress/i18n';
import * as icons from '@wordpress/icons';
import * as keyboardShortcuts from '@wordpress/keyboard-shortcuts';
import * as keycodes from '@wordpress/keycodes';
import * as plugins from '@wordpress/plugins';
import * as primitives from '@wordpress/primitives';
import * as richText from '@wordpress/rich-text';

const WpLoader: React.FC = ({ children }) => {

    console.log('WpLoader');

    useEffect(() => {
        console.log('WpLoader useEffect');
        const wp = {};

        wp.apiFetch = apiFetch;
        wp.blocks = blocks;
        wp.blockEditor = blockEditor;
        wp.blockLibrary = blockLibrary;
        wp.components = components;
        wp.compose = compose;
        wp.data = data;
        wp.editor = editor;
        wp.element = element;
        wp.hooks = hooks;
        wp.i18n = i18n;
        wp.icons = icons;
        wp.keyboardShortcuts = keyboardShortcuts;
        wp.keycodes = keycodes;
        wp.plugins = plugins;
        wp.primitives = primitives;
        wp.richText = richText;

        if (typeof window.wp === 'undefined') {
            window.wp = wp;
        }

        window.React = React;

        console.log('WP SET');
        console.log(window.wp);
    }, []);

    if (typeof window.wp === 'undefined') {
        return null;
    }

    return (
        <></>
        // <>{children}</>
    );
};

export default WpLoader;
