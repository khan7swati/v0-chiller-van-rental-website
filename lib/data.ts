export const vans = [
  {
    id: 1,
    name: 'Cool Box 1T',
    type: 'Compact Chiller',
    price: 350,
    capacity: 1,
    temperatureRange: '-18°C to +5°C',
    image: '/vans/chiller-1ton.jpg',
    description: 'Perfect for small food deliveries and light pharmaceutical shipments.',
    features: [
      'Temperature control',
      'Insulated cargo area',
      'Digital display',
      'Backup power system',
      'GPS tracking',
      'Real-time temperature monitoring'
    ],
    specs: {
      capacity: '1 Ton',
      volume: '3.5 m³',
      fuelType: 'Diesel',
      temperatureRange: '-18°C to +5°C'
    }
  },
  {
    id: 2,
    name: 'CoolMax 3T',
    type: 'Mid-Size Chiller',
    price: 650,
    capacity: 3,
    temperatureRange: '-18°C to +5°C',
    image: '/vans/chiller-3ton.jpg',
    description: 'Ideal for catering logistics and medium food delivery operations.',
    features: [
      'Dual temperature zones',
      'Insulated cargo area',
      'Digital display',
      'Backup power system',
      'GPS tracking',
      'Real-time temperature monitoring',
      'AED Certified'
    ],
    specs: {
      capacity: '3 Ton',
      volume: '8.5 m³',
      fuelType: 'Diesel',
      temperatureRange: '-18°C to +5°C'
    }
  },
  {
    id: 3,
    name: 'FreezeNet 5T',
    type: 'Large Deep Freezer',
    price: 950,
    capacity: 5,
    temperatureRange: '-20°C to +2°C',
    image: '/vans/freezer-5ton.jpg',
    description: 'Heavy-duty deep freezer for large food & pharmaceutical shipments.',
    features: [
      'Deep freezing capability',
      'Dual temperature zones',
      'Insulated cargo area',
      'Digital display',
      'Backup power system',
      'GPS tracking',
      'Real-time temperature monitoring',
      'Ultra-insulated walls'
    ],
    specs: {
      capacity: '5 Ton',
      volume: '14 m³',
      fuelType: 'Diesel',
      temperatureRange: '-20°C to +2°C'
    }
  },
  {
    id: 4,
    name: 'ArctiFlex 8T',
    type: 'Ultra-Low Freezer',
    price: 1350,
    capacity: 8,
    temperatureRange: '-25°C to 0°C',
    image: '/vans/freezer-8ton.jpg',
    description: 'Premium ultra-low freezer for critical pharmaceutical and biotech transport.',
    features: [
      'Ultra-low freezing',
      'Triple temperature zones',
      'Insulated cargo area',
      'Digital display',
      'Dual backup power system',
      'GPS tracking',
      'Real-time temperature monitoring',
      'Premium insulation',
      '24/7 monitoring'
    ],
    specs: {
      capacity: '8 Ton',
      volume: '22 m³',
      fuelType: 'Diesel',
      temperatureRange: '-25°C to 0°C'
    }
  }
]

export const services = [
  {
    id: 1,
    title: 'Food Delivery Transport',
    description: 'Reliable cold chain for restaurants, catering, and food suppliers across UAE.',
    price: 0,
    icon: 'Truck'
  },
  {
    id: 2,
    title: 'Pharmaceutical Logistics',
    description: 'Temperature-controlled transport for medicines and medical supplies.',
    price: 0,
    icon: 'Package'
  },
  {
    id: 3,
    title: 'Catering Event Services',
    description: 'Full event refrigeration solutions for weddings, conferences, and corporate events.',
    price: 0,
    icon: 'UtensilsCrossed'
  },
  {
    id: 4,
    title: 'Ice Cream & Frozen Goods',
    description: 'Specialized transport for ice cream shops, frozen desserts, and frozen food products.',
    price: 0,
    icon: 'Snowflake'
  },
  {
    id: 5,
    title: '24/7 Emergency Transport',
    description: 'Urgent same-day delivery for perishable goods and critical shipments.',
    price: 0,
    icon: 'Clock'
  },
  {
    id: 6,
    title: 'Temperature Monitoring',
    description: 'Real-time SMS and email alerts for temperature stability throughout transport.',
    price: 0,
    icon: 'Thermometer'
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Ahmed Al Mansoori',
    rating: 5,
    text: 'Reliable cold transport partner for our restaurant. Timely deliveries, perfect temperature control, and professional service every time!',
    image: '/avatars/sarah.jpg'
  },
  {
    id: 2,
    name: 'Fatima Hussain',
    rating: 5,
    text: 'We trust them with our pharmaceutical shipments. Their 24/7 monitoring and temperature consistency is unmatched in UAE.',
    image: '/avatars/michael.jpg'
  },
  {
    id: 3,
    name: 'Hassan Al-Zahra',
    rating: 5,
    text: 'Outstanding catering logistics support. Handled our 500-person event refrigeration flawlessly. Highly professional team!',
    image: '/avatars/emma.jpg'
  },
  {
    id: 4,
    name: 'Noor Al-Qassimi',
    rating: 5,
    text: 'Best ice cream delivery partner in Dubai. Their insulated vans keep products frozen perfectly. Competitive rates and reliable!',
    image: '/avatars/james.jpg'
  }
]

export const faqs = [
  {
    id: 1,
    question: 'What temperature ranges can you maintain?',
    answer: 'Our vans maintain temperatures from -25°C to +5°C depending on van type. All vans are monitored in real-time to ensure consistency.'
  },
  {
    id: 2,
    question: 'Can I get same-day delivery?',
    answer: 'Yes! We offer 24/7 emergency transport for urgent deliveries across Dubai, Abu Dhabi, and Sharjah with 2-4 hour response time.'
  },
  {
    id: 3,
    question: 'Do you provide temperature monitoring?',
    answer: 'Absolutely. All shipments include real-time GPS tracking and temperature alerts sent via SMS and email throughout transport.'
  },
  {
    id: 4,
    question: 'What is your service coverage area?',
    answer: 'We operate across all UAE emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Umm Al Quwain, Ras Al Khaimah, and Fujairah.'
  },
  {
    id: 5,
    question: 'Are your vans insured?',
    answer: 'Yes, all vans are fully insured and certified for food and pharmaceutical transport. Cargo insurance available upon request.'
  },
  {
    id: 6,
    question: 'How do I book a van?',
    answer: 'Fill out our online quote form with your requirements, pickup/drop-off locations, and dates. We&apos;ll confirm availability within 1 hour.'
  }
]

export const bookingSteps = [
  {
    step: 1,
    title: 'Select Your Van',
    description: 'Choose the perfect chiller/freezer van based on your cargo capacity and temperature needs.'
  },
  {
    step: 2,
    title: 'Provide Details',
    description: 'Enter pickup location, drop-off location, date, time, and specific temperature requirements.'
  },
  {
    step: 3,
    title: 'Get Instant Quote',
    description: 'Receive competitive pricing instantly. No hidden charges, transparent billing.'
  },
  {
    step: 4,
    title: 'Confirm Booking',
    description: 'Complete payment and receive booking confirmation with tracking details.'
  },
  {
    step: 5,
    title: 'Track & Monitor',
    description: 'Track your van in real-time and receive temperature alerts throughout transport.'
  }
]
