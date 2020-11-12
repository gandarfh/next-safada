import { Meta, Story } from '@storybook/react/types-6-0'

import { Home } from './index'

export default {
  title: 'Home',
  component: Home,
} as Meta

export const Basic: Story = (args) => <Home {...args} />
