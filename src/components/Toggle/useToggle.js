import { useState } from "react";

export default function useToggle(defaultValue) {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value) {
    setValue((curVal) => (typeof value === "boolean" ? value : !curVal));
  }

  return [value, toggleValue];
}
