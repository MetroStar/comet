import modal from '@uswds/uswds/js/usa-modal';

const useModal = () => {
  const toggleModal = (show: boolean): void => {
    modal.toggleModal.call(modal, show);
  };

  return { toggleModal };
};

export default useModal;
