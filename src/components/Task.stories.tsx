import type { Meta, StoryObj } from "@storybook/react";

import Task from "./Task";

const meta: Meta<typeof Task> = {
  component: Task,
  title: "Components/Task",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Test task",
      state: "TASK_INBOX",
    },
  },
};

export const Pinned: Story = {
  args: {
    ...(Default.args?.task && {
      task: {
        ...Default.args.task,
        state: "TASK_PINNED",
      },
    }),
  },
};

export const Archived: Story = {
  args: {
    ...(Default.args?.task && {
      task: {
        ...Default.args.task,
        state: "TASK_ARCHIVED",
      },
    }),
  },
};
