"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Github,
  Star,
  GitFork,
  Code,
  Heart,
  Globe,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSourceProjects = [
  {
    id: 1,
    name: "Design to Code Magic",
    description:
      "Transform your designs into production-ready React components instantly with our AI-powered platform. No coding experience required - just upload your design and let AI do the magic!",
    icon: Code,
    image: "/projects/BUİLDİFY.jpeg",
    color: "bg-gradient-to-r from-purple-500 to-purple-600",
    features: [
      "AI destekli kod dönüşümü",
      "React component çıktısı",
      "Kolay kullanım",
      "Hızlı dönüşüm",
    ],
    githubUrl: "https://github.com/omtunclabs/buildfy",
    liveUrl: "https://buildfy.vercel.app/",
    stars: "45+",
    forks: "20+",
    tag: "AI",
  },
  {
    id: 2,
    name: "Markdown Resume Builder",
    description:
      "Transform your career story into a professional resume using our intuitive Markdown editor. No complex formatting needed.",
    icon: Code,
    image: "/projects/RESUME.jpeg",
    color: "bg-gradient-to-r from-green-500 to-green-600",
    features: [
      "Markdown desteği",
      "Profesyonel şablonlar",
      "Kolay düzenleme",
      "Anında önizleme",
    ],
    githubUrl: "https://github.com/omtunclabs/markdown-resume",
    liveUrl: "https://markdown-resume-builder.vercel.app/",
    stars: "35+",
    forks: "15+",
    tag: "Tool",
  },
  {
    id: 3,
    name: "JSON Formatter",
    description:
      "Online JSON formatter ve validator aracı. JSON verilerinizi kolayca formatlayın ve doğrulayın.",
    icon: Code,
    image: "/projects/JSONFORMATTER.png",
    color: "bg-gradient-to-r from-blue-500 to-blue-600",
    features: [
      "JSON formatlama",
      "JSON validasyon",
      "Kolay kullanım",
      "Hızlı sonuç",
    ],
    githubUrl: "https://github.com/omtunclabs/json-formatter",
    liveUrl: "https://json-formatter-pearl.vercel.app/",
    stars: "25+",
    forks: "10+",
    tag: "Tool",
  },
  {
    id: 4,
    name: "Text to NFT",
    description:
      "Turn your text into unique NFT art using AI. Generate and mint NFTs directly from text descriptions.",
    icon: Code,
    image: "/projects/TEXTNFT.png", 
    color: "bg-gradient-to-r from-pink-500 to-pink-600",
    features: [
      "AI art generation",
      "NFT minting",
      "Text to image",
      "Blockchain integration"
    ],
    githubUrl: "https://github.com/omtunclabs/text-to-nft",
    liveUrl: "https://text-to-nft-five.vercel.app/",
    stars: "20+",
    forks: "8+",
    tag: "AI"
  },
  {
    id: 5,
    name: "API Generator",
    description:
      "Hızlı API geliştirme için mock data ve API response oluşturucu. İstediğiniz formatta test verisi ve API yanıtları oluşturun.",
    icon: Code,
    image: "/projects/APIGENERATOR.png",
    color: "bg-gradient-to-r from-orange-500 to-orange-600", 
    features: [
      "Özelleştirilebilir API yanıtları",
      "Mock data oluşturma",
      "JSON/XML format desteği",
      "Hızlı entegrasyon"
    ],
    githubUrl: "https://github.com/omtunclabs/api-generator",
    liveUrl: "https://api-generator-ten.vercel.app/",
    stars: "15+",
    forks: "5+",
    tag: "Tool"
  }
];

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="flex-grow pt-16">
        {/* Hero Section */}

        {/* Projects Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openSourceProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500 border border-gray-100 group"
                >
                  {/* Project Image */}
                  <div className="relative">
                    <div className="relative h-[200px] w-full">
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/10" />
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-3">
                      <div className="flex items-center bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                        <Star className="w-4 h-4 mr-1 text-yellow-500" />
                        <span className="font-semibold text-sm">
                          {project.stars}
                        </span>
                      </div>
                      <div className="flex items-center bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full shadow-lg">
                        <GitFork className="w-4 h-4 mr-1 text-purple-500" />
                        <span className="font-semibold text-sm">
                          {project.forks}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`${project.color} w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <project.icon size={24} />
                      </div>
                      <span className="px-4 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">
                        {project.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center text-gray-700"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex space-x-3">
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        className="flex-1"
                      >
                        <Button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg py-2 text-sm">
                          <Github className="mr-2 w-4 h-4" /> GitHub
                        </Button>
                      </Link>
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        className="flex-1"
                      >
                        <Button className="w-full bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg py-2 text-sm">
                          <Globe className="mr-2 w-4 h-4" /> Demo
                        </Button>
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contribution Section */}
        <section className="py-24 bg-gradient-to-r from-purple-600 to-purple-800">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center justify-center mb-8">
                <Heart className="w-12 h-12 text-pink-400 animate-pulse" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
                Katkıda Bulunun
              </h2>
              <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                Açık kaynak projelerimize katkıda bulunarak yazılım dünyasına
                değer katın ve geleceği birlikte şekillendirelim.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Link href="https://github.com/omtunclabs" target="_blank">
                  <Button className="w-full sm:w-auto bg-white text-purple-700 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <Github className="mr-2" /> GitHub
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
