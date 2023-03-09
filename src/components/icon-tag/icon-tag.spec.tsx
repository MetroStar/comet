import { IconType } from '../icon/icon';
import { render } from '@testing-library/react';
import IconTag, { IconTagType } from './icon-tag';

describe('IconTag', () => {
  it('should render success icon tag successfully', () => {
    const { baseElement } = render(
      <IconTag
        id="unit-test"
        icon={IconType.check_circle}
        type={IconTagType.Success}
        text="UNIT TEST"
      />
    );

    expect(baseElement).toBeTruthy();
  });

  it('should render warning icon tag successfully', () => {
    const { baseElement } = render(
      <IconTag
        id="unit-test"
        icon={IconType.warning}
        type={IconTagType.Warning}
        text="UNIT TEST"
      />
    );

    expect(baseElement).toBeTruthy();
  });

  it('should render error icon tag successfully', () => {
    const { baseElement } = render(
      <IconTag
        id="unit-test"
        icon={IconType.error}
        type={IconTagType.Error}
        text="UNIT TEST"
      />
    );

    expect(baseElement).toBeTruthy();
  });
});
