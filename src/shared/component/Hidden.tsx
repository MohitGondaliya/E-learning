import React from 'react';
import { useHidden, type Breakpoint } from '../hooks/useHidden';

interface HiddenProps {
    up?: Breakpoint;
    down?: Breakpoint;
    children: React.ReactNode;
}

const Hidden: React.FC<HiddenProps> = ({ up, down, children }) => {
    const isHidden = useHidden({ up, down });

    return isHidden ? null : <>{children}</>;
};

export default Hidden;