import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

const AI = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="container mx-auto px-6 py-24 max-w-4xl">
      <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-10 font-body text-sm">
        <ArrowLeft size={18} /> Back to Home
      </Link>
      <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
        AI <span className="gradient-text">Automation</span>
      </h1>
      <p className="font-body text-lg text-muted-foreground leading-[1.7]">
        Intelligent workflow automation that eliminates repetitive tasks and optimizes business processes using advanced AI systems.
      </p>
      <div className="mt-16 glass rounded-lg p-8">
        <p className="font-body text-muted-foreground">Content for AI automation projects and resources.</p>
      </div>
    </main>
    <Footer />
  </div>
);

export default AI;
