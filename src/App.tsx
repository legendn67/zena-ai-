/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Navbar, Hero, Features, Process, Testimonials, Pricing, LogoMarquee, CTA, Footer, Preloader } from './components/LandingPage';

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="min-h-screen selection:bg-white selection:text-black bg-brand-bg">
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <div key="content">
            <Navbar />
            <Hero />
            <Features />
            <Process />
            <Testimonials />
            <Pricing />
            <LogoMarquee />
            <CTA />
            <Footer />
          </div>
        )}
      </AnimatePresence>
    </main>
  );
}
