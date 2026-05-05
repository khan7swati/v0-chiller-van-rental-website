export const vans = [
  {
    id: 1,
    name: 'Nomad Lite',
    type: 'Compact Van',
    price: 59,
    capacity: 2,
    beds: 1,
    image: '/vans/nomad-lite.jpg',
    description: 'Perfect for couples and solo travelers. Compact yet comfortable.',
    features: [
      'Sleeping area',
      'Kitchenette',
      'Portable shower',
      'Climate control',
      'USB charging'
    ],
    specs: {
      length: '16 ft',
      width: '6.5 ft',
      fuelEconomy: '22 mpg'
    }
  },
  {
    id: 2,
    name: 'Explorer Pro',
    type: 'Mid-Size Van',
    price: 89,
    capacity: 4,
    beds: 2,
    image: '/vans/explorer-pro.jpg',
    description: 'Ideal for small families. Spacious with modern amenities.',
    features: [
      'Two sleeping areas',
      'Full kitchen',
      'Bathroom with shower',
      'Climate control',
      'Entertainment system',
      'Solar panels'
    ],
    specs: {
      length: '22 ft',
      width: '7.5 ft',
      fuelEconomy: '18 mpg'
    }
  },
  {
    id: 3,
    name: 'Adventure Plus',
    type: 'Full-Size Van',
    price: 129,
    capacity: 6,
    beds: 3,
    image: '/vans/adventure-plus.jpg',
    description: 'Maximum comfort and space for larger groups.',
    features: [
      'Three sleeping areas',
      'Fully equipped kitchen',
      'Full bathroom with shower',
      'Dining area',
      'Climate control',
      'Entertainment system',
      'Outdoor storage',
      'Solar charging system'
    ],
    specs: {
      length: '26 ft',
      width: '8 ft',
      fuelEconomy: '15 mpg'
    }
  },
  {
    id: 4,
    name: 'Luxury Retreat',
    type: 'Premium Van',
    price: 179,
    capacity: 4,
    beds: 2,
    image: '/vans/luxury-retreat.jpg',
    description: 'Premium experience with luxury amenities and finishes.',
    features: [
      'Premium bedding',
      'Gourmet kitchen',
      'Luxury bathroom',
      'Smart home system',
      'Climate control',
      'Entertainment system',
      'WiFi hotspot',
      'Air suspension',
      'Panoramic windows'
    ],
    specs: {
      length: '24 ft',
      width: '8 ft',
      fuelEconomy: '16 mpg'
    }
  }
]

export const services = [
  {
    id: 1,
    title: 'Airport Pickup & Dropoff',
    description: 'Convenient delivery service to and from major airports.',
    price: 49,
    icon: 'Plane'
  },
  {
    id: 2,
    title: 'Insurance Coverage',
    description: 'Comprehensive insurance protection for your peace of mind.',
    price: 19,
    icon: 'Shield'
  },
  {
    id: 3,
    title: 'GPS Navigation System',
    description: 'Advanced navigation system with offline maps.',
    price: 12,
    icon: 'Map'
  },
  {
    id: 4,
    title: 'Camping Package',
    description: 'Complete camping gear including tent and cooking equipment.',
    price: 79,
    icon: 'Tent'
  },
  {
    id: 5,
    title: 'Pet Policy',
    description: 'Travel with your furry friends. Pet-friendly vans available.',
    price: 25,
    icon: 'Heart'
  },
  {
    id: 6,
    title: 'Extra Driver',
    description: 'Add additional drivers to your rental agreement.',
    price: 15,
    icon: 'Users'
  }
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    text: 'Amazing experience! The van was clean, comfortable, and perfectly maintained. Highly recommend SmartPath for your next adventure!',
    image: '/avatars/sarah.jpg'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    text: 'Great customer service and fantastic vans. We explored the Pacific Coast Highway in style. Will definitely book again!',
    image: '/avatars/michael.jpg'
  },
  {
    id: 3,
    name: 'Emma Rodriguez',
    rating: 5,
    text: 'Perfect for our family road trip. The kids loved it and the van had all the amenities we needed. Worth every penny!',
    image: '/avatars/emma.jpg'
  },
  {
    id: 4,
    name: 'James Wilson',
    rating: 5,
    text: 'Flexible booking, competitive prices, and excellent support. SmartPath made our adventure truly unforgettable.',
    image: '/avatars/james.jpg'
  }
]

export const faqs = [
  {
    id: 1,
    question: 'What is the minimum rental period?',
    answer: 'The minimum rental period is 3 days. For longer adventures, ask about our weekly and monthly discount rates.'
  },
  {
    id: 2,
    question: 'Is fuel included in the rental?',
    answer: 'Fuel is not included. You pay for the fuel you use. We provide the vans with a full tank and you return it full.'
  },
  {
    id: 3,
    question: 'What is your cancellation policy?',
    answer: 'Free cancellation up to 48 hours before your rental date. Cancellations within 48 hours are subject to a 50% fee.'
  },
  {
    id: 4,
    question: 'Do you provide cooking equipment?',
    answer: 'Yes, all our vans come with basic cooking equipment. Premium vans include a full gourmet kitchen setup.'
  },
  {
    id: 5,
    question: 'What is the age requirement for drivers?',
    answer: 'Drivers must be at least 21 years old with a valid driver&apos;s license. Additional insurance may apply for drivers under 25.'
  },
  {
    id: 6,
    question: 'Are there mileage limits?',
    answer: 'No mileage limits on any of our rentals. Drive as much as you want across North America.'
  }
]

export const bookingSteps = [
  {
    step: 1,
    title: 'Select Your Van',
    description: 'Browse our fleet and choose the perfect van for your adventure.'
  },
  {
    step: 2,
    title: 'Choose Dates',
    description: 'Pick your rental start and end dates with flexible scheduling.'
  },
  {
    step: 3,
    title: 'Add Services',
    description: 'Select optional add-ons like insurance, GPS, or camping gear.'
  },
  {
    step: 4,
    title: 'Review & Confirm',
    description: 'Review your booking details and complete payment securely.'
  },
  {
    step: 5,
    title: 'Enjoy Your Adventure',
    description: 'Pick up your van and hit the road with confidence!'
  }
]
