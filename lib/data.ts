import { Book, MapLocation, BlogPost, Event } from "@/types";

export const books: Book[] = [
  {
    id: "crystal-kingdom",
    title: "The Crystal Kingdom",
    coverImage: "https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    modelUrl: "/models/book1.glb", // Placeholder
    description: "In a realm where crystals hold the power of creation, one unlikely hero must journey to restore balance before darkness consumes all.",
    publishDate: "2020-06-15",
    series: "The Elemental Chronicles",
    seriesNumber: 1,
    buyLinks: {
      amazon: "https://amazon.com",
      barnes: "https://barnesandnoble.com",
      bookshop: "https://bookshop.org",
    },
  },
  {
    id: "shadow-whispers",
    title: "Shadow Whispers",
    coverImage: "https://images.pexels.com/photos/3646172/pexels-photo-3646172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    modelUrl: "/models/book2.glb", // Placeholder
    description: "Secrets lurk in the forgotten corners of Eldoria, and as ancient whispers grow louder, a reluctant spy must confront her past to save her future.",
    publishDate: "2021-09-28",
    series: "The Elemental Chronicles",
    seriesNumber: 2,
    buyLinks: {
      amazon: "https://amazon.com",
      barnes: "https://barnesandnoble.com",
      indiebound: "https://indiebound.org",
    },
  },
  {
    id: "storm-caller",
    title: "Storm Caller",
    coverImage: "https://images.pexels.com/photos/2113566/pexels-photo-2113566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    modelUrl: "/models/book3.glb", // Placeholder
    description: "When the storms speak, Liora listens. As an elemental adept with an affinity for air, she must navigate political intrigue and ancient power struggles to prevent war.",
    publishDate: "2022-11-15",
    series: "The Elemental Chronicles",
    seriesNumber: 3,
    buyLinks: {
      amazon: "https://amazon.com",
      bookshop: "https://bookshop.org",
    },
  },
  {
    id: "tales-from-eldoria",
    title: "Tales from Eldoria",
    coverImage: "https://images.pexels.com/photos/5834/nature-grass-leaf-green.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    modelUrl: "/models/book4.glb", // Placeholder
    description: "A collection of short stories exploring the rich history and diverse cultures of Eldoria, from the Floating Isles to the Ember Deserts.",
    publishDate: "2023-03-07",
    buyLinks: {
      amazon: "https://amazon.com",
      barnes: "https://barnesandnoble.com",
    },
  },
];

export const mapLocations: MapLocation[] = [
  {
    id: "crystal-palace",
    name: "The Crystal Palace",
    description: "The glittering heart of the kingdom, where the royal family channels the power of the Genesis Crystal to maintain balance throughout the realm.",
    coordinates: [-74.0060, 40.7128], // Example coordinates (NYC)
    image: "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    relatedBooks: ["crystal-kingdom", "shadow-whispers"],
  },
  {
    id: "whispering-woods",
    name: "The Whispering Woods",
    description: "An ancient forest where the trees themselves hold memories of the past, and where those who listen carefully might hear secrets long forgotten.",
    coordinates: [-73.9857, 40.7484], // Example coordinates
    image: "https://images.pexels.com/photos/167698/pexels-photo-167698.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    relatedBooks: ["shadow-whispers", "tales-from-eldoria"],
  },
  {
    id: "storm-peak",
    name: "Storm Peak",
    description: "The tallest mountain in Eldoria, where storm elementals commune with the sky spirits and where the fabled Storm Callers train their abilities.",
    coordinates: [-74.0445, 40.6892], // Example coordinates
    image: "https://images.pexels.com/photos/1424246/pexels-photo-1424246.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    relatedBooks: ["storm-caller"],
  },
  {
    id: "ember-deserts",
    name: "The Ember Deserts",
    description: "A vast, scorching landscape that houses the secretive fire elementals and their ancient libraries carved into crystallized flame.",
    coordinates: [-73.9680, 40.7831], // Example coordinates
    image: "https://images.pexels.com/photos/847402/pexels-photo-847402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    relatedBooks: ["tales-from-eldoria"],
  },
];

