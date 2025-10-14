import { useState, useMemo } from 'react';

interface ROIInputs {
  minutesUpdates: number;
  minutesBookings: number;
  minutesPayments: number;
  hourlyRate: number;
}

export function useROICalculator(initialInputs: ROIInputs) {
  const [inputs, setInputs] = useState<ROIInputs>(initialInputs);

  const results = useMemo(() => {
    const totalMinutesPerDay = 
      inputs.minutesUpdates + inputs.minutesBookings + inputs.minutesPayments;
    
    const hoursPerWeek = Math.round((totalMinutesPerDay * 6) / 60 * 10) / 10; // 6 días laborales
    const hoursPerYear = Math.round(hoursPerWeek * 50); // 50 semanas al año
    
    // Asumimos 80% de reducción de tiempo con Guau Pro
    const savedHoursPerWeek = Math.round(hoursPerWeek * 0.8 * 10) / 10;
    const savedHoursPerYear = Math.round(savedHoursPerWeek * 50);
    
    const savedMoneyPerYear = Math.round(savedHoursPerYear * inputs.hourlyRate);
    
    // Costo promedio del plan Professional
    const costPerYear = 49 * 12; // €588/año
    
    const roi = Math.round(((savedMoneyPerYear - costPerYear) / costPerYear) * 100);
    
    return {
      totalMinutesPerDay,
      hoursPerWeek,
      hoursPerYear,
      savedHoursPerWeek,
      savedHoursPerYear,
      savedMoneyPerYear,
      costPerYear,
      roi,
    };
  }, [inputs]);

  return { inputs, setInputs, results };
}
