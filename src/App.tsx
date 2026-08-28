import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { TriageProvider } from './contexts/TriageContext';
import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home';
import { ServicesHub } from './pages/ServicesHub';
import { CategoryPage } from './pages/CategoryPage';
import { ConciergePage } from './pages/ConciergePage';
import { PastaDocumentalPage } from './pages/PastaDocumentalPage';
import { LifeMomentsPage } from './pages/LifeMomentsPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { PartnersPage } from './pages/PartnersPage';
import { FAQPage } from './pages/FAQPage';

export default function App() {
  return (
    <TriageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="servicos" element={<ServicesHub />} />
            <Route path="servicos/:categorySlug" element={<CategoryPage />} />
            <Route path="concierge-documental" element={<ConciergePage />} />
            <Route path="pasta-documental-personalizada" element={<PastaDocumentalPage />} />
            <Route path="momentos-de-vida" element={<LifeMomentsPage />} />
            <Route path="sobre-nos" element={<AboutUsPage />} />
            <Route path="rede-de-parceiros" element={<PartnersPage />} />
            <Route path="faq" element={<FAQPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TriageProvider>
  );
}
