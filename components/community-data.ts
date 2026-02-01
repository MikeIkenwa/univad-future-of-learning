export interface CardData {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  ctaText: string;
  ctaLink: string;
  features: string[];
}

export interface GlassCardProps {
  data: CardData;
  reverse?: boolean;
}

export interface Spotlight {
  id: string;
  name: string;
  role: string;
  about: string;
  quote: string;
  imageUrl: string;
}

export const cardData: CardData[] = [
  {
    id: 'ambassadors',
    title: 'Campus Ambassadors',
    description: 'Become the voice of Univad on your campus. We are looking for passionate student leaders to drive innovation, host events, and build a vibrant community of tech enthusiasts.',
    imageUrl: 'https://picsum.photos/id/48/800/600',
    ctaText: 'Apply Now',
    ctaLink: '#apply-ambassador',
    features: [
      'Exclusive Univad Merch & Swag',
      'Mentorship from Industry Leaders',
      'Certificate of Leadership',
      'Network with Global Peers'
    ]
  },
  {
    id: 'events',
    title: 'Univad Events',
    description: 'Immerse yourself in our curated tech summits, hackathons, and networking mixers. Whether virtual or in-person, our events are designed to inspire and connect.',
    imageUrl: 'https://picsum.photos/id/20/800/600',
    ctaText: 'View Calendar',
    ctaLink: '#view-events',
    features: [
      'Monthly Tech Workshops',
      'Annual Global Hackathon',
      'Founder Fireside Chats',
      'Career Networking Mixers'
    ]
  }
];

export const spotlightData: Spotlight[] = [
  {
    id: '1',
    name: 'Goodness Awosika',
    role: 'Ambassador of the month',
    about: 'A driven student leader at University of Lagos, Goodness has spearheaded multiple tech initiatives that have bridged the gap between students and industry pros.',
    quote: 'Being recognized pushes me to create even more impact for my fellow students.',
    imageUrl: 'https://static.wixstatic.com/media/9638ce_635249d80c244d138fde77069c375f10~mv2.png'
  },
  {
    id: '2',
    name: 'Adeyemi Omowunmi',
    role: 'Campus Lead of the month',
    about: 'Leading the charge at University of Lagos, Adeyemi has organized seamless events and grown the local community by 200% this semester.',
    quote: 'Leadership is about empowering others to see their potential and seize it.',
    imageUrl: 'https://static.wixstatic.com/media/9638ce_3b569977841e4952a14715ad668f4547~mv2.png'
  },
  {
    id: '3',
    name: 'University of Lagos',
    role: 'Campus of the month',
    about: 'The University of Lagos chapter has demonstrated exceptional engagement, hosting the highest rated workshops and hackathons this month.',
    quote: 'Our students are proving that innovation starts right here on campus.',
    imageUrl: 'https://static.wixstatic.com/media/9638ce_dfb3b2062ae84cdabf9b8e4a9ec2b53b~mv2.jpg'
  }
];