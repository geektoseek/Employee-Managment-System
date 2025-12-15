const employees = [
    {
        id: 1,
        name: "Ali Raza",
        email: "e@e.com",
        password: "123",
        tasks: [
            {
                title: "Design Landing Page",
                description: "Create the hero section and layout.",
                date: "2025-12-12",
                category: "Design",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Fix Navbar Bug",
                description: "Mobile navbar not opening.",
                date: "2025-12-10",
                category: "Bug Fix",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Prepare UI Kit",
                description: "Build reusable UI components.",
                date: "2025-12-14",
                category: "UI",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ],
        activeTasks: 2,
        completedTasks: 1,
        failedTasks: 0,
        newTasks: 1
    },

    {
        id: 2,
        name: "Ahmed Khan",
        email: "employee2@example.com",
        password: "123",
        tasks: [
            {
                title: "API Integration",
                description: "Connect backend login API.",
                date: "2025-12-09",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Optimize Images",
                description: "Compress all website images.",
                date: "2025-12-11",
                category: "Optimization",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Footer Cleanup",
                description: "Remove unused links.",
                date: "2025-12-13",
                category: "Maintenance",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "SEO Basic Setup",
                description: "Add meta tags and alt text.",
                date: "2025-12-14",
                category: "SEO",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ],
        activeTasks: 2,
        completedTasks: 1,
        failedTasks: 1,
        newTasks: 1
    },

    {
        id: 3,
        name: "Bilal Hassan",
        email: "employee3@example.com",
        password: "123",
        tasks: [
            {
                title: "Create Dashboard Cards",
                description: "Design analytics card UI.",
                date: "2025-12-12",
                category: "Design",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Dark Mode Feature",
                description: "Add toggle and styles.",
                date: "2025-12-08",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Write Documentation",
                description: "Explain project setup.",
                date: "2025-12-15",
                category: "Documentation",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Fix 404 Page",
                description: "Broken image on error page.",
                date: "2025-12-10",
                category: "Bug Fix",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Deploy to Hosting",
                description: "Move final build to server.",
                date: "2025-12-16",
                category: "Deployment",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ],
        activeTasks: 3,
        completedTasks: 1,
        failedTasks: 1,
        newTasks: 1
    },

    {
        id: 4,
        name: "Zain Malik",
        email: "employee4@example.com",
        password: "123",
        tasks: [
            {
                title: "Write Unit Tests",
                description: "Add tests for auth module.",
                date: "2025-12-09",
                category: "Testing",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Refactor Components",
                description: "Improve code structure.",
                date: "2025-12-12",
                category: "Development",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Create Icons",
                description: "Make 10 SVG icons.",
                date: "2025-12-14",
                category: "Design",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ],
        activeTasks: 2,
        completedTasks: 1,
        failedTasks: 0,
        newTasks: 1
    },

    {
        id: 5,
        name: "Hamza Tariq",
        email: "employee5@example.com",
        password: "123",
        tasks: [
            {
                title: "Content Upload",
                description: "Upload 20 blog posts.",
                date: "2025-12-10",
                category: "Content",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Keyword Research",
                description: "Collect 50 trending keywords.",
                date: "2025-12-13",
                category: "SEO",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Fix Layout Shift",
                description: "CLS issue on mobile.",
                date: "2025-12-11",
                category: "Bug Fix",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            },
            {
                title: "Email Template Design",
                description: "Create a festive promo email.",
                date: "2025-12-14",
                category: "Design",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Social Media Banners",
                description: "Prepare Facebook and Insta banners.",
                date: "2025-12-15",
                category: "Graphics",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            }
        ],
        activeTasks: 3,
        completedTasks: 1,
        failedTasks: 1,
        newTasks: 1
    }
];


const admin = {
    id: 1,
    email: "admin@example.com",
    password: "123"
};

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return { employees, admin }

}