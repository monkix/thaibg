export const config = {
    baseUrl: import.meta.env.VITE_BASE_URL
}

export const siteSeoBase = {
    title: 'Thai BG Database',
    description: 'Database for boardgames from Thai designers',
    keywords: 'boardgame, thailand, designer, database',
    canonical: import.meta.env ? import.meta.env.VITE_SITE_URL : 'https://thaibg.herokuapp.com'
};

export const siteSeoOpenGraphBase = {
    title: 'Thai BG Database',
    description: 'Database for boardgames from Thai designers',
    url: import.meta.env ? import.meta.env.VITE_SITE_URL : '',
    type: 'website',
    images: [
        {
            url: 'https://www.example.com/images/og-image.jpg',
            width: 850,
            height: 650,
            alt: 'Og Image Alt'
        }
    ]
};

export const siteSeoOpenGraphArticle = {
    type: 'article',
    article: {
        publishedTime: "2020-08-03T17:31:37Z",
        modifiedTime: "2020-08-20T09:31:37Z",
        expirationTime: "2025-12-21T17:31:37Z",
        section: "Section II",
        authors: [
          "https://www.example.com/authors/@firstnameA-lastnameA",
          "https://www.example.com/authors/@firstnameB-lastnameB",
        ],
        tags: ["Tag A", "Tag B", "Tag C"],
    }
}

export const siteSeoTwitter = {
    site: "@username",
    title: "Twitter Card Title",
    description: "Description of Twitter Card",
    image: "https://www.example.com/images/cover.jpg",
    imageAlt: "Alt text for the card!",
}
