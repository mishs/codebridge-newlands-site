import React from 'react';
import { storiesOf } from '@storybook/react';
import App from './index';

const Basic = () => <App />;

storiesOf('view.ApTTp', module)
  .add('app', Basic);