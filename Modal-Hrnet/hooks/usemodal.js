import { useState } from "react";

/*State to dispatch on the parent's modal component */
const { isShowing, toggle } = useModal();

/*Function which toggle the modal */
const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle
  };
};

export default useModal;