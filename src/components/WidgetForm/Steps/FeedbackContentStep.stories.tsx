import { Meta, StoryObj } from '@storybook/react';
import { FeedbackContenStepProps, FeedbackContentStep } from './FeedbackContentStep';
import { Popover } from '@headlessui/react';
import { feedbackTypes } from '../index';
import { rest } from 'msw';

export default {
  title: 'Widget UI/FeedbackContentStep',
  component: FeedbackContentStep,
  args: {
    feedbackType: 'IDEA',
  },
  parameters: {
    msw: {
      handlers: [
        rest.post('feedbacks', (req, res) => res())
      ]
    }
  },
  argTypes: {
    feedbackType: {
      options: Object.keys(feedbackTypes),
      control: {
        type: 'inline-radio'
      }
    },
  },
  decorators: [
    (Story) => (
      <Popover>
        <Popover.Panel static>
          <div className="bg-zinc-900 relative p-4 raunded-lg flex flex-col items-center w-96">
            { Story() }
          </div>
        </Popover.Panel>
      </Popover>
    ),
  ],
} as Meta<FeedbackContenStepProps>;

export const Bug: StoryObj<FeedbackContenStepProps> = {
  args: {
    feedbackType: 'BUG',
  },
};

export const Idea: StoryObj<FeedbackContenStepProps> = {
  args: {
    feedbackType: 'IDEA',
  },
};

export const Other: StoryObj<FeedbackContenStepProps> = {
  args: {
    feedbackType: 'OTHER',
  },
};
