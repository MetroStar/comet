import { IconType } from '../icon/icon';
import { Story, Meta } from '@storybook/react';
import IconTag, { IconTagType } from './icon-tag';
import Documentation from '../storybook-utils/documentation';

export default {
  component: IconTag,
  title: 'Components/Icon Tag',
} as Meta;

const title = 'Icon Tag';
const whenToUse =
  'An icon tag draws attention to new or categorized content elements.';

export const StandardIconTags: Story = () => {
  return (
    <>
      <IconTag
        id="icon-tag-1"
        icon={IconType.check_circle}
        type={IconTagType.Success}
        text="This is a success tag"
        className="margin-right-1"
      />
      <IconTag
        id="icon-tag-2"
        icon={IconType.warning}
        type={IconTagType.Warning}
        text="This is a warning tag"
        className="margin-right-1"
      />
      <IconTag
        id="icon-tag-3"
        icon={IconType.error}
        type={IconTagType.Error}
        text="This is an error tag"
      />
    </>
  );
};

StandardIconTags.decorators = [
  (Story: Story) => (
    <>
      <Documentation heading={title} body={whenToUse} />
      <Story />
    </>
  ),
];
