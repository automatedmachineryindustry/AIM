const Footer = () => (
  <footer className="relative border-t border-white/[0.06] py-12">
    <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-5">
      <img src="/logo.png" alt="AIM" className="h-8 w-auto max-w-[100px] object-contain" />
      <p className="font-body text-sm text-muted-foreground leading-[1.6] text-center md:text-left">
        © {new Date().getFullYear()} Automated Industrial Machinery. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
