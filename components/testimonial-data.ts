export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  imageSeed: number; // For deterministic placeholder generation
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Chinonye Esther",
    role: "Digital Marketing",
    quote: "The Digital Marketing course helped me find my brand voice. I learned how to craft messages that reflect my values and attract trust. Now, my audience connects more deeply with my story and products.\n\nI’ve even started mentoring a few young stylists online.",
    imageSeed: 101
  },
  {
    id: 2,
    name: "Yomi Durotoye",
    role: "Cybersecurity",
    quote: "Honestly, it’s been great! I’ve only just started, but I really enjoy the learning process.\n\nIt doesn’t matter if you’re new to Cybersecurity—Univad welcomes all levels. Even though it’s an online course, it feels like I’m actually attending a proper school.",
    imageSeed: 205
  },
  {
    id: 3,
    name: "Aniedobe Chinaza",
    role: "Data Analyst",
    quote: "While I’m no stranger to analytics, the Univad section introducing machine learning completely reframed how I think about data’s potential.\n\nSeeing how models are constructed from the ground up, and how they’re used to derive predictive insights, gave me a new layer of understanding.",
    imageSeed: 302
  },
  {
    id: 4,
    name: "Ejiofor Wilfred",
    role: "Web Development",
    quote: "From zero experience to writing real code, Univad made it feel possible.\n\nThe platform is smooth, the content is hands-on, and the lessons stick. Completing my first course didn’t just teach me skills, it showed me that this tech career I dream about is within reach.",
    imageSeed: 444
  }
];

export const EXTERNAL_LINKS = {
  MORE_TESTIMONIALS: "https://www.univad.org/about/testimonials"
};