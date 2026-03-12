import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Home } from '@/pages/Home';
import { SobreNos } from '@/pages/SobreNos';
import { Servicos } from '@/pages/Servicos';
import { Contato } from '@/pages/Contato';
import { Estruturas } from '@/pages/Estruturas';
import { Estrutura } from '@/pages/Estrutura';
import { PainelDeLed } from '@/pages/PainelDeLed';
import { Iluminacao } from '@/pages/Iluminacao';
import { Palco } from '@/pages/Palco';
import { TotemDeLed } from '@/pages/TotemDeLed';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <div className="relative flex min-h-screen flex-col gradient-mesh">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/estruturas" element={<Estruturas />} />
          <Route path="/estrutura" element={<Estrutura />} />
          <Route path="/painel-de-led" element={<PainelDeLed />} />
          <Route path="/iluminacao" element={<Iluminacao />} />
          <Route path="/palco" element={<Palco />} />
          <Route path="/totem-de-led" element={<TotemDeLed />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
