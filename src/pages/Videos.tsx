import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";

// Videos from public/Web, public/App, public/AI – served at /Web/, /App/, /AI/
const videoSections = [
  {
    title: "Web Development",
    folder: "Web",
    videos: ["1.mp4", "2.mp4", "3.mp4","4.mp4"],
  },
  {
    title: "AI Automation",
    folder: "AI",
    videos: ["1.mp4", "2.mp4", "3.mp4", "4.mp4", "5.mp4", "6.mkv"],
  },
  {
    title: "App Development",
    folder: "App",
    videos: ["1.mp4", "2.mp4", "3.mkv", "4.mkv"],
  },
];

const Videos = () => (
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

      {videoSections.map((section) => (
        <section key={section.folder} className="mb-16">
          <h2 className="font-display text-2xl font-semibold text-foreground mb-6 tracking-tight">
            {section.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {section.videos.map((file) => (
              <div key={file} className="glass rounded-lg overflow-hidden">
                <video
                  className="w-full aspect-video bg-black"
                  controls
                  preload="metadata"
                  src={`/${section.folder}/${file}`}
                  title={`${section.title} – ${file}`}
                >
                  <track kind="captions" />
                  Your browser does not support the video tag.
                </video>
                <p className="font-body text-sm text-muted-foreground p-3 truncate" title={file}>
                  {file}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
    <Footer />
  </div>
);

export default Videos;