export const blogPosts: BlogPost[] = [
  {
    title: "Worldbuilding: The Heart of Fantasy",
    slug: "worldbuilding-the-heart-of-fantasy",
    date: "2023-11-15",
    excerpt: "How I approach creating believable, immersive worlds that readers can get lost in.",
    content: "# Worldbuilding: The Heart of Fantasy\n\nCreating a fantasy world from scratch is both a daunting and exhilarating experience. As authors, we have the opportunity to play god, crafting landscapes, cultures, magic systems, and histories that have never existed before. Yet with this freedom comes responsibility—the responsibility to create a world that feels authentic and lived-in despite its fantastical elements.\n\n## Start With the Rules\n\nEvery world, even magical ones, need constraints. In fact, magical worlds especially need constraints. What are the limits of your magic system? What are its costs? A world where anyone can do anything magical at any time without consequence quickly becomes boring. The tension in a story often comes from the limitations characters face.\n\n## Culture Shapes Character\n\nPeople are products of their environment. How has your world's history, religion, politics, and geography shaped the way people think and behave? How do different cultures within your world view each other?\n\nI find creating cultural details one of the most rewarding aspects of worldbuilding. In *The Crystal Kingdom*, the social hierarchy is based on one's affinity for different types of crystals, which creates tension and prejudice that the protagonist must navigate.\n\n## Maps Matter\n\nI always start with a map, even if it's crude. Geography influences everything—trade routes, political boundaries, cultural exchange, and even the types of conflicts that arise. A mountain range isn't just a pretty feature; it's a natural barrier that might have kept two civilizations apart for centuries.\n\nFor the world of Eldoria, I spent months developing the geography before writing a single scene. How rivers flow, where resources are located, and climate patterns all influence where people settle and how they live.\n\n## The Small Details\n\nSometimes it's the smallest details that make a world feel real. What do people eat for breakfast? What games do children play? What idioms have evolved in this world's languages?\n\nIn *Shadow Whispers*, there's a scene where children play a game called 'Crystal Seekers' that seems trivial, but it reveals important aspects of the society's values and the everyday presence of magic in their lives.\n\n## Conclusion\n\nWorldbuilding isn't just about creating a backdrop for your characters; it's about creating a living, breathing place that shapes who they are and the challenges they face. The best fantasy worlds feel like they extend beyond the pages of the book, with histories and cultures that could fill volumes.\n\nIn my next post, I'll dive deeper into creating magic systems that enhance rather than undermine the tension in your story.",
    coverImage: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["writing", "worldbuilding", "fantasy"],
  },
  {
    title: "Character Development: Beyond the Hero's Journey",
    slug: "character-development-beyond-the-heros-journey",
    date: "2023-10-22",
    excerpt: "While the Hero's Journey provides a solid foundation, here's how to create characters that transcend archetypal patterns.",
    content: "# Character Development: Beyond the Hero's Journey\n\nThe Hero's Journey has served storytellers well for millennia, providing a reliable structure for character growth and narrative progression. However, in an age where readers have consumed countless stories following this pattern, how do we create characters that feel fresh and engaging?\n\n## Embracing Flaws\n\nPerfect characters are boring. Real people are contradictory, inconsistent, and sometimes make decisions that work against their own interests. Your characters should do the same.\n\nIn *Storm Caller*, Liora is brilliant with air magic but catastrophically bad at navigating social situations. Her intelligence becomes a flaw when it leads to arrogance, and her social awkwardness isn't just a cute quirk—it has serious consequences for her mission.\n\n## Complex Motivations\n\nHumans rarely act from a single, pure motivation. We're driven by conflicting desires, unconscious biases, past traumas, and competing values. Your characters should have similarly layered motivations.\n\nConsider the antagonist in *The Crystal Kingdom*. Lord Kaelen isn't simply seeking power for power's sake. He genuinely believes that the current distribution of crystal energy is unjust, and his methods, while extreme, stem from witnessing the suffering of his people under the current regime.\n\n## Growth Isn't Always Linear\n\nIn the classic Hero's Journey, character development follows a relatively straightforward trajectory. But real growth is messy. Characters should sometimes regress, fall back into old patterns, or learn the wrong lessons from their experiences.\n\nThis creates a more dynamic character arc and can surprise readers who have grown accustomed to predictable character development.\n\n## Supporting Characters Matter\n\nEven minor characters deserve motivations, agency, and development. A fully realized world is populated by individuals who all see themselves as the protagonists of their own stories.\n\nSome of the most touching feedback I've received from readers has been about supporting characters who appeared in just a handful of scenes but left a lasting impression because they felt like complete people.\n\n## Conclusion\n\nWhile archetypal patterns like the Hero's Journey provide useful frameworks, the most memorable characters transcend these patterns. They surprise us with their complexity, challenge us with their contradictions, and ultimately feel as nuanced and unpredictable as real people.\n\nIn my next post, I'll explore how culture and environment shape character, and how to ensure your characters feel like authentic products of the world you've built.",
    coverImage: "https://images.pexels.com/photos/3699259/pexels-photo-3699259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    tags: ["writing", "characters", "storytelling"],
  },
];

export const events: Event[] = [
  {
    id: "book-signing-nyc",
    title: "Book Signing: The Crystal Kingdom",
    description: "Join author J.R. Writer for a special book signing event celebrating the anniversary edition of The Crystal Kingdom. Q&A session followed by signing.",
    start: new Date("2025-01-15T14:00:00"),
    end: new Date("2025-01-15T16:00:00"),
    location: "Mysterious Galaxy Bookstore, New York City",
    url: "https://example.com/event1",
  },
  {
    id: "fantasy-con-panel",
    title: "FantasyCon Panel: Building Magical Systems",
    description: "J.R. Writer joins other fantasy authors to discuss approaches to creating consistent and engaging magic systems in fiction.",
    start: new Date("2025-02-20T10:30:00"),
    end: new Date("2025-02-20T12:00:00"),
    location: "FantasyCon 2025, San Diego Convention Center",
    url: "https://example.com/event2",
  },
  {
    id: "virtual-reading",
    title: "Virtual Reading & Discussion",
    description: "Online event featuring readings from the upcoming novel and live Q&A with fans.",
    start: new Date("2025-03-05T19:00:00"),
    end: new Date("2025-03-05T20:30:00"),
    url: "https://example.com/event3",
  },
  {
    id: "writing-workshop",
    title: "Fantasy Worldbuilding Workshop",
    description: "A hands-on workshop for aspiring fantasy writers. Learn techniques for developing immersive worlds, consistent magic systems, and compelling cultures.",
    start: new Date("2025-04-12T09:00:00"),
    end: new Date("2025-04-12T16:00:00"),
    location: "Portland Central Library",
    url: "https://example.com/event4",
  },
];