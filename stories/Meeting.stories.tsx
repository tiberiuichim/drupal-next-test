import type { Meta, StoryObj } from "@storybook/react";

import { NodeMeeting } from "./../components/node--meeting";
import { meetingNode } from "./../__tests__/fixtures";

const meta: Meta<typeof NodeMeeting> = {
  title: "Content types/Meeting",
  component: NodeMeeting,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof NodeMeeting>;

export const Meeting: Story = {
  args: {
    node: meetingNode,
  },
};
