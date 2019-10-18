import { defaultTheme, FontSizes, FontWeights } from '@medly-components/theme';
import { boolean, color, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Label } from './Label';

const sizeOptions: FontSizes[] = ['S1', 'M1', 'M2', 'M3', 'L1', 'L2', 'L3', 'L4'];
const weightOptions: FontWeights[] = ['Light', 'Normal', 'Strong'];
const defaultColor = defaultTheme.font.defaultColor;

storiesOf('Core', module).add('Label', () => (
    <Label
        showPointer={boolean('Show Pointer', false)}
        required={boolean('Show Required asterisk', false)}
        labelColor={color('Color', defaultColor)}
        labelSize={select('Label Size', sizeOptions, 'L1')}
        labelWeight={select('Label Weight', weightOptions, 'Normal')}
    >
        Top 5
    </Label>
));
