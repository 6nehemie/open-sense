export const navigation = [
  { label: 'View Plans', href: '/plans' },
  { label: 'Log In', href: '/sign-in' },
  { label: 'Sign Up', href: '/sign-up' },
];

export const hero = {
  heroText: 'Learn from the best, plan your future',
  subText: 'Get access to more than 120 hours of unlimited contents.',
};

export const coursesFeatured = {
  titleLanding: 'Featured Courses',
  title: 'Our Courses',
  message:
    'Missed starting yesterday? Start now. Each lesson brings you closer to mastery. Dive in today and unlock your potential.',
  courses: [
    {
      label: 'Estate Pro',
      slogan: 'The Blue Print Of Wealth',
      duration: '26 hours',
      imageSrc: '/courses/course-1.png',
    },
    {
      label: 'Blockchain Expert',
      slogan: 'The Currency Of Tomorrow',
      duration: '20 hours',
      imageSrc: '/courses/course-2.png',
    },
    {
      label: 'Finance Elite',
      slogan: 'Mastering The Mechanics Of Money',
      duration: '14 hours',
      imageSrc: '/courses/course-3.png',
    },
    {
      label: 'Chart Maestro',
      slogan: 'Navigating The Nuances Of Numbers',
      duration: '38 hours',
      imageSrc: '/courses/course-4.png',
    },
    {
      label: 'Entrepreneur 101',
      slogan: 'Unlocking Success Through the Right Mindset.',
      duration: '38 hours',
      imageSrc: '/courses/course-5.png',
    },
  ],
};

export const events = {
  title: 'Coming soon',
  featured: [
    {
      date: 'December 12',
      imageSrc: '/events/event-1.png',
      label: 'Live Cooking Class',
      text: 'December is a busy month join us to prepare nice dish.',
    },
    {
      date: 'December 23',
      imageSrc: '/events/event-2.png',
      label: 'Podcast Interview',
      text: 'Meet one of our successful alumni and learn his story.',
    },
  ],
  newsletter: {
    label: 'More events are coming soon.',
    text: 'Subscribe to our newsletter to stay updated and never miss a thing.',
  },
};

export const subscriptionsPlans = {
  label: 'Launch Your Growth Journey.',
  text: 'All membership plans come with a 30-day satisfaction guarantee.',
  plans: [
    {
      label: 'Monthly Maven',
      duration: '1 month',
      description:
        "Ideal for those looking to get a taste of our platform's offerings. Dive in and explore for a month.",
      price: '$29.00',
      priceDescription: '',
      access: [
        {
          text: 'Access to Basic Content',
          included: true,
        },
        {
          text: 'Access to Advanced Course Material',
          included: false,
        },
        {
          text: 'Monthly Webinars',
          included: true,
        },
        {
          text: 'Community Access',
          included: true,
        },
        {
          text: 'Priority Email Support',
          included: false,
        },
        {
          text: 'Personalized Consultation',
          included: false,
        },
      ],
    },
    {
      label: 'Yearly Elite',
      duration: '1 year',
      description:
        'Our best value package! Join the elite group of members who are in it for the long haul, benefiting from consistent updates and features throughout the year.',
      price: '$21.58',
      priceDescription:
        '$259 (equivalent to $21.58/month, offering a further discount for the longest commitment)',
      access: [
        {
          text: 'Access to Basic Content',
          included: true,
        },
        {
          text: 'Access to Advanced Course Material',
          included: true,
        },
        {
          text: 'Monthly Webinars',
          included: true,
        },
        {
          text: 'Community Access',
          included: true,
        },
        {
          text: 'Priority Email Support',
          included: true,
        },
        {
          text: 'Personalized Consultation (3 sessions)',
          included: true,
        },
      ],
    },
    {
      label: 'Semi-Annual Specialist',
      duration: '6 months',
      description:
        'Perfect for committed learners who are ready to invest in their growth over the next half-year.',
      price: '$24.83',
      priceDescription:
        '$149 (equivalent to $24.83/month, offering a discount for a longer commitment)',
      access: [
        {
          text: 'Access to Basic Content',
          included: true,
        },
        {
          text: 'Access to Advanced Course Material',
          included: true,
        },
        {
          text: 'Monthly Webinars',
          included: true,
        },
        {
          text: 'Community Access',
          included: true,
        },
        {
          text: 'Priority Email Support',
          included: true,
        },
        {
          text: 'Personalized Consultation (1 sessions)',
          included: true,
        },
      ],
    },
  ],
};

export const reviews = {
  title: 'Voices of our Community',
  text: "Genuine feedback from those who've walked the path.",
  userReviews: [
    {
      name: "Liam O'Connell",
      imageSrc: '/users/user-1.png',
      country: 'Dublin, Ireland',
      text: 'The community is vibrant and supportive. Every time I had a doubt, someone was there to help. The courses are comprehensive and well-structured. Two thumbs up!',
    },
    {
      name: 'Sophia Martinez',
      imageSrc: '/users/user-2.png',
      country: 'Madrid, Spain',
      text: "I've taken multiple courses on different platforms, but the content and support here are unparalleled. I've not only gained knowledge but also confidence in my skills. Highly recommend!",
    },
    {
      name: 'Ava Kim',
      imageSrc: '/users/user-3.png',
      country: 'Seoul, South Korea',
      text: 'I was hesitant at first, but now I can confidently say that enrolling here was one of the best decisions of my professional life. The insights and real-world applications are invaluable.',
    },
    {
      name: 'Ethan Patel',
      imageSrc: '/users/user-4.png',
      country: 'Mumbai, India',
      text: "What sets this platform apart is the real-world relevance of the courses. It's not just theory; there's a strong emphasis on practical application, which I appreciate.",
    },
    {
      name: 'Olivia Brown',
      imageSrc: '/users/user-5.png',
      country: 'Sydney, Australia',
      text: "The instructors are top-notch, and the course materials are up-to-date with the latest trends and technologies. I've been able to apply what I've learned directly to my job.",
    },
    {
      name: 'Jackson Lee',
      imageSrc: '/users/user-6.png',
      country: 'San Francisco, USA',
      text: "Every course I've taken has exceeded my expectations. The content is clear, the instructors are knowledgeable, and I've seen a tangible improvement in my skills.",
    },
  ],
};

export const footer = {
  credit:
    '© 2023 Open-Sense. All rights reserved. Designed and developed by Nehemie Mombanga.',
  links: [
    { label: 'My Portfolio', href: '/portfolio' },
    {
      label: 'Github',
      href: 'https://github.com/NehemieMbg/open-sense/tree/main',
    },
  ],
};

export const auth = {
  login: {
    label: 'Welcome Back!',
    text: 'Ready to continue your learning journey?',
  },
  singUp: {
    label: 'Join Our Community!',
    text: "Step into a world of endless possibilities and knowledge. Let's embark on this learning adventure together.",
  },
};
