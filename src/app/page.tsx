"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Star, GitFork, Code, Laptop, Rocket, Users, MessageSquare, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
  {
    id: 6,
    name: "Yapay Zeka Destekli Kod Oluşturma",
    description:
      "Yapay zeka destekli kod oluşturma, yazılım geliştirme süreçlerini hızlandırmak ve yazılım kalitesini artırmak için geliştirilen bir yazılımdır.",
    imageUrl: "/buildfy.png",
  },
  {
    id: 7,
    name: "CVFlow",
    description:
      "CVFlow, LinkedIn profilinizi profesyonel bir özgeçmişe dönüştürürken yapay zeka teknolojisinden faydalanarak CV'nizi optimize eden ve geliştiren yenilikçi bir platformdur.",
    imageUrl: "/projects/CVFLOW.png",
  },
];

const Teams = [
  {
    name: "Tuna Bostancıbaşı",
    imageUrl: "/tuna.png",
    role: "Frontend/Mobil Developer",
    github: "https://github.com/tunabdev",
    website: "https://tunabostancibasi.dev"
  },
  {
    name: "Ömer Bağçabaşı",
    imageUrl: "/omer.png",
    role: "Backend Developer",
    github: "https://github.com/omerbagci",
    website: "https://omerbagcibasi.dev"
  },
  {
    name: "Tuncer Bağçabaşı",
    imageUrl: "/tuncer.jpeg",
    role: "Full Stack Developer",
    github: "https://github.com/tuncerbagcibasi",
    website: "https://tuncerbagcibasi.dev"
  },
];

const openSourceProjects = [
 
  {
    id: 1,
    name: "Design to Code Magic",
    description: "Transform your designs into production-ready React components instantly with our AI-powered platform. No coding experience required - just upload your design and let AI do the magic!",
    icon: Code,
    image: "/projects/BUİLDİFY.jpeg",
    color: "bg-gradient-to-r from-purple-500 to-purple-600",
    features: [
      "AI destekli kod dönüşümü",
      "React component çıktısı", 
      "Kolay kullanım"
    ],
    githubUrl: "https://github.com/omtunclabs/buildfy",
    liveUrl: "https://buildfy.vercel.app/",
    stars: "45+",
    forks: "20+",
    tag: "AI"
  },
  {
    id: 2,
    name: "Markdown Resume Builder",
    description: "Transform your career story into a professional resume using our intuitive Markdown editor. No complex formatting needed.",
    icon: Code,
    image: "/projects/RESUME.jpeg",
    color: "bg-gradient-to-r from-green-500 to-green-600",
    features: [
      "Markdown desteği",
      "Profesyonel şablonlar",
      "Kolay düzenleme",
      "Anında önizleme"
    ],
    githubUrl: "https://github.com/omtunclabs/markdown-resume",
    liveUrl: "https://markdown-resume-builder.vercel.app/",
    stars: "35+",
    forks: "15+",
    tag: "Tool"
  },

  {
    id: 3,
    name: "JSON Formatter",
    description: "Online JSON formatter ve validator aracı. JSON verilerinizi kolayca formatlayın ve doğrulayın.",
    icon: Code,
    image: "/projects/JSONFORMATTER.png",
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    features: [
      "JSON formatlama",
      "JSON validasyon",
      "Kolay kullanım",
      "Hızlı sonuç"
    ],
    githubUrl: "https://github.com/omtunclabs/json-formatter",
    liveUrl: "https://json-formatter-pearl.vercel.app/",
    stars: "25+",
    forks: "10+",
    tag: "Tool"
  }
];



