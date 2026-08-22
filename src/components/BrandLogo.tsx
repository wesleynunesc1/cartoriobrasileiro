import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'monogram' | 'compact';
  theme?: 'light' | 'dark' | 'gold';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * CB Monogram SVG Icon
 * Monograma entrelaçado C e B com máxima fidelidade vetorial à identidade oficial
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
        {/* Arco do C com terminais serifados clássicos */}
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

  const primaryColor = isDark
    ? '#FFFFFF'
    : isGold
    ? '#C6A166'
    : '#0D1B3D'; // Azul-marinho profundo

  const goldColor = isDark ? '#DFC89B' : '#C6A166'; // Dourado oficial

  // Escala de tamanhos balanceados
  const sizeConfig = {
    sm: { height: 'h-8', monoSize: 32, titleSize: 'text-base sm:text-lg', subSize: 'text-[8.5px] sm:text-[9px] tracking-[0.24em]' },
    md: { height: 'h-11', monoSize: 42, titleSize: 'text-xl sm:text-2xl', subSize: 'text-[10px] sm:text-[11px] tracking-[0.28em]' },
    lg: { height: 'h-14', monoSize: 54, titleSize: 'text-2xl sm:text-3xl', subSize: 'text-[12px] sm:text-[13px] tracking-[0.32em]' },
    xl: { height: 'h-20', monoSize: 76, titleSize: 'text-3xl sm:text-4xl', subSize: 'text-[14px] sm:text-[15px] tracking-[0.36em]' }
  };

  const currentSize = sizeConfig[size];

  if (variant === 'monogram') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <CBMonogram color={primaryColor} size={currentSize.monoSize} />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-3 select-none ${className}`}
      role="banner"
      aria-label="Cartório do Brasileiro - Assessoria Documental"
    >
      {/* Monograma CB à esquerda */}
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
        <CBMonogram color={primaryColor} size={currentSize.monoSize} />
      </div>

      {/* Linha vertical divisora dourada elegante */}
      <div
        className={`w-[1.5px] h-8 sm:h-10 flex-shrink-0 self-center ${
          isDark ? 'bg-[#DFC89B]/40' : 'bg-[#C6A166]/60'
        }`}
        aria-hidden="true"
      />

      {/* Wordmark oficial à direita */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-serif font-semibold tracking-tight ${currentSize.titleSize}`}
          style={{ color: primaryColor }}
        >
          Cartório do Brasileiro
        </span>
        <span
          className={`font-sans font-bold uppercase mt-1 ${currentSize.subSize}`}
          style={{ color: goldColor }}
        >
          Assessoria Documental
        </span>
      </div>
    </div>
  );
};
