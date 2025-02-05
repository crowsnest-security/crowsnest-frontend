import { useState } from 'react';

export const useMenu = () => {
  const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorElement);

  return { anchorElement, setAnchorElement, isOpen };
};
