import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'monogram' | 'compact';
  theme?: 'light' | 'dark' | 'gold';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * CB Monogram SVG Icon
 * Monograma entrelaçado C e B oficial
 */
export const CBMonogram: React.FC<{
  className?: string;
  color?: string;
  size?: number | string;
}> = ({ className = 'w-10 h-10', color, size }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      style={{ width: size, height: size }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Monograma CB - Cartório do Brasileiro"
    >
      <g fill={color || 'currentColor'}>
        {/* Arco do C com terminação clássica */}
        <path
          d="M 52 10 C 26 10 10 28 10 52 C 10 76 26 92 52 92 C 64 92 73 87 79 79 L 74 74 C 69 80 61 84 52 84 C 32 84 20 70 20 52 C 20 34 32 18 52 18 C 61 18 69 22 74 28 L 79 23 C 73 15 64 10 52 10 Z"
        />
        {/* Letra B entrelaçada */}
        <path
          d="M 44 20 L 44 84 L 54 84 C 71 84 82 76 82 63 C 82 54 75 48 66 46 C 73 44 79 39 79 32 C 79 24 72 20 59 20 L 44 20 Z M 52 27 L 59 27 C 67 27 72 29 72 35 C 72 41 67 44 58 44 L 52 44 L 52 27 Z M 52 50 L 61 50 C 70 50 75 54 75 62 C 75 70 68 77 58 77 L 52 77 L 52 50 Z"
        />
      </g>
    </svg>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  theme = 'light',
  className = '',
  size = 'md',
}) => {
  const isDark = theme === 'dark';
  const isGold = theme === 'gold';

  // Escala de tamanhos para a imagem da logo
  const sizeConfig = {
    sm: { imgClass: 'h-8 sm:h-9 w-auto', monoSize: 32 },
    md: { imgClass: 'h-10 sm:h-12 w-auto', monoSize: 44 },
    lg: { imgClass: 'h-14 sm:h-16 w-auto', monoSize: 56 },
    xl: { imgClass: 'h-20 sm:h-24 w-auto', monoSize: 80 }
  };

  const currentSize = sizeConfig[size];

  if (variant === 'monogram') {
    const monoColor = isDark ? '#FFFFFF' : isGold ? '#C6A166' : '#0D1B3D';
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <CBMonogram color={monoColor} size={currentSize.monoSize} />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center select-none ${className}`}
      role="banner"
      aria-label="Cartório do Brasileiro - Assessoria Documental"
    >
      <img
        src="/logo.png"
        alt="Cartório do Brasileiro - Assessoria Documental"
        className={`${currentSize.imgClass} object-contain transition-transform duration-300 group-hover:scale-[1.02] ${
          isDark
            ? 'brightness-0 invert opacity-95 hover:opacity-100'
            : isGold
            ? 'sepia hue-rotate-15'
            : ''
        }`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
