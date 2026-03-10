import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, ChevronDown, ChevronUp } from "lucide-react";

type VideoItem = { file: string; title: string; description: string };

const videoSections = [
  {
    title: "Web Development",
    folder: "Web",
    alwaysOpen: false,
    videos: [
      {
        file: "1.mp4",
        title: "Alpha Omega – E-Commerce Platform",
        description: "Alpha Omega is a modern e-commerce platform designed for selling clothing, accessories, and fashion products online. The platform provides a seamless shopping experience with an elegant UI, optimized product browsing, and secure checkout workflows. It includes product catalog management, responsive design for all devices, and optimized performance to ensure smooth navigation for users.",
      },
      {
        file: "2.mp4",
        title: "SIOUGE – Premium Perfume E-Commerce Website",
        description: "SIOUGE is a luxury perfume e-commerce website built to showcase and sell premium fragrance collections. The platform focuses on elegant design and smooth user interaction to create a high-end online shopping experience. The website includes product showcases, detailed fragrance descriptions, category filtering, and responsive layouts.",
      },
      {
        file: "3.mp4",
        title: "Crestline Capital – Structured Bulk Buying Platform",
        description: "Crestline Capital is a financial platform designed to unlock builder-level pricing through structured bulk buying strategies. The website explains how investors and buyers can gain access to wholesale property pricing by participating in structured group purchases. The platform communicates complex financial models in a simplified digital interface.",
      },
      {
        file: "4.mp4",
        title: "Ammu's Pets & Kennels – Pet Marketplace Website",
        description: "Ammu's Pets & Kennels is a dedicated online platform for buying pets and accessing kennel services. The website provides a user-friendly interface where customers can explore available pets, learn about breeds, and connect with the kennel for purchases or inquiries. The platform focuses on clear information presentation and responsive design.",
      },
    ] as VideoItem[],
  },
  {
    title: "AI Automation",
    folder: "AI",
    alwaysOpen: false,
    videos: [
      {
        file: "1.mp4",
        title: "Post Office Analyzer – AI-Powered Queue & Efficiency Monitoring",
        description: "An AI automation system designed to improve operational efficiency in post offices. Using YOLO object detection and computer vision, the system monitors queues, analyzes customer flow, and evaluates employee performance in real time. It helps administrators optimize staffing and reduce customer waiting time.",
      },
      {
        file: "2.mp4",
        title: "Cafe Analyzer – Smart Customer Flow & Staff Efficiency System",
        description: "Applies AI and computer vision to improve operations in cafes and restaurants. Using YOLO-based object detection, the system monitors customer queues, table occupancy, and staff activity. Cafe managers can optimize staffing decisions and enhance customer service quality through real-time video analytics.",
      },
      {
        file: "3.mp4",
        title: "RAG-Based Q&A Document Analyzer",
        description: "An AI system that allows users to upload documents and ask questions directly about their content. Using Retrieval-Augmented Generation (RAG) techniques, the system retrieves relevant sections and generates accurate answers. This project demonstrates practical applications of AI in knowledge retrieval and document analysis.",
      },
      {
        file: "4.mp4",
        title: "AI Drawing Canvas Challenge (OpenCV)",
        description: "An AI-powered drawing and recognition system built with OpenCV. Users can draw shapes or write mathematical equations on a virtual canvas. The system interprets the drawings using computer vision and solves mathematical problems automatically. It showcases real-time image processing and AI-driven problem solving.",
      },
      {
        file: "5.mp4",
        title: "Blender Automation using MCP",
        description: "Demonstrates AI automation of 3D design workflows using MCP (Model Context Protocol). Users can enter a natural language prompt to open Blender and generate 3D models. The system also integrates automation workflows for LinkedIn and Gmail posting, allowing users to execute complex digital tasks with a single prompt.",
      },
      {
        file: "6.mkv",
        title: "Whack-A-Mole Game using OpenCV",
        description: "A computer vision based implementation of the classic Whack-A-Mole game using OpenCV. Players interact through camera input and motion detection, using physical gestures to control gameplay. The project demonstrates real-time computer vision processing and interactive AI-based gaming mechanics.",
      },
    ] as VideoItem[],
  },
  {
    title: "App Development",
    folder: "App",
    alwaysOpen: false,
    videos: [
      {
        file: "1.mp4",
        title: "RouteX Capital – AI-Powered Cross-Border Financial Intelligence",
        description: "A full-stack AI platform that analyzes and optimizes international financial transactions. It simulates how financial institutions evaluate transactions to identify the safest and most cost-efficient routes. Key capabilities include predicting tax evasion risk, aggregating global financial news with AI risk analysis (Gemini 2.5 Flash), calculating optimal routes, and visualizing financial routes through an interactive Flutter application.",
      },
      {
        file: "2.mp4",
        title: "Smart Classroom Assist – AI-Powered Education Platform",
        description: "An AI-powered education platform supporting teachers and students through intelligent classroom analytics. Teacher features include live classroom monitoring (YOLO/OpenCV), automated attendance, and engagement analytics. Student features include Manimator (AI doubt explanation through animations), AI question assistant, and automatic classroom summaries.",
      },
      {
        file: "3.mkv",
        title: "AL-AQL – Offline AI Assistant & Creative Engine",
        description: "An AI assistant platform designed to operate without an internet connection. Features include an AI chatbot, AI image generation, offline knowledge assistance, game generation using MCP, and WhatsApp-based automation for creating games and interactions. It demonstrates how AI systems can work locally while providing powerful creative and conversational capabilities.",
      },
      {
        file: "4.mkv",
        title: "Offline AI Chatbot with Document Intelligence",
        description: "An offline AI chatbot similar to ChatGPT that functions without internet connectivity. Users can upload documents and interact with them through natural language queries. The system retrieves relevant sections from uploaded files and generates accurate responses, demonstrating secure and private document analysis.",
      },
    ] as VideoItem[],
  },
];

