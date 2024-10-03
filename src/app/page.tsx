"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Code,
  Laptop,
  Rocket,
  Users,
  Briefcase,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Tugtek Elektronik Danışmanlık",
    description:
      "Tugtek Elektronik Danışmanlık için geliştirilen modern ve işlevsel bir web sitesi.",
    imageUrl: "/tugtek.png",
  },
  {
    id: 2,
    name: "Elittur Taşımacılık ve Taksicilik",
    description:
      "Elittur taşımacılık ve taksicilik hizmetleri için özel olarak geliştirilen bir web platformu.",
    imageUrl: "/elittur.png",
  },
  {
    id: 3,
    name: "Ürün Takip Otomasyonu",
    description:
      "Ürünlerin stok ve takip işlemlerini kolaylaştıran yenilikçi bir otomasyon sistemi.",
    imageUrl: "/stoktakip.png",
  },
];

const Teams = [
  {
    name: "Tuna Bostancıbaşı",
    imageUrl: "/tuncer.jpeg",
    role: "Frontend/Mobil Developer",
  },
  {
    name: "Ömer Bağçabaşı",
    imageUrl: "/tuncer.jpeg",
    role: "Backend Developer",
  },
  {
    name: "Tuncer Bağçabaşı",
    imageUrl: "/tuncer.jpeg",
    role: "Full Stack Developer",
  },
];

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
};

