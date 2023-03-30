import { useState } from "react";

type ToggleReturnType = [boolean, () => void];

const useToggle = (initialState = false): ToggleReturnType => {
  const [state, setState] = useState(initialState);
  const toggle = () => setState((state) => !state);

  return [state, toggle];
};

export default useToggle;
