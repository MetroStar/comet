const useFileInput = () => {
  const clear = (elemId: string): void => {
    const elem = document.getElementById(elemId) as HTMLInputElement;
    if (elem === null) {
      return;
    }

    // Get the Parent element based on USWDS file input HTML structure
    const parent = elem.parentElement as HTMLFormElement;
    if (parent === null) {
      return;
    }

    // Get Preview Elements and remove them
    const previewElement = parent.querySelectorAll(
      '.usa-file-input__preview',
    ) as NodeListOf<HTMLElement>;
    previewElement.forEach((element) => element.remove());

    // Get Preview Heading Elements and remove them
    const previewHeadingElement = parent.querySelectorAll(
      '.usa-file-input__preview-heading',
    ) as NodeListOf<HTMLElement>;
    previewHeadingElement.forEach((element) => element.remove());

    // Get the sr-only Element and reset
    const srOnlyElement = parent.querySelector('.usa-sr-only') as HTMLElement;
    if (srOnlyElement) {
      srOnlyElement.innerHTML = 'No file selected.';
    }

    // Get the instructions and reset
    const instructions = parent.querySelector('.usa-file-input__instructions') as HTMLElement;
    if (instructions) {
      instructions.removeAttribute('hidden');
    }

    // Reset input element values
    elem.setAttribute('aria-label', '');
    elem.value = '';
  };

  return { clear };
};

export default useFileInput;
