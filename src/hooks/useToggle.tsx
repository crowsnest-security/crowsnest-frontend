import { useCallback, useState } from 'react';

export const useToggle = (defaultValue?: boolean) => {
  const [isOpen, setIsOpen] = useState(defaultValue || false);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return { isOpen, toggle };
};
