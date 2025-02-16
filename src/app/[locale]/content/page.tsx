'use client'

import Header from '@/app/components/Header';
import Hero from '@/app/components/Hero';
import Styles from '@/app/components/Styles';
import Work from '@/app/components/Work';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';


export default function HomePage() {

  return (
    <div className="min-h-screen">
      <Header/>
      <main>
        <Hero/>
        <Styles/>
        <Work/>
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}