const Videos = () => {
  const location = useLocation();
  const [openSection, setOpenSection] = useState<"web" | "ai" | "app" | null>(null);

  // Open the section that matches the URL hash when coming from homepage (e.g. /videos#web)
  useEffect(() => {
    const hash = location.hash.slice(1).toLowerCase();
    if (hash === "web" || hash === "ai" || hash === "app") {
      setOpenSection(hash);
      // Scroll the section into view after it expands
      const timer = setTimeout(() => {
        document.getElementById(`section-${hash}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.hash]);

  const toggleSection = (folder: string) => {
    if (folder === "Web") setOpenSection((s) => (s === "web" ? null : "web"));
    if (folder === "AI") setOpenSection((s) => (s === "ai" ? null : "ai"));
    if (folder === "App") setOpenSection((s) => (s === "app" ? null : "app"));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-6 py-24 max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 font-body text-sm">
          <ArrowLeft size={18} /> Back to Home
        </Link>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          All Projects <span className="gradient-text">Videos</span>
        </h1>
        <p className="font-body text-lg text-muted-foreground leading-[1.7] mb-16">
          Project videos from Web Development, AI Automation, and App Development.
        </p>

        {videoSections.map((section) => {
          const isOpen = section.alwaysOpen || (section.folder === "Web" && openSection === "web") || (section.folder === "AI" && openSection === "ai") || (section.folder === "App" && openSection === "app");
          const isClickable = !section.alwaysOpen;

          const sectionId = section.folder.toLowerCase();
          return (
            <section key={section.folder} id={`section-${sectionId}`} className="mb-12">
              {section.alwaysOpen ? (
                <h2 className="font-display text-2xl font-semibold text-foreground mb-6 tracking-tight">
                  {section.title}
                </h2>
              ) : (
                <button
                  type="button"
                  onClick={() => toggleSection(section.folder)}
                  className="w-full flex items-center justify-between font-display text-2xl font-semibold text-foreground mb-6 tracking-tight text-left hover:text-primary transition-colors py-2 -mx-2 px-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  aria-expanded={isOpen}
                >
                  {section.title}
                  {isClickable && (isOpen ? <ChevronUp className="shrink-0" size={24} /> : <ChevronDown className="shrink-0" size={24} />)}
                </button>
              )}

              {isOpen && (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {section.videos.map((item) => (
                    <div key={item.file} className="glass rounded-lg overflow-hidden">
                      <video
                        className="w-full aspect-video bg-black"
                        controls
                        preload="metadata"
                        src={`/${section.folder}/${item.file}`}
                        title={`${section.title} – ${item.file}`}
                      >
                        <track kind="captions" />
                        Your browser does not support the video tag.
                      </video>
                      <div className="p-4 space-y-2">
                        <p className="font-display font-semibold text-foreground text-sm tracking-tight">
                          {item.title}
                        </p>
                        <p className="font-body text-sm text-muted-foreground/90 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </main>
      <Footer />
    </div>
  );
};

export default Videos;
