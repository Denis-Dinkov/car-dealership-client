import { type CSSProperties, Suspense, useRef } from 'react';

import { cn } from '@/utils/helpers';

import Navbar from '../Navbar';
import { Outlet } from 'react-router-dom';

interface ILayoutBasic {
  classNames?: string;
  hasFooter: boolean;
}

export const LayoutBasic = (props: ILayoutBasic) => {
  const { classNames, hasFooter } = props;

  const refScrollArea = useRef<HTMLDivElement>(null);

  return (
    <Suspense>
      <div className="grid max-h-screen min-h-screen grid-rows-layout overflow-hidden">
        <Navbar />
        <div ref={refScrollArea} className={cn('', classNames)}>
          <Outlet />
        </div>
        {/* {hasFooter && <Footer />} */}
      </div>
    </Suspense>
  );
};

LayoutBasic.displayName = 'LayoutBasic';
