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
        image: "./jokes.png",
        liveUrl: "https://random-joke-nova.netlify.app/",
        githubUrl: "https://github.com/Sulochan36/RandomJoke-FreeApi",
        tags: ["React", "API", "UI"],
    },
    {
        id: 2,
        title: "Quotes Explorer",
        description:
            "Browse and search quotes with pagination and clean reading layout.",
        image: "./quotes.png",
        liveUrl: "https://quote-side.netlify.app/",
        githubUrl: "https://github.com/Sulochan36/QuoteListing-FreeApi",
        tags: ["React", "Search", "Pagination"],
    },
    {
        id: 3,
        title: "Product Listing",
        description:
            "E-commerce style product grid with pagination, dynamic data and fallback handling.",
        image: "./products.png",
        liveUrl: "https://productlistingview.netlify.app/",
        githubUrl: "https://github.com/Sulochan36/ProductsListing--FreeApi",
        tags: ["React", "Grid", "API"],
    },
    {
        id: 4,
        title: "Video Explorer",
        description:
            "YouTube-style video listing interface with search and pagination.",
        image: "./utube.png",
        liveUrl: "https://youtubelistingfreeapi.netlify.app/",
        githubUrl: "https://github.com/Sulochan36/YoutubeVideosLisitng-FreeApi",
        tags: ["React", "Media", "Search"],
    },
    {
        id: 5,
        title: "Auth System",
        description:
            "Complete authentication flow with register, login, logout and protected user state.",
        image: "./auth.png",
        liveUrl: "https://authenticationfreeapi.netlify.app/",
        githubUrl: "https://github.com/Sulochan36/Authentication-FreeApi",
        tags: ["Auth", "JWT", "React"],
    },
    {
        id: 6,
        title: "Random User Generator",
        description:
            "Generate random user profiles with realistic data for testing and development.",
        image: "./users.png",
        liveUrl: "https://randomuserinf.netlify.app/",
        githubUrl: "https://github.com/Sulochan36/Randomuser-FreeAPI",
        tags: ["React", "API", "UI"],
    },
    {
        id: 7,
        title: "Meals Listing",
        description:
            "Browse and search for delicious meals with detailed information and ratings.",
        image: "./meals.png",
        liveUrl: "https://recipie-list.netlify.app/",
        githubUrl: "https://github.com/Sulochan36/MealsListing-FreeAPI",
        tags: ["React", "Search", "API"],
    },
    {
        id: 8,
        title: "Random Cat Explorer",
        description:
            "Explore and discover adorable cat images with detailed information.",
        image: "./random-cat.png",
        liveUrl: "https://random-meow.netlify.app/",
        githubUrl: "https://github.com/Sulochan36/Random-Cat-Viewer-FreeApi",
        tags: ["React", "Images", "API"],
    },
];