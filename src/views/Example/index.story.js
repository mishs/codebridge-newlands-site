import React from 'react';
import { storiesOf } from '@storybook/react';
import Example from './index';

const Basic = () => <Example />;

storiesOf('view.Example', module)
  .add('basic', Basic);