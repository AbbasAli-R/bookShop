import the_great_gutsby from './assets/the_great_gutsby.jpeg'
import to_kill_a_mocking_bird from './assets/to_kill_a_mocking_bird.jpeg'
import _1984 from './assets/1984.jpeg'
import the_alchemist from './assets/the_alchemist.jpg'
import the_catcher_of_the_rye from './assets/the_catcher_of_the_rye.jpeg'
import clean_code from './assets/clean_code.jpeg'
import the_pragmatic_programmer from './assets/the_pragmatic_programmer.jpeg'
import javascript_the_good_part from './assets/javascript_the_good_part.jpeg'
import you_dont_know_js from './assets/you_dont_know_js.jpeg'
import intro_to_algorithms from './assets/intro_to_algorithms.jpeg'
import atomic_habits from './assets/atomic_habits.jpg'
import the_power_of_now from './assets/the_power_of_now.jpeg'
import think_and_grow_rich from './assets/think_and_grow_rich.jpg'
import the_7_habits_of_highly_effective_people from './assets/the_7_habits_of_highly_effective_people.jpeg'
import cant_hurt_me from './assets/cant_hurt_me.jpeg'
import a_brief_history_of_human_kind from './assets/a_brief_history_of_human_kind.jpg'
import steve_jobs from './assets/steve_jobs.jpeg'
import wings_of_fire from './assets/wings_of_fire.jpg'
import longwalk_to_freedom from './assets/longwalk_to_freedom.jpg'
import the_diary_of_a_young_girl from './assets/the_diary_of_a_young_girl.jpeg'

const products = [
  // Fiction
  {
    id: 1,
    title: "The Great Gatsby",
    price: 336,
    category: "Fiction",
    description:
      "A classic novel by F. Scott Fitzgerald exploring wealth, love, and the American dream in the 1920s.",
    image: the_great_gutsby
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    price: 328,
    category: "Fiction",
    description:
      "Harper Lee's timeless story about racial injustice and moral growth in the Deep South.",
    image: to_kill_a_mocking_bird,
  },
  {
    id: 3,
    title: "1984",
    price: 302,
    category: "Fiction",
    description:
      "George Orwell’s dystopian masterpiece warning against totalitarianism and surveillance.",
    image: _1984,
  },
  {
    id: 4,
    title: "The Alchemist",
    price: 239,
    category: "Fiction",
    description:
      "Paulo Coelho's inspiring tale of following your dreams and destiny.",
    image: the_alchemist,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    price: 603,
    category: "Fiction",
    description:
      "J.D. Salinger’s coming-of-age story following Holden Caulfield’s search for meaning.",
    image: the_catcher_of_the_rye,
  },

  // Technology & Programming
  {
    id: 6,
    title: "Clean Code",
    price: 420,
    category: "Technology",
    description:
      "Robert C. Martin’s guide to writing clean, maintainable, and efficient code.",
    image: clean_code,
  },
  {
    id: 7,
    title: "The Pragmatic Programmer",
    price: 386,
    category: "Technology",
    description:
      "A modern classic on practical approaches and best practices for software development.",
    image: the_pragmatic_programmer,
  },
  {
    id: 8,
    title: "JavaScript: The Good Parts",
    price: 752,
    category: "Technology",
    description:
      "Douglas Crockford highlights the strengths and best features of JavaScript.",
    image: javascript_the_good_part,
  },
  {
    id: 9,
    title: "You Don’t Know JS",
    price: 280,
    category: "Technology",
    description:
      "Kyle Simpson’s series diving deep into JavaScript’s core mechanisms.",
    image: you_dont_know_js,
  },
  {
    id: 10,
    title: "Introduction to Algorithms",
    price: 850,
    category: "Technology",
    description:
      "Cormen’s comprehensive reference on algorithms, widely used in CS education.",
    image: intro_to_algorithms,
  },

  // Self-Help & Motivation
  {
    id: 11,
    title: "Atomic Habits",
    price: 480,
    category: "Self-Help",
    description:
      "James Clear’s best-seller on building good habits and breaking bad ones.",
    image: atomic_habits,
  },
  {
    id: 12,
    title: "The Power of Now",
    price: 379,
    category: "Self-Help",
    description:
      "Eckhart Tolle’s spiritual guide to living in the present moment.",
    image: the_power_of_now,
  },
  {
    id: 13,
    title: "Think and Grow Rich",
    price: 436,
    category: "Self-Help",
    description:
      "Napoleon Hill’s timeless book on success, mindset, and wealth-building.",
    image: think_and_grow_rich,
  },
  {
    id: 14,
    title: "The 7 Habits of Highly Effective People",
    price: 189,
    category: "Self-Help",
    description:
      "Stephen Covey’s framework for personal and professional effectiveness.",
    image: the_7_habits_of_highly_effective_people,
  },
  {
    id: 15,
    title: "Can’t Hurt Me",
    price: 230,
    category: "Self-Help",
    description:
      "David Goggins’ motivational memoir on resilience, grit, and mental toughness.",
    image: cant_hurt_me,
  },

  // History & Biography
  {
    id: 16,
    title: "Sapiens: A Brief History of Humankind",
    price: 265,
    category: "History",
    description:
      "Yuval Noah Harari’s exploration of human evolution, culture, and society.",
    image: a_brief_history_of_human_kind,
  },
  {
    id: 17,
    title: "The Diary of a Young Girl",
    price: 340,
    category: "History",
    description:
      "Anne Frank’s powerful diary documenting her life during World War II.",
    image: the_diary_of_a_young_girl,
  },
  {
    id: 18,
    title: "Steve Jobs",
    price: 330,
    category: "History",
    description:
      "Walter Isaacson’s biography of Apple co-founder Steve Jobs, based on exclusive interviews.",
    image: steve_jobs,
  },
  {
    id: 19,
    title: "Wings of Fire",
    price: 500,
    category: "History",
    description:
      "Autobiography of Dr. A.P.J. Abdul Kalam, former President of India and visionary scientist.",
    image: wings_of_fire,
  },
  {
    id: 20,
    title: "Long Walk to Freedom",
    price: 421,
    category: "History",
    description:
      "Nelson Mandela’s autobiography chronicling his struggle for freedom and equality.",
    image: longwalk_to_freedom,
  },
];

export default products;
