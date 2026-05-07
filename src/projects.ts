export interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    tags: string[];
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Jokes Viewer",
        description:
            "A simple app that fetches random jokes and lets users browse and copy them easily.",
        image: "./public/jokes.png",
        liveUrl: "https://random-joke-nova.netlify.app/",
        githubUrl: "https://github.com/yourusername/jokes-viewer",
        tags: ["React", "API", "UI"],
    },
    {
        id: 2,
        title: "Quotes Explorer",
        description:
            "Browse and search quotes with pagination and clean reading layout.",
        image: "./public/quotes.png",
        liveUrl: "https://quote-side.netlify.app/",
        githubUrl: "https://github.com/yourusername/quotes-explorer",
        tags: ["React", "Search", "Pagination"],
    },
    {
        id: 3,
        title: "Product Listing",
        description:
            "E-commerce style product grid with pagination, dynamic data and fallback handling.",
        image: "./public/products.png",
        liveUrl: "https://productlistingview.netlify.app/",
        githubUrl: "https://github.com/yourusername/product-listing",
        tags: ["React", "Grid", "API"],
    },
    {
        id: 4,
        title: "Video Explorer",
        description:
            "YouTube-style video listing interface with search and pagination.",
        image: "./public/utube.png",
        liveUrl: "https://youtubelistingfreeapi.netlify.app/",
        githubUrl: "https://github.com/yourusername/video-explorer",
        tags: ["React", "Media", "Search"],
    },
    {
        id: 5,
        title: "Auth System",
        description:
            "Complete authentication flow with register, login, logout and protected user state.",
        image: "./public/auth.png",
        liveUrl: "https://authenticationfreeapi.netlify.app/",
        githubUrl: "https://github.com/yourusername/auth-system",
        tags: ["Auth", "JWT", "React"],
    },
    {
        id: 6,
        title: "Random User Generator",
        description:
            "Generate random user profiles with realistic data for testing and development.",
        image: "./public/users.png",
        liveUrl: "https://randomuserinf.netlify.app/",
        githubUrl: "https://github.com/yourusername/random-user-generator",
        tags: ["React", "API", "UI"],
    },
    {
        id: 7,
        title: "Meals Listing",
        description:
            "Browse and search for delicious meals with detailed information and ratings.",
        image: "./public/meals.png",
        liveUrl: "https://recipie-list.netlify.app/",
        githubUrl: "https://github.com/yourusername/meals-listing",
        tags: ["React", "Search", "API"],
    },
    {
        id: 8,
        title: "Random Cat Explorer",
        description:
            "Explore and discover adorable cat images with detailed information.",
        image: "./public/random-cat.png",
        liveUrl: "https://random-meow.netlify.app/",
        githubUrl: "https://github.com/yourusername/random-cat-explorer",
        tags: ["React", "Images", "API"],
    },
];