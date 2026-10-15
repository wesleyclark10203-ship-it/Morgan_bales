import React from 'react';
import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/products';

export default function FloatingWhatsApp() {
  return (
    <a
      href={BUSINESS_INFO.whatsappBase}
      target="_blank"
      rel="noopener noreferrer"
      className="floating-whatsapp-btn"
      title="Chat with Morgan Mitumba Bales on WhatsApp"
      aria-label="Chat with Morgan Mitumba Bales on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}
