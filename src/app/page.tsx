"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Code, Laptop, Rocket, Users, Menu, X } from "lucide-react";
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
  {
    id: 4,
    name: "İzmir Events",
    description:
      "İzmir Events, İzmir'deki etkinlikleri takip etmek ve bu etkinlikler hakkında bilgi almak için kullanılan bir platform.",
    imageUrl: "/izmirevent.jpeg",
  },
  {
    id: 5,
    name: "Otopark Yönetim Sistemi",
    description:
      "Otopark yönetim sistemi, otoparklarınızı daha verimli hale getirmek için geliştirilen bir yazılımdır.",
    imageUrl: "/otopark.png",
  },
  
];

const Teams = [
  {
    name: "Tuna Bostancıbaşı",
    imageUrl: "/tuna.png",
    role: "Frontend/Mobil Developer",
  },
  {
    name: "Ömer Bağçabaşı",
    imageUrl: "/omer.png",
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

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "Anasayfa",
        "Hizmetlerimiz",
        "Projelerimiz",
        "Biz Kimiz",
        "İletişime Geçin",
      ];
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setStatus("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus("Failed to send message.");
    }
  };

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
            {[
              "Anasayfa",
              "Hizmetlerimiz",
              "Projelerimiz",
              "Biz Kimiz",
              "İletişim",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`text-xl font-medium hover:text-purple-600 transition-colors ${
                  activeSection === item ? "text-purple-600" : "text-gray-800"
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </nav>
        
          <Button
         
          className="hidden md:inline-flex text-white bg-purple-600 hover:bg-purple-700 border-transparent text-xl font-medium py-2 h-12">
           <a href="https://wa.me/905531211493?text=Merhabalar%20hizmet%20almak%20istiyorum">Bize Ulaşın</a>
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
            {[
              "Anasayfa",
              "Hizmetlerimiz",
              "Projelerimiz",
              "Biz Kimiz",
              "İletişime Geçin",
            ].map((item) => (
              <Link
                key={item}
                href={`#${item}`}
                className="text-lg font-medium hover:text-purple-600 transition-colors"
                onClick={toggleMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
            <Button
              variant="outline"
              
            >
              <a href="https://wa.me/905531211493?text=Merhabalar%20hizmet%20almak%20istiyorum">Bize Ulaşın</a>
            </Button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <main className="flex-grow pt-16">
        <section
          id="anasayfa"
          className="relative h-[60vh] bg-white overflow-hidden"
        >
          <div
            className="absolute overflow-hidden"
            style={{
              clipPath: "polygon(0 0, 100% 0, 65% 100%, 0% 100%)",
              backgroundColor: "rgba(147, 51, 234, 0.3)", // Mor renk, düşük opaklık
              transform: "skew(-15deg)",
              position: "fixed",

              top: "0%",
              left: "-10%",
              right: "60%",
              bottom: "0%",
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
                <Link href="#hizmetlerimiz">
                  <Button
                    size="lg"
                    className="text-lg px-8 bg-purple-600 text-white"
                  >
                    Hizmetlerimiz
                  </Button>
                </Link>
                <Link href="#iletişim">
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-8 border-purple-700 text-purple-700"
                  >
                    İletişime Geçin
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <AnimatedSection>
          <section id="hizmetlerimiz" className="py-20 bg-gray-100 ">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 justify-center">
                {[
                  {
                    icon: Laptop,
                    title: "Web Geliştirme",
                    description: "Modern ve responsive web uygulamaları",
                  },
                  {
                    icon: Code,
                    title: "Bot Geliştirme",
                    description:
                      "Sektörünüze özel botlar geliştirmek için uzman ekibimiz",
                  },
                  {
                    icon: Users,
                    title: "Teknik Destek",
                    description:
                      "Müşterilerinize hızlı ve etkili teknik destek",
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
          <section id="projelerimiz" className="py-20 bg-white">
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
          <section id="bizkimiz" className="py-24 bg-gradient-to-b from-gray-100 to-gray-200">
            <div className="container mx-auto px-4">
              <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="w-full lg:w-1/2 mb-12 lg:mb-0 ">
                  <div className="relative w-full aspect-square max-w-md mx-auto bg-white hover:scale-105 transition-transform duration-500 ease-in-out">
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
                    OmtunLabs, uçtan uca projeler geliştirerek geleceğin
                    teknolojilerini bugünden şekillendiren yenilikçi bir yazılım
                    ajansıdır. Yapay zeka, blockchain, bulut bilişim ve daha
                    birçok alanda sunduğumuz öncü çözümlerle işletmelerin
                    dijital dönüşümüne öncülük ediyor, ihtiyaçlarına özel
                    yazılım çözümleri sunarak rekabetçi avantaj sağlamalarına
                    yardımcı oluyoruz.
                  </p>
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow-md transition transform hover:bg-gray-200 hover:shadow-lg hover:scale-105">
                      <h3 className="text-2xl font-semibold mb-3 text-purple-600">
                        İnovasyon
                      </h3>
                      <p className="text-gray-600">
                        En son teknolojileri kullanarak müşterilerimize rekabet
                        avantajı sağlıyoruz.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md transition transform hover:bg-gray-200 hover:shadow-lg hover:scale-105">
                      <h3 className="text-2xl font-semibold mb-3 text-purple-600">
                        Uzmanlık
                      </h3>
                      <p className="text-gray-600">
                        Deneyimli ekibimiz, karmaşık problemlere yaratıcı
                        çözümler üretiyor.
                      </p>
                    </div>
                  </div>
                  <Link href="#bizkimiz">
                  <Button className="bg-purple-600 text-white hover:bg-purple-700">
                    Ekibimizle Tanışın
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Teams Section */}
        <AnimatedSection>
          <section id="bizkimiz" className="py-20 bg-white">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                Takımımız
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Teams.map((member, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow transform hover:scale-105 duration-500 flex flex-col"
                    style={{ height: "100%" }} // Kartların aynı yükseklikte olmasını sağlar
                  >
                    <div className="w-full h-[450px] overflow-hidden">
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        layout="responsive"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6 text-center flex-grow">
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
          <section id="iletişim" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto bg-gray-100 rounded-lg p-8">
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">
                  Bize Ulaşın
                </h2>
                <p className="text-xl mb-12 text-center text-gray-600">
                  Projeleriniz veya sorularınız için bizimle iletişime geçin.
                  Size en kısa sürede dönüş yapacağız.
                </p>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      type="text"
                      name="name"
                      placeholder="Adınız"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <Input
                      type="email"
                      name="email"
                      placeholder="E-posta Adresiniz"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Konu"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                  <Textarea
                    name="message"
                    placeholder="Mesajınız"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white h-32"
                    required
                  />
                  <div className="text-center">
                    <Button
                      type="submit"
                      className="bg-purple-600 text-white hover:bg-purple-700"
                    >
                      Mesaj Gönder
                    </Button>
                  </div>
                  {
                    <p
                      className={`text-center mt-4 ${
                        status === "Message sent successfully!"
                          ? "text-green-500"
                          : "text-red-500"
                      }`}
                    >
                      {status}
                    </p>
                  }
                </form>
                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Adres
                    </h3>
                    <p className="text-gray-600">
                      Bosna Hersek Mahallesi, Konya, Türkiye
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      E-posta
                    </h3>
                    <p className="text-gray-600">omtunlabs@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-800">
                      Telefon
                    </h3>
                    <p className="text-gray-600">+90 553 121 14 93</p>
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