export default function Home() {
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

    try {
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
    } catch {
      setStatus("Failed to send message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, #e5e7eb 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float-delay" />
            <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" />
          </div>

          <div className="container mx-auto px-4 z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
              {/* Hero Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-600 font-medium text-sm mb-6">
                  <span className="animate-pulse mr-2">🚀</span> Yenilikçi Teknoloji Çözümleri
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
                  Dijital Dünyada{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    İnovasyon
                  </span>{" "}
                  ve{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                    Teknoloji
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl">
                  Modern teknolojiler ile işletmenizi geleceğe taşıyoruz. Web, mobil ve yazılım çözümleriyle yanınızdayız.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 text-lg rounded-xl group transition-all duration-300 transform hover:translate-y-[-2px]">
                    Projelerimizi İnceleyin 
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    className="bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 px-8 py-6 text-lg rounded-xl transition-all duration-300 transform hover:translate-y-[-2px]">
                    Bizimle İletişime Geçin
                  </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-16">
                  {[
                    { number: "17+", label: "Tamamlanan Proje" },
                    { number: "8+", label: "Mutlu Müşteri" },
                    { number: "5+", label: "Yıllık Deneyim" },
                    { number: "6+", label: "Open Source Projeler" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-purple-100 rounded-lg transform transition-transform group-hover:scale-105 group-hover:bg-purple-200" />
                      <div className="relative p-4">
                        <div className="text-4xl font-bold text-purple-600 mb-1">{stat.number}</div>
                        <div className="text-gray-600 font-medium">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex-1 relative"
              >
                <div className="relative w-full aspect-square max-w-[600px] mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-blue-100 rounded-[40px] transform rotate-6" />
                  <div className="absolute inset-0 bg-white rounded-[40px] shadow-2xl">
                    <Image
                      src="/omtun-nobg.png"
                      alt="OMTUN Labs Hero" 
                      fill
                      style={{ objectFit: "contain", filter: "invert(1)" }}
                      priority
                      className="p-8 hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-2xl shadow-xl transform rotate-6 hover:rotate-0 transition-transform duration-300">
                    <p className="text-2xl font-bold">15+</p>
                    <p className="text-sm">Aktif Proje</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

      
        </section>

        {/* Services Section */}
        <section id="hizmetlerimiz" className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Hizmetlerimiz
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern teknolojiler ve yenilikçi çözümlerle işletmenizi geleceğe taşıyoruz.
                </p>
            </motion.div>
              
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: Laptop,
                    title: "Web Geliştirme",
                  description: "Modern ve responsive web uygulamaları geliştiriyoruz. SEO dostu ve yüksek performanslı çözümler sunuyoruz.",
                  color: "bg-blue-500"
                },
                {
                  icon: Rocket,
                  title: "Mobil Uygulama",
                  description: "iOS ve Android platformları için native ve cross-platform mobil uygulamalar geliştiriyoruz.",
                  color: "bg-purple-500"
                  },
                  {
                    icon: Code,
                  title: "Yazılım Geliştirme",
                  description: "Özel yazılım çözümleri ile işletmenizin ihtiyaçlarına uygun sistemler geliştiriyoruz.",
                  color: "bg-green-500"
                  },
                  {
                    icon: Users,
                  title: "Danışmanlık",
                  description: "Teknoloji danışmanlığı ile dijital dönüşüm sürecinizde yanınızda oluyoruz.",
                  color: "bg-orange-500"
                },
                {
                  icon: MessageSquare,
                  title: "Teknik Destek",
                  description: "7/24 teknik destek ile sistemlerinizin sorunsuz çalışmasını sağlıyoruz.",
                  color: "bg-pink-500"
                },
                {
                  icon: ExternalLink,
                  title: "Sistem Entegrasyonu",
                  description: "Mevcut sistemlerinizi modern teknolojilerle entegre ediyor, verimliliğinizi artırıyoruz.",
                  color: "bg-indigo-500"
                }
                ].map((service, index) => (
                  <motion.div
                    key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group border border-gray-100"
                >
                  <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <service.icon size={32} />
                    </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        {/* Projects Section */}
        <section id="projelerimiz" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Projelerimiz
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Başarıyla tamamladığımız projelerle müşterilerimizin dijital dünyada öne çıkmasını sağlıyoruz.
              </p>
            </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                  <motion.div
                    key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl"
                  >
                    <div className="relative h-64 overflow-hidden">
                    <Image
                        src={project.imageUrl}
                        alt={project.name}
                      fill
                      style={{ objectFit: "cover" }}
                      className="group-hover:scale-110 transition-transform duration-300"
                      />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                    <p className="text-gray-200 mb-4">{project.description}</p>
                    <Button className="bg-white text-gray-900 hover:bg-gray-100">
                      Detayları İncele
                    </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

        {/* Team Section */}
        <section id="biz-kimiz" className="py-24 bg-white">
          <div className="container mx-auto px-4">
                    <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Biz Kimiz?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Uzman ekibimizle teknoloji dünyasında fark yaratıyoruz.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Teams.map((member, index) => (
                  <motion.div
                    key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 text-center group border border-gray-100"
                >
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden group-hover:scale-105 transition-transform">
                        <Image
                          src={member.imageUrl}
                          alt={member.name}
                          fill
                      style={{ objectFit: "cover" }}
                        />
                      </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">{member.name}</h3>
                  <p className="text-purple-600 mb-4">{member.role}</p>
                  <div className="flex justify-center space-x-4">
                    <Link href={member.github} target="_blank" className="text-gray-400 hover:text-purple-600 transition-colors">
                      <Github size={24} />
                    </Link>
                    <Link href={member.website} target="_blank" className="text-gray-400 hover:text-purple-600 transition-colors">
                      <ExternalLink size={24} />
                    </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
              {/* Open Source Section */}
        <section id="opensource" className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center px-4 py-2 bg-purple-50 rounded-full text-purple-600 font-medium text-sm mb-6">
                <Github className="w-4 h-4 mr-2" /> Open Source Projelerimiz
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                Açık Kaynak Katkılarımız
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Toplulukla birlikte geliştirdiğimiz açık kaynak projelerimizi keşfedin ve katkıda bulunun.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {openSourceProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={`${project.color} w-16 h-16 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-transform`}>
                      <project.icon size={32} />
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex items-center text-gray-600">
                        <Star className="w-5 h-5 mr-1" />
                        <span>{project.stars}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <GitFork className="w-5 h-5 mr-1" />
                        <span>{project.forks}</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900">{project.name}</h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Link href={project.githubUrl} target="_blank">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white group">
                      <Github className="mr-2 group-hover:scale-110 transition-transform" /> GitHub&apos;da İncele
                    </Button>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/opensource">
                <Button className="bg-white hover:bg-gray-50 text-purple-600 border-2 border-purple-600 px-8 py-6 text-lg rounded-xl transition-all duration-300 transform hover:translate-y-[-2px] group">
                  Tüm Projelerimizi İnceleyin
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="iletisim" className="py-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                İletişime Geçin
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Projeleriniz için bizimle iletişime geçin, en kısa sürede dönüş yapalım.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Input
                      type="text"
                      name="name"
                      placeholder="Adınız"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Input
                      type="email"
                      name="email"
                      placeholder="E-posta Adresiniz"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    />
                  </motion.div>
                  </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Konu"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Textarea
                    name="message"
                    placeholder="Mesajınız"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    rows={6}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="text-center"
                >
                    <Button
                      type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg"
                    >
                      Mesaj Gönder
                    </Button>
                </motion.div>
              </form>
              {status && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-6 text-center text-green-600"
                    >
                      {status}
                </motion.div>
              )}
            </div>
            </div>
          </section>

    
      </main>
      <Footer />
    </div>
  );
}
