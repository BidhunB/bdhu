import React from 'react';
import PremiumContact from '../../components/ui/premium-contact'; // Adjust path as needed
import { NavbarDemo } from '@/components/ui/resizable-navbar-demo' // Adjust path as needed

export default function ContactPage() {
  return (
    <div>
    <div className="flex items-center justify-center">
      <div className="fixed z-30 top-0 ">
        <NavbarDemo />
      </div>
      </div>
      <PremiumContact />
    </div>
  );
}