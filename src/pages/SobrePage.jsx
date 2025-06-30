// src/pages/SobrePage.jsx
import React, { useEffect, useState } from 'react';
import { Header } from '../components/HeaderImoveis'
import { Loader } from '../components/Loader'

export function SobrePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;
  
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Sobre Nós</h1>
        <p>Informações sobre a empresa...</p>
      </main>
    </>
  );
}
