import header from '@uswds/uswds/js/usa-header';

const useHeader = () => {
  const on = (element: HTMLElement): void => {
    header.on(element);
  };

  const off = (element: HTMLElement): void => {
    header.off(element);
  };

  return { on, off };
};

export default useHeader;
