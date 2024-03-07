import type { Meta, StoryObj } from "@storybook/react";

import * as TaskStories from "./Task.stories";
import TaskList from "./TaskList";

const meta: Meta<typeof TaskList> = {
  component: TaskList,
  title: "Components/TaskList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tasks: [
      { ...TaskStories.Default.args?.task, task: { id: "1", title: "Task 1" } },
      { ...TaskStories.Default.args?.task, task: { id: "2", title: "Task 2" } },
      { ...TaskStories.Default.args?.task, task: { id: "3", title: "Task 3" } },
      { ...TaskStories.Default.args?.task, task: { id: "4", title: "Task 4" } },
      { ...TaskStories.Default.args?.task, task: { id: "5", title: "Task 5" } },
      { ...TaskStories.Default.args?.task, task: { id: "6", title: "Task 6" } },
    ],
  },
};

export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      ...(Default.args?.tasks ?? []),
      { task: { id: "6", title: "Task 6 (pinned)", state: "TASK_PINNED" } },
    ],
  },
};

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
