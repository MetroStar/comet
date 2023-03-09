import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Icon, IconProps } from './icon';

const meta: ComponentMeta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    id: { required: true },
    type: { control: "select", required: true },
    size: { control: "select", required: true },
  }
};
export default meta;

const Template: ComponentStory<typeof Icon> = (args: IconProps) => (
  <Icon {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: "icon-1",
  type: "accessibility_new",
  size: "size-3",
};

// export const Types: Story = () => {
//   const icons: string[] = [];
//   for (const icon in IconProps.type) {
//     icons.push(icon);
//   }

//   return (
//     <div className="grid-container">
//       <div className="grid-row">
//         {icons.map((icon: string, index: number) => (
//           <div
//             key={`row${index}`}
//             className="grid-col-1 padding-2"
//             title={icon as IconType}
//           >
//             <Icon id={`icon${index}`} type={icon as IconType} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// Types.decorators = [
//   (Story: Story) => (
//     <>
//       <p>
//         <i>Note: mouse over each icon to see its type.</i>
//       </p>
//       <Story />
//     </>
//   ),
// ];

// export const Sizes: Story = () => {
//   return (
//     <>
//       <Icon
//         id="icon1"
//         type={IconType.accessibility_new}
//         size={IconSize.size3}
//       />
//       <Icon
//         id="icon2"
//         type={IconType.accessibility_new}
//         size={IconSize.size4}
//       />
//       <Icon
//         id="icon3"
//         type={IconType.accessibility_new}
//         size={IconSize.size5}
//       />
//       <Icon
//         id="icon4"
//         type={IconType.accessibility_new}
//         size={IconSize.size6}
//       />
//       <Icon
//         id="icon5"
//         type={IconType.accessibility_new}
//         size={IconSize.size7}
//       />
//       <Icon
//         id="icon6"
//         type={IconType.accessibility_new}
//         size={IconSize.size8}
//       />
//       <Icon
//         id="icon7"
//         type={IconType.accessibility_new}
//         size={IconSize.size9}
//       />
//     </>
//   );
// };

// Sizes.decorators = [
//   (Story: Story) => (
//     <>
//       <Documentation heading={title} body={whenToUse} />
//       <Story />
//     </>
//   ),
// ];

// export const WithColor: Story = () => {
//   return (
//     <>
//       <Icon
//         id="icon1"
//         type={IconType.accessibility_new}
//         size={IconSize.size9}
//       />
//       <Icon
//         id="icon2"
//         type={IconType.accessibility_new}
//         size={IconSize.size9}
//         className="text-primary"
//       />
//       <Icon
//         id="icon3"
//         type={IconType.accessibility_new}
//         size={IconSize.size9}
//         className="text-secondary"
//       />
//     </>
//   );
// };

// WithColor.decorators = [
//   (Story: Story) => (
//     <>
//       <Documentation heading={title} body={whenToUse} />
//       <Story />
//     </>
//   ),
// ];
