import React, { FC, ReactNode } from 'react';
import { Disclosure, DisclosureHTMLProps } from 'reakit/Disclosure';

import { useDisclosure } from './DisclosureContext';

export interface DisclosureTriggerProps {
  show?: ReactNode;
  hide?: ReactNode;
  as?: any;
  htmlProps?: DisclosureHTMLProps;
  children?: ReactNode;
}

const DisclosureTrigger: FC<DisclosureTriggerProps> = ({
  as,
  htmlProps,
  show,
  hide,
  children,
}) => {
  const { state } = useDisclosure();

  if (!state) {
    return null;
  }

  return (
    <Disclosure as={as} {...htmlProps} {...state}>
      {children ?? (state.visible ? hide : show)}
    </Disclosure>
  );
};

export default DisclosureTrigger;
