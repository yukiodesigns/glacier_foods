'use client';
import React, { useState, useEffect } from 'react';

const OfferBanner = () => {
  const offerText = "Limited Time Offer! Get 20% off on all products";
  const offerEndDate = new Date('2024-12-31T23:59:59'); 

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);
  
    return () => clearInterval(timer);
  }, [offerEndDate]);

  function getTimeRemaining() {
    const now = new Date().getTime(); 
    const difference = (offerEndDate as any) - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <section className="bg-black text-white py-8">
      <div className="container mx-auto text-center">
        <p className="text-xl font-bold">{offerText}</p>
        <div className="mt-4">
          <div className="flex items-center justify-center">
            <div className="countdown-item">
              <span className="countdown-value mr-1"><strong>{timeRemaining.days}</strong></span>
              <span className="countdown-label mr-2">Days</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value mr-1"><strong>{timeRemaining.hours}</strong></span>
              <span className="countdown-label mr-2">Hrs</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value mr-1"><strong>{timeRemaining.minutes}</strong></span>
              <span className="countdown-label mr-2">Min</span>
            </div>
            <div className="countdown-item">
              <span className="countdown-value mr-1"><strong>{timeRemaining.seconds}</strong></span>
              <span className="countdown-label mr-2">Sec</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBanner;
