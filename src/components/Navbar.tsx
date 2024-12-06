"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("anasayfa");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    const handleSectionVisibility = () => {
      const sections = [
        { id: "anasayfa", href: "/" },
        { id: "hizmetlerimiz", href: "/#hizmetlerimiz" },
        { id: "opensource", href: "/opensource" },
        { id: "projelerimiz", href: "/#projelerimiz" },
        { id: "biz-kimiz", href: "/#biz-kimiz" },
        { id: "iletisim", href: "/#iletisim" }
      ];

      // Check if we're on homepage
      const isHomePage = window.location.pathname === "/";

      if (isHomePage) {
        const current = sections.find((section) => {
          const element = document.getElementById(section.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            return rect.top <= 100 && rect.bottom >= 100;
          }
          return false;
        });

        if (current) {
          setActiveSection(current.id);
        }
      } else {
        // If not on homepage, set active based on current path
        const currentPath = window.location.pathname;
        const current = sections.find(section => section.href === currentPath);
        if (current) {
          setActiveSection(current.id);
        }
      }
    };

    window.addEventListener("scroll", () => {
      handleScroll();
      handleSectionVisibility();
    });

    // Initial check for active section
    handleSectionVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleSectionVisibility);
    };
  }, []);

  const navItems = [
    { name: "Anasayfa", href: "/", id: "anasayfa" },
    { name: "Hizmetlerimiz", href: "/#hizmetlerimiz", id: "hizmetlerimiz" },
    { name: "Open Source", href: "/opensource", id: "opensource" },
    { name: "Projelerimiz", href: "/#projelerimiz", id: "projelerimiz" },
    { name: "Biz Kimiz", href: "/#biz-kimiz", id: "biz-kimiz" },
    { name: "İletişim", href: "/#iletisim", id: "iletisim" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative overflow-hidden">
              <Image
                src="/omtun-nobg.png"
                alt="OMTUN Labs"
                width={64}
                height={64}
                className="transition-transform duration-300 group-hover:scale-110 filter invert"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-1.5 text-sm font-medium rounded-lg transition-all duration-300 group hover:bg-purple-50 ${
                  activeSection === item.name.toLowerCase()
                    ? "text-purple-600"
                    : "text-gray-600 hover:text-purple-600"
                }`}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
            <Button className="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-lg text-sm transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg h-8">
              <a
                href="https://wa.me/905531211493?text=Merhabalar%20hizmet%20almak%20istiyorum"
                className="flex items-center space-x-2"
              >
                <span>Bize Ulaşın</span>
              </a>
            </Button>
          </nav>

          <button
            className="md:hidden p-1.5 rounded-lg hover:bg-purple-50 transition-colors"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg pt-20"
          >
            <div className="container mx-auto px-4">
              <div className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-2 text-base font-medium text-gray-600 rounded-lg hover:bg-purple-50 hover:text-purple-600 transition-all"
                      onClick={toggleMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: 0.3 }}
                  className="pt-2"
                >
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-base transition-all duration-300">
                    <a href="https://wa.me/905531211493?text=Merhabalar%20hizmet%20almak%20istiyorum">
                      Bize Ulaşın
                    </a>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}