export function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "projects", "about", "contact"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Link href="#" className="flex items-center space-x-2">
            <Image
              src="/omtun-nobg.png"
              alt="OMTUN Labs"
              width={96}
              height={96}
              style={{ filter: "invert(1)" }}
            />
          </Link>
          <nav className="hidden md:flex space-x-8">
            {["home", "services", "projects", "about", "contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className={`text-xl font-medium hover:text-purple-600 transition-colors ${
                    activeSection === item ? "text-purple-600" : "text-gray-800"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              )
            )}
          </nav>
          <Button className="hidden md:inline-flex text-white bg-purple-600 hover:bg-purple-700 border-transparent text-xl font-medium py-2 h-12">
            Bize Ulaşın
          </Button>
          <button className="md:hidden" onClick={toggleMenu}>
            {isMenuOpen ? (
              <X className="h-8 w-8" />
            ) : (
              <Menu className="h-8 w-8" />
            )}
          </button>
        </div>
      </motion.header>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-gray-50"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col items-center space-y-8 mt-16">
            {["home", "services", "projects", "about", "contact"].map(
              (item) => (
                <Link
                  key={item}
                  href={`#${item}`}
                  className="text-lg font-medium hover:text-purple-600 transition-colors"
                  onClick={toggleMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              )
            )}
            <Button variant="outline" onClick={toggleMenu}>
              Bize Ulaşın
            </Button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <main className="flex-grow pt-16">
        <section
          id="home"
          className="relative h-[60vh] bg-white overflow-hidden"
        >
           <div 
    className="absolute overflow-hidden"
    style={{
      clipPath: 'polygon(0 0, 100% 0, 65% 100%, 0% 100%)',
      backgroundColor: 'rgba(147, 51, 234, 0.3)', // Mor renk, düşük opaklık
      transform: 'skew(-15deg)',
      position: 'fixed',

      top: '0%',
      left: '-10%',
      right: '60%',
      bottom: '0%',
    }}
  />

          <div className="container mx-auto px-4 relative z-10 flex items-center justify-center h-full">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900"
              >
                <span className="typewriter">Geleceği Şekillendiren </span>
                <span className="text-purple-600">Yazılım Çözümleri</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-gray-700 mb-8"
              >
                OMTUN Labs ile dijital dönüşümünüzü hızlandırın ve rekabette öne
                geçin.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4"
              >
                <Button
                  size="lg"
                  className="text-lg px-8 bg-purple-600 text-white"
                >
                  Hizmetlerimiz
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-purple-700 text-purple-700"
                >
                  İletişime Geçin
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <AnimatedSection>
          <section id="services" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: Laptop,
                    title: "Web Geliştirme",
                    description: "Modern ve responsive web uygulamaları",
                  },
                  {
                    icon: Rocket,
                    title: "Mobil Uygulama",
                    description: "iOS ve Android için yenilikçi uygulamalar",
                  },
                  {
                    icon: Code,
                    title: "Özel Yazılım",
                    description: "İşletmenize özel yazılım çözümleri",
                  },
                ].map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white p-6 rounded-lg shadow-lg transition-shadow hover:bg-purple-200 hover:shadow-xl " // hover:bg-gray-200 eklendi
                  >
                    <service.icon className="h-12 w-12 text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {service.title}
                    </h3>
                    <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Projects Section */}
        <AnimatedSection>
          <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Projelerimiz
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                  <motion.div
                    key={project.id}
                    whileHover={{ y: -10, scale: 1.05 }}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                        {project.name}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* About Section */}
        <AnimatedSection>
          <section className="py-24 bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                  <div className="relative w-full aspect-square max-w-md mx-auto">
                    <Image
                      src="/omtun-nobg.png"
                      alt="OmtunLabs Team"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-2xl shadow-xl invert"
                    />
                    <div className="absolute -bottom-6 -right-6 bg-purple-600 text-white p-4 rounded-lg shadow-lg">
                      <p className="text-2xl font-bold">10+</p>
                      <p className="text-sm">Aktif Projeler</p>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 lg:pl-12">
                  <h2 className="text-4xl font-bold mb-6 text-gray-800">
                    OmtunLabs Hakkında
                  </h2>
                  <p className="text-xl mb-8 text-gray-600">
                    OmtunLabs, geleceğin teknolojilerini bugünden şekillendiren
                    yenilikçi bir yazılım şirketidir. Yapay zeka, blockchain ve
                    bulut bilişim alanlarında öncü çözümler sunarak,
                    işletmelerin dijital dönüşümüne öncülük ediyoruz.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-semibold mb-3 text-purple-600">
                        İnovasyon
                      </h3>
                      <p className="text-gray-600">
                        En son teknolojileri kullanarak müşterilerimize rekabet
                        avantajı sağlıyoruz.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="text-2xl font-semibold mb-3 text-purple-600">
                        Uzmanlık
                      </h3>
                      <p className="text-gray-600">
                        Deneyimli ekibimiz, karmaşık problemlere yaratıcı
                        çözümler üretiyor.
                      </p>
                    </div>
                  </div>
                  <Button className="bg-purple-600 text-white hover:bg-purple-700">
                    Ekibimizle Tanışın
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Teams Section */}
        <AnimatedSection>
  <section id="teams" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
        Takımımız
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Teams.map((member, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-500" // Süre 500ms olarak ayarlandı
          >
            <Image
              src={member.imageUrl}
              alt={member.name}
              layout="fixed"
              width={600}
              height={600}
              objectFit="cover"
              className="transition-transform duration-500 ease-in-out hover:scale-110" // Resim zoom geçişi 500ms
            />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {member.name}
              </h3>
              <div className="badge bg-purple-600 text-white p-2 rounded-full">
                <p>{member.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
</AnimatedSection>



        {/* Contact Section */}
        <AnimatedSection>
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">
                  Bize Ulaşın
                </h2>
                <p className="text-xl mb-12 text-center text-gray-600">
                  Projeleriniz veya sorularınız için bizimle iletişime geçin.
                  Size en kısa sürede dönüş yapacağız.
                </p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      placeholder="Adınız"
                      className="bg-white"
                    />
                    <Input
                      type="email"
                      placeholder="E-posta Adresiniz"
                      className="bg-white"
                    />
                  </div>
                  <Input type="text" placeholder="Konu" className="bg-white" />
                  <Textarea placeholder="Mesajınız" className="bg-white h-32" />
                  <div className="text-center">
                    <Button className="bg-purple-600 text-white hover:bg-purple-700">
                      Mesaj Gönder
                    </Button>
                  </div>
                </form>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Adres
                    </h3>
                    <p className="text-gray-600">
                      Teknoloji Vadisi, 34000 İstanbul, Türkiye
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      E-posta
                    </h3>
                    <p className="text-gray-600">info@omtunlabs.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Telefon
                    </h3>
                    <p className="text-gray-600">+90 (212) 555 0000</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      {/* Footer */}
      <footer className="bg-white text-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link href="#" className="flex items-center space-x-2">
                <Code className="h-8 w-8 text-purple-600" />
                <span className="text-2xl font-bold">OMTUN Labs</span>
              </Link>
            </div>
            <nav className="flex flex-wrap justify-center md:justify-end space-x-6 mb-6 md:mb-0">
              <Link
                href="#"
                className="hover:text-purple-600 transition-colors"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="#"
                className="hover:text-purple-600 transition-colors"
              >
                Kullanım Şartları
              </Link>
              <Link
                href="#"
                className="hover:text-purple-600 transition-colors"
              >
                İletişim
              </Link>
            </nav>
            <div className="text-sm text-gray-400">
              © 2024 OMTUN Labs. Tüm hakları saklıdır.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
