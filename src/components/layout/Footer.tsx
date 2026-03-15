import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-superior-blue-dark text-superior-mist-light pt-24 pb-12 border-t border-superior-slate-dark/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="font-serif text-3xl font-bold tracking-tight text-white">
                Superior
              </span>
            </Link>
            <p className="text-superior-slate-light mb-8 max-w-sm font-medium leading-relaxed">
              The calm of efficient, secure Roblox management. Built for client groups that need structure, scale, and confidence.
            </p>
            <div className="flex items-center gap-4 text-superior-slate-light">
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="Github">
                <Github size={20} />
              </a>
              <a href="mailto:hello@superior.com" className="hover:text-white transition-colors" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Products</h4>
            <ul className="space-y-4">
              <li><Link href="/features#applications" className="text-superior-slate-light hover:text-white transition-colors text-sm">AI Applications</Link></li>
              <li><Link href="/features#rank-centers" className="text-superior-slate-light hover:text-white transition-colors text-sm">AI Rank Centers</Link></li>
              <li><Link href="/features#interviewers" className="text-superior-slate-light hover:text-white transition-colors text-sm">AI Interviewers</Link></li>
              <li><Link href="/features#training" className="text-superior-slate-light hover:text-white transition-colors text-sm">AI Training Centers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-superior-slate-light hover:text-white transition-colors text-sm">About Us</Link></li>
              <li><Link href="/pricing" className="text-superior-slate-light hover:text-white transition-colors text-sm">Pricing</Link></li>
              <li><Link href="/enterprise" className="text-superior-slate-light hover:text-white transition-colors text-sm">Enterprise</Link></li>
              <li><Link href="/contact" className="text-superior-slate-light hover:text-white transition-colors text-sm">Contact Sales</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy" className="text-superior-slate-light hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-superior-slate-light hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              <li><Link href="/security" className="text-superior-slate-light hover:text-white transition-colors text-sm">Security</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-superior-slate-dark/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-superior-slate-light">
            &copy; {currentYear} Superior Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-superior-slate-light">
            <span>Built for scale.</span>
            <span className="hidden md:inline-block w-1.5 h-1.5 rounded-full bg-superior-pine"></span>
            <span>Inspired by the North Shore.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}