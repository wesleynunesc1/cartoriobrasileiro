import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'monogram' | 'compact';
  theme?: 'light' | 'dark' | 'gold';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

/**
 * CB Monogram SVG Icon
 * Recria o monograma entrelaçado C e B com máxima fidelidade vetorial
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
      {/* Elegante Monograma C e B entrelaçados */}
      <g fill={color || 'currentColor'}>
        {/* Arco do C */}
        <path
          d="M 52 14 C 28 14 12 30 12 51 C 12 72 27 88 51 88 C 61 88 68 84 74 78 L 71 73 C 65 78 59 82 50 82 C 32 82 20 69 20 51 C 20 33 32 20 50 20 C 58 20 64 23 70 27 L 73 22 C 67 17 60 14 52 14 Z"
        />
        {/* Letra B entrelaçada */}
        <path
          d="M 44 26 L 44 84 L 52 84 C 69 84 81 76 81 64 C 81 55 74 49 66 47 C 72 45 78 40 78 33 C 78 26 71 26 59 26 L 44 26 Z M 51 31 L 58 31 C 66 31 71 33 71 39 C 71 45 66 48 57 48 L 51 48 L 51 31 Z M 51 53 L 60 53 C 68 53 74 57 74 64 C 74 72 67 79 57 79 L 51 79 L 51 53 Z"
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
  // Configuração de cores por tema
  const isDark = theme === 'dark';
  const isGold = theme === 'gold';

  const primaryColor = isDark
    ? '#FFFFFF'
    : isGold
    ? '#C6A166'
    : '#0D1B3D'; // Azul-marinho profundo

  const goldColor = '#C6A166'; // Dourado champagne oficial

  // Escala de tamanhos
  const sizeConfig = {
    sm: { height: 'h-8', monoSize: 32, titleSize: 'text-lg', subSize: 'text-[9px] tracking-[0.24em]' },
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
        className="w-[1px] h-8 sm:h-10 bg-[#C6A166]/50 flex-shrink-0 self-center"
        aria-hidden="true"
      />

      {/* Wordmark oficial à direita */}
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-serif font-medium tracking-tight ${currentSize.titleSize}`}
          style={{ color: primaryColor }}
        >
          Cartório do Brasileiro
        </span>
        <span
          className={`font-sans font-semibold uppercase mt-1 ${currentSize.subSize}`}
          style={{ color: goldColor }}
        >
          Assessoria Documental
        </span>
      </div>
    </div>
  );
};
