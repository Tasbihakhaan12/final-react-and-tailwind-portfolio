// Edit links, skills, projects and certificates here
export const links = {
  github: "https://github.com/tasbihakhaan12",
  instagram: "https://instagram.com/shadowstack.tech",
  youtube: "https://youtube.com/@tabixdeveloper579",
  linkedin: "https://linkedin.com/in/tasbihazaman",
  vercel: "https://vercel.com/tasbihazaman162-9996",
  email: "tasbihakhaan12@gmail.com",
  whatsapp: "https://wa.me/923131181829?text=Hello%20Tasbiha%2C%20I%20found%20your%20portfolio.",
};
export const handles = { github: "Tasbihakhaan12", linkedin: "tasbihazaman", instagram: "shadowstack.tech", youtube: "@tabixdeveloper579", vercel: "tasbihazaman162-9996", whatsapp: "Chat with me on WhatsApp" };

export const skills = [
  { name: "HTML", level: 100 }, { name: "CSS", level: 100 }, { name: "JavaScript", level: 95 },
  { name: "Bootstrap", level: 100 }, { name: "React JS", level: 70 }, { name: "Tailwind CSS", level: 90 },
  { name: "Firebase", level: 100 }, { name: "API Integration", level: 50 }, { name: "Python", level: 70 },
  { name: "UI / UX Design", level: 90 }, { name: "Canva Design", level: 70 }, { name: "MS Excel", level: 60 },
  { name: "MS Word", level: 60 }, { name: "MS PowerPoint", level: 60 }, { name: "management", level: 80 }
];

// Project thumbnails live in public/images/projects/
const gh = "https://github.com/tasbihakhaan12/";
const live = "https://tasbihakhaan12.github.io/";
const img = (n) => `images/projects/${n}.jpg`;
export const projects = [
  { slug: "quick-server", title: "Quick Server", desc: "Hosting landing page with light and dark UI, feature cards and live stats.", image: img("quick-server"), code: gh + "quick-server", demo: live + "quick-server/", tags: ["React", "Tailwind"] },
  { slug: "spotify-clone", title: "Spotify Clone", desc: "Music streaming dashboard with playlists, search and a full player bar.", image: img("spotify-clone"), code: gh + "Spotify-clone", demo: live + "Spotify-clone/", tags: ["HTML", "CSS", "JS"] },
  { slug: "ecommerce-website", title: "ShopEase Store", desc: "Modern lifestyle marketplace with categories, best sellers and a cart.", image: img("ecommerce-website"), code: gh + "Ecommerce-website", demo: live + "Ecommerce-website/", tags: ["HTML", "CSS", "JS"] },
  { slug: "figma-pro", title: "Figma Pro", desc: "Collaborative design workspace dashboard built from a Figma concept.", image: img("figma-pro"), code: gh + "figma-pro", demo: live + "figma-pro/", tags: ["Figma", "CSS"] },
  { slug: "ramzan-web", title: "Ramzan Web", desc: "Bilingual Ramadan guide with schedules, duas and everyday tools.", image: img("ramzan-web"), code: gh + "ramzan-web", demo: live + "ramzan-web/", tags: ["HTML", "CSS", "JS"] },
  { slug: "coffeweb", title: "Aurora Betab Cafe", desc: "Warm, inviting cafe website with a bold hero and social links.", image: img("coffeweb"), code: gh + "coffeweb", demo: live + "coffeweb/", tags: ["HTML", "CSS", "JS"] },
  { slug: "presentation-css", title: "CSS Presentation", desc: "An animated CSS presentation with bold backgrounds, gradients and smooth effects.", image: img("presentation-css"), code: gh + "presentation_css", demo: live + "presentation_css/", tags: ["HTML", "CSS"] },
  { slug: "youtube-clone", title: "YouTube Clone", desc: "A modern video platform interface with sidebar, video grid and clean layout.", image: img("youtube-clone"), code: gh + "project_07", demo: live + "project_07/", tags: ["React", "CSS"] },
  { slug: "restaurant-site", title: "Food Review Website", desc: "A restaurant and food review website with rich visuals and an elegant layout.", image: img("restaurant-site"), code: gh + "project-05", demo: live + "project-05/", tags: ["HTML", "CSS", "JS"] },
];

// Only genuine certificates. To add one: put the image in public/images/ and add a line here.
export const certificates = [
  { title: "HTML Essentials", issuer: "Cisco Networking Academy · Saylani", date: "20 Jan 2026", image: "images/cert-html-cisco.png" },
  { title: "CSS Essentials", issuer: "Cisco Networking Academy · Saylani", date: "28 Mar 2026", image: "images/cert-css-cisco.png" },
  { title: "Python Essentials 1", issuer: "Cisco Networking Academy · Python Institute", date: "05 Mar 2026", image: "images/cert-python-cisco.png" },
  { title: "FemHack-2026 Hackathon", issuer: "Saylani IT Training Programme · 8 Hours", date: "2026", image: "images/cert-hackathon.png" },
];

export const skillsIntro = "I am a frontend developer who works comfortably across code and design. I build responsive interfaces with HTML, CSS, JavaScript, React and Tailwind CSS, shape them with a strong eye for UI and UX, and support every project with practical design and office tools such as Canva, Excel, Word and PowerPoint.";

export const story = [
  "Everything I have built so far, I built through struggle. Web development did not come to me easily, and there was no shortcut. I learned it slowly, one project and one mistake at a time, and I did all of it with my own effort.",
  "Until today I have not shared this with anyone. Even now I feel I have achieved only a small part of what I want to, because I believe life does not have to hand you everything at once. Being a good human being matters. Money matters too. But life itself matters more, and the support of family matters most of all.",
  "I have a clear dream: to build a cafe and a hospital of my own, places that serve people. I am working toward it day and night, and I need your prayers on the way.",
  "I have never defined myself in front of any teacher or sir, because I know I still have a great deal to do. Time is short and the road is hard, but I will keep going until I have built it all.",
];

export const reviews = [
  { name: "Sara", role: "Friend", avatar: "https://i.pravatar.cc/150?img=47", local: "sara", text: "May you be successful in your life, Tasbiha. Your dedication is inspiring, and I am sure you will achieve everything you dream of." },
  { name: "Alishba", role: "Classmate", avatar: "https://i.pravatar.cc/150?img=44", local: "alishba", text: "Wishing you a very happy and successful life. Keep working hard and keep shining, because you truly deserve every success." },
  { name: "Elvish Shah", role: "Colleague", avatar: "https://i.pravatar.cc/150?img=12", local: "elvish-shah", text: "Your work shows real passion and discipline. May you achieve all your goals and stay as determined as you are today." },
  { name: "Rutaba", role: "Friend", avatar: "https://i.pravatar.cc/150?img=49", local: "rutaba", text: "I wish you endless happiness and success. You are talented and hardworking, and I know you will go very far in life." },
  { name: "Amrata", role: "Classmate", avatar: "https://i.pravatar.cc/150?img=45", local: "amrata", text: "Stay happy and keep achieving. Everything you have worked for will come true, and I am proud to see how far you have come." },
];
