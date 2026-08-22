import React from 'react';
import * as LucideIcons from 'lucide-react';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number | string;
  strokeWidth?: number;
}

export const DynamicIcon: React.FC<DynamicIconProps> = ({
  name,
  className = 'w-6 h-6',
  size,
  strokeWidth = 1.6
}) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (LucideIcons as any)[name] || LucideIcons.FileText;

  return <IconComponent className={className} size={size} strokeWidth={strokeWidth} />;
};
