'use client';

import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

type MotionWrapperProps = Omit<HTMLMotionProps<'div'>, 'ref'> & {
    children: ReactNode;
    clear?: boolean;
};

export function MotionWrapper({ children, clear = false, ...rest }: MotionWrapperProps) {
    const motionProps = clear
        ? {}
        : {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              exit: { opacity: 0, y: -10 },
              transition: { duration: 0.25 },
          };

    return (
        <motion.div {...motionProps} {...rest}>
            {children}
        </motion.div>
    );
}
