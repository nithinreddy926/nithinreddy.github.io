const skillsData = [
    {
        category: "Machine Learning",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313-12.454z"></path>
            <path d="M17 4a2 2 0 0 0 2 2a2 2 0 0 0 -2 2a2 2 0 0 0 -2 -2a2 2 0 0 0 2 -2"></path>
            <path d="M19 11h2m-1 -1v2"></path>
        </svg>`,
        items: ["TensorFlow", "PyTorch", "Scikit-learn", "Deep Learning", "Computer Vision", "NLP","Generative AI"]
    },
    {
        category: "Programming",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M8 9l3 3l-3 3"></path>
            <path d="M16 9l-3 3l3 3"></path>
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
        </svg>`,
        items: ["Python", "JavaScript", "Java","React","Streamlit"]
    },
    {
        category: "Data",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3s-3.582-3-8-3s-8 1.343-8 3"></path>
            <path d="M4 6v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"></path>
            <path d="M4 12v6c0 1.657 3.582 3 8 3s8-1.343 8-3v-6"></path>
        </svg>`,
        items: ["SQL", "MongoDB", "Pandas", "NumPy", "Data Visualization", "Big Data","Plotly"]
    },
    {
        category: "Cloud & DevOps",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12"></path>
        </svg>`,
        items: ["Google Cloud Platform", "Docker", "Kubernetes", "MLOps"]
    }
];

const projectsData = [
    {
        title: "SWIFT - Budget Tracking Application",
        description: "Swift simplifies budgeting with expense tracking, insights, and personalized tips using SVM, helping users manage finances and maximize savings.",
        image: "https://images.unsplash.com/photo-1563212034-a3c52118cce2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        tags: ["Python", "Machine Learning", "SVM", "Budget Tracking"],
        github: "https://github.com/TejaswiMahadev/Budgettracking",
        demo: "https://swift-8coo.onrender.com/"
    },
    {
        title: "CURA - Healthcare Assistant",
        description: "CURA is an AI-powered healthcare chatbot offering instant symptom analysis, medication guidance, and doctor recommendations for personalized care.",
        image: "https://plus.unsplash.com/premium_photo-1732628348854-56a54f1da2ad?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGVhbHRoY2FyZSUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D",
        tags: ["Generative AI", "NLP", "Langchain"],
        github: "https://github.com/TejaswiMahadev/Cura",
        demo: "https://cura-jl65.onrender.com/"
    },
    {
        title: "ShowShuffle",
        description: "A Streamlit-based movie recommendation app using cosine similarity, offering personalized suggestions with an interactive and user-friendly interface.",
        image: "https://plus.unsplash.com/premium_photo-1709384735411-8a46e2410e54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWVzJTIwY2FydG9vbnxlbnwwfHwwfHx8MA%3D%3D",
        tags: ["Python", " Advanced Machine Learning", "Recommendation"],
        github: "https://github.com/TejaswiMahadev/ShowShuffle",
        demo: "https://showshuffle.onrender.com/"
    },

    {
        title : "Data Enrichment Tool",
        description : "The CSV Enrichment Tool automates data augmentation by extracting info via web searches and LLMs, enriching datasets with structured results.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YXxlbnwwfHwwfHx8MA%3D%3D",
        tags : ["Python","Generative AI","Web Scraping"],
        github : "https://github.com/TejaswiMahadev/CSV-Enrichment-Tool",
        demo : "https://csv-enrichment-tool.onrender.com/"
    },
    {
        title : "Yap",
        description : "This tool processes video files by transcribing audio using the Deepgram API, and replacing the original audio with AI-generated voice via the Eleven Labs API..",
        image: "https://plus.unsplash.com/premium_photo-1732475626820-29f5da234560?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1pYyUyMGNhcnRvb258ZW58MHx8MHx8fDA%3D",
        tags : ["Python","API's","Transcription"],
        github : "https://github.com/TejaswiMahadev/AudioToTextToSpeech",
    },
    {
        title : "Kexa!",
        description : "A comprehensive grievance portal app built with Streamlit, enabling users to file complaints, track their status, and analyze trends through interactive dashboards, sentiment analysis, and admin tools",
        image: "https://media.istockphoto.com/id/1065782522/photo/unhappy-and-disappointed-customer-giving-low-rating-and-negative-feedback-in-survey-poll-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=V_dlTRi0zDbXm9Pl35oD--ga7e7C57HvHFh6kiENkN4=",
        tags : ["Python","Natural Language Processing","Machine Learning"],
        github : "https://github.com/nithinreddy926/Kexa.",
        demo: "https://kexa.onrender.com/"
    }

];
