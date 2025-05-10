export const siteConfig = {
  name: "Vira Solenne",
  description: "Explore the fantasy world of bestselling author with interactive maps, 3D book showcases, and an AI companion to answer all your lore questions.",
  author: "Vira Solenne",
  author_obj: {
    name: "Vira Solenne",
    image: "https://i.ibb.co/gbjWNwGR/rachel-mcdermott-0f-N7-Fxv1e-WA-unsplash.jpg"
  },
  url: "https://fantasy-author.com",
  ogImage: "https://fantasy-author.com/og.jpg",
  keywords: [
    "fantasy",
    "author",
    "books",
    "writing",
    "storytelling",
    "interactive fiction",
    "fantasy world",
    "worldbuilding",
    "fantasy maps",
    "book series"
  ],
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Storyworld",
      href: "/storyworld",
    },
    {
      title: "Books",
      href: "/books",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Chat",
      href: "/chat",
    },
    {
      title: "Events",
      href: "/events",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ],
  links: {
    twitter: "https://twitter.com/fantasyauthor",
    instagram: "https://instagram.com/fantasyauthor",
    facebook: "https://facebook.com/fantasyauthor",
    goodreads: "https://goodreads.com/fantasyauthor",
  },
  newsletterFormAction: "/api/newsletter",
  bookSeries: [
    {
      title: "The Chronicles of Eldoria",
      books: [
        {
          id: "eldoria-1",
          title: "The Awakening",
          coverImage: "/images/books/eldoria-1.jpg",
          description: "When ancient powers stir in the kingdom of Eldoria, a young farmhand must embrace a destiny greater than they ever imagined.",
          releaseDate: "2021-05-15",
          amazonUrl: "https://amazon.com/book-1",
          goodreadsUrl: "https://goodreads.com/book-1",
        },
        {
          id: "eldoria-2",
          title: "The Shadow's Rise",
          coverImage: "/images/books/eldoria-2.jpg",
          description: "As darkness spreads across the land, our heroes must venture into the forbidden forests to uncover an ancient secret.",
          releaseDate: "2022-06-22",
          amazonUrl: "https://amazon.com/book-2",
          goodreadsUrl: "https://goodreads.com/book-2",
        },
        {
          id: "eldoria-3",
          title: "The Crystal Crown",
          coverImage: "/images/books/eldoria-3.jpg",
          description: "The final battle approaches as the fellowship journeys to the Crystal Mountains to claim the legendary crown.",
          releaseDate: "2023-08-10",
          amazonUrl: "https://amazon.com/book-3",
          goodreadsUrl: "https://goodreads.com/book-3",
        }
      ]
    },
    {
      title: "Tales of the Forgotten Realms",
      books: [
        {
          id: "forgotten-1",
          title: "The Lost City",
          coverImage: "/images/books/forgotten-1.jpg",
          description: "An archaeologist discovers a hidden city beneath the desert sands, unleashing ancient magic better left buried.",
          releaseDate: "2020-03-18",
          amazonUrl: "https://amazon.com/forgotten-1",
          goodreadsUrl: "https://goodreads.com/forgotten-1",
        },
        {
          id: "forgotten-2",
          title: "The Sorcerer's Apprentice",
          coverImage: "/images/books/forgotten-2.jpg",
          description: "A young apprentice must master forbidden spells to save their mentor from a curse that's slowly turning them to stone.",
          releaseDate: "2022-01-12",
          amazonUrl: "https://amazon.com/forgotten-2",
          goodreadsUrl: "https://goodreads.com/forgotten-2",
        }
      ]
    }
  ]
};