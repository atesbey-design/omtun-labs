"use client";
import Image from "next/image";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/omtun-nobg.png"
              alt="OMTUN Labs"
              width={120}
              height={120}
              className="mb-4"
            />
            <p className="text-gray-400">
              Modern teknolojiler ile geleceği şekillendiriyoruz.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Hızlı Linkler</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#anasayfa" className="text-gray-400 hover:text-white transition-colors">
                  Anasayfa
                </Link>
              </li>
              <li>
                <Link href="#hizmetlerimiz" className="text-gray-400 hover:text-white transition-colors">
                  Hizmetlerimiz
                </Link>
              </li>
              <li>
                <Link href="/opensource" className="text-gray-400 hover:text-white transition-colors">
                  Open Source
                </Link>
              </li>
              <li>
                <Link href="#projelerimiz" className="text-gray-400 hover:text-white transition-colors">
                  Projelerimiz
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400">
              <li>İzmir, Türkiye</li>
              <li>info@omtunlabs.com</li>
              <li>+90 553 121 14 93</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Bizi Takip Edin</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Github size={24} />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <ExternalLink size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} OMTUN Labs. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
} 