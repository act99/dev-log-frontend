import { useState } from "react";

const TopButton = () => {
  const moveToTop = () => (document.documentElement.scrollTop = 0);
  const [scrollFlag, setScrollFlag] = useState(initialState);
};
