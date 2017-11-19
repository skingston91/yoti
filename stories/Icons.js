import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import Icon from '../src/components/Icons/index';
import '../src/components/Icons/styles.less';

const props = {
  name: 'sonic',
  image: 'https://pbs.twimg.com/profile_images/686613263811907584/Ni3AWru_.png',
  alt: 'SANICCC',
  route: '/test',
};

/* eslint new-cap: 0 */
storiesOf('Icon', module)
  .addDecorator(StoryRouter())
  .add('Standard', () => <Icon { ...props } />);
