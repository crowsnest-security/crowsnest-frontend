import { FunctionComponent, SVGProps } from 'react';

export interface IMenuItem {
  route?: string;
  label: string;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}
