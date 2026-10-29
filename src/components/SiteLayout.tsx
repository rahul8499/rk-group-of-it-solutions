"use client";

import React, { useState, createContext, useContext } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import ConsultationModal from "./ConsultationModal";

import MobileBottomBar from "./MobileBottomBar";

interface ConsultationContextType {
  openConsultation: (serviceId?: string) => void;
}

const ConsultationContext = createContext<ConsultationContextType>({
  openConsultation: () => {},
});

export const useConsultation = () => useContext(ConsultationContext);

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");

  const openConsultation = (serviceId?: string) => {
    setSelectedService(serviceId || "");
    setModalOpen(true);
  };

  const closeConsultation = () => {
    setModalOpen(false);
    setSelectedService("");
  };

  return (
    <ConsultationContext.Provider value={{ openConsultation }}>
      <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 selection:bg-electric-500/30 selection:text-white pb-14 sm:pb-0">
        {/* Sticky Global Navigation */}
        <Navbar onOpenConsultation={() => openConsultation()} />

        {/* Main Routed Page Content */}
        <main className="flex-1 pt-20 sm:pt-24">{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Desktop / Tablet Floating Quick WhatsApp Action */}
        <div className="hidden sm:block">
          <WhatsAppButton />
        </div>

        {/* Mobile Persistent Quick Action Bar */}
        <MobileBottomBar />

        {/* Global Consultation Modal */}
        <ConsultationModal
          isOpen={modalOpen}
          onClose={closeConsultation}
          initialService={selectedService}
        />
      </div>
    </ConsultationContext.Provider>
  );
}
