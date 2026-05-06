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
        image: "https://source.unsplash.com/800x450/?funny,comedy",
        liveUrl: "https://your-jokes-app.netlify.app",
        githubUrl: "https://github.com/yourusername/jokes-viewer",
        tags: ["React", "API", "UI"],
    },
    {
        id: 2,
        title: "Quotes Explorer",
        description:
            "Browse and search quotes with pagination and clean reading layout.",
        image: "https://source.unsplash.com/800x450/?quotes,books",
        liveUrl: "https://your-quotes-app.netlify.app",
        githubUrl: "https://github.com/yourusername/quotes-explorer",
        tags: ["React", "Search", "Pagination"],
    },
    {
        id: 3,
        title: "Product Listing",
        description:
            "E-commerce style product grid with pagination, dynamic data and fallback handling.",
        image: "https://source.unsplash.com/800x450/?shopping,ecommerce",
        liveUrl: "https://productlistingview.netlify.app",
        githubUrl: "https://github.com/yourusername/product-listing",
        tags: ["React", "Grid", "API"],
    },
    {
        id: 4,
        title: "Video Explorer",
        description:
            "YouTube-style video listing interface with search and pagination.",
        image: "https://source.unsplash.com/800x450/?youtube,video",
        liveUrl: "https://your-video-app.netlify.app",
        githubUrl: "https://github.com/yourusername/video-explorer",
        tags: ["React", "Media", "Search"],
    },
    {
        id: 5,
        title: "Auth System",
        description:
            "Complete authentication flow with register, login, logout and protected user state.",
        image: "https://source.unsplash.com/800x450/?security,login",
        liveUrl: "https://your-auth-app.netlify.app",
        githubUrl: "https://github.com/yourusername/auth-system",
        tags: ["Auth", "JWT", "React"],
    },
];