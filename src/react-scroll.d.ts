declare module 'react-scroll' {
  import { Component } from 'react';

  export interface LinkProps {
    to: string;
    spy?: boolean;
    smooth?: boolean | string;
    offset?: number;
    duration?: number;
    delay?: number;
    isDynamic?: boolean;
    onSetActive?: (to: string) => void;
    onSetInactive?: (to: string) => void;
    ignoreCancelEvents?: boolean;
    hashSpy?: boolean;
    spyThrottle?: number;
    className?: string;
    activeClass?: string;
    activeStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export class Link extends Component<LinkProps> {}

  export interface ElementProps {
    name: string;
    id?: string;
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    [key: string]: any;
  }

  export class Element extends Component<ElementProps> {}

  export interface Events {
    scrollEvent: {
      register: (name: string, callback: () => void) => void;
      remove: (name: string) => void;
    };
  }

  export const Events: Events;

  export interface scroller {
    scrollTo: (
      to: string,
      options?: {
        duration?: number;
        delay?: number;
        smooth?: boolean | string;
        containerId?: string;
        offset?: number;
      }
    ) => void;
  }

  export const scroller: scroller;

  export interface animateScroll {
    scrollToTop: (options?: { duration?: number; smooth?: boolean | string }) => void;
    scrollToBottom: (options?: { duration?: number; smooth?: boolean | string }) => void;
    scrollTo: (position: number, options?: { duration?: number; smooth?: boolean | string }) => void;
    scrollMore: (deltaY: number, options?: { duration?: number; smooth?: boolean | string }) => void;
  }

  export const animateScroll: animateScroll;
}
