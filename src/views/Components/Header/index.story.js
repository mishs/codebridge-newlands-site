import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './index';

const HeaderComponent = () => <Header />;

storiesOf('view.Components.Header', module)
  .add('header', HeaderComponent);