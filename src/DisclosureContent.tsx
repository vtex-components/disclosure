import React, { FC, ReactNode } from 'react';
import { useDisclosureContent } from 'reakit/Disclosure';

import { useDisclosure } from './DisclosureContext';
import { BoxHTMLProps } from 'reakit/ts';

export interface DisclosureContentProps {
  children: ReactNode;
  as?: any;
  htmlProps?: BoxHTMLProps;
}

const DisclosureContent: FC<DisclosureContentProps> = ({
  as = 'div',
  htmlProps,
  children,
}) => {
  const { state } = useDisclosure();
  const props = useDisclosureContent(state, htmlProps);

  if (!state) {
    return <></>;
  }

  const Component = as;

  return <Component {...props}>{children}</Component>;
};

export default DisclosureContent;
