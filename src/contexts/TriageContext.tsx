import React, { createContext, useContext, useState, ReactNode } from 'react';

interface TriageContextType {
  isOpen: boolean;
  preset: string | undefined;
  openTriage: (preset?: string) => void;
  closeTriage: () => void;
}

const TriageContext = createContext<TriageContextType | undefined>(undefined);

export function TriageProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preset, setPreset] = useState<string | undefined>(undefined);

  const openTriage = (newPreset?: string) => {
    setPreset(newPreset);
    setIsOpen(true);
  };

  const closeTriage = () => {
    setIsOpen(false);
    setPreset(undefined);
  };

  return (
    <TriageContext.Provider value={{ isOpen, preset, openTriage, closeTriage }}>
      {children}
    </TriageContext.Provider>
  );
}

export function useTriage() {
  const context = useContext(TriageContext);
  if (!context) {
    throw new Error('useTriage must be used within a TriageProvider');
  }
  return context;
}
