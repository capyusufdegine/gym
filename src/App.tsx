import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Programs } from './components/Programs';
import { FitnessAssessment } from './components/FitnessAssessment';
import { Results } from './components/Results';
import { AboutCoach } from './components/AboutCoach';
import { Articles } from './components/Articles';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProgramModal } from './components/ProgramModal';
import { ArticleModal } from './components/ArticleModal';
import { BookingModal } from './components/BookingModal';
import { Program, Article } from './data/gymData';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [bookingProgramId, setBookingProgramId] = useState<string | undefined>(undefined);
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  const handleOpenBooking = (programId?: string) => {
    setBookingProgramId(programId);
    setBookingOpen(true);
  };

  const handleViewPrograms = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0b0b] text-[#f4f4f5] flex flex-col selection:bg-[#e63925] selection:text-white">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onViewPrograms={handleViewPrograms}
        />

        {/* Programs / What I Offer */}
        <Programs
          onSelectProgram={(prog) => setSelectedProgram(prog)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Interactive Goal & Program Assessment */}
        <FitnessAssessment
          onSelectProgram={(prog) => setSelectedProgram(prog)}
          onOpenBooking={handleOpenBooking}
        />

        {/* Client Results & Proof */}
        <Results onOpenBooking={() => handleOpenBooking()} />

        {/* About Coach Marcus Reid */}
        <AboutCoach onOpenBooking={() => handleOpenBooking()} />

        {/* Knowledge & Tips / Forge Your Mindset */}
        <Articles
          onSelectArticle={(art) => setSelectedArticle(art)}
        />

        {/* Private Facility & Direct Contact */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <ProgramModal
        program={selectedProgram}
        onClose={() => setSelectedProgram(null)}
        onBookProgram={(progId) => handleOpenBooking(progId)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
        onOpenBooking={() => handleOpenBooking()}
      />

      <BookingModal
        isOpen={bookingOpen}
        initialProgramId={bookingProgramId}
        onClose={() => {
          setBookingOpen(false);
          setBookingProgramId(undefined);
        }}
      />
    </div>
  );
}
