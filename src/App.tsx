import { useEffect, useState } from "react";
// IMPORT 1: Panggil Framer Motion
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import ProjectCard from "./components/ProjectCard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

// IMPORT 2: Kita hapus CSS lama, kita pakai Tailwind 100%

const App = () => {
  // 1. DATA ARRAY (Di luar App component)
  // Ini ibarat database mini kita, Pak. Nanti kalau ada project baru, tinggal nambah di sini.
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  const projects = [
    {
      id: 1,
      title: "Buku Istri",
      description:
        "Personal finance app for household budgeting & catering business tracker.",
      tags: ["React Native", "Supabase", "iOS & Android"],
      image:
        "https://images.unsplash.com/photo-1556155092-490a1ba16284?q=80&w=800&auto=format&fit=crop", // Contoh gambar placeholder dari Unsplash
      link: "#", // Nanti isi link APK atau case study
    },
    // Nambah project ketiga buat ngetes grid-nya
    {
      id: 2,
      title: "YS - Archive",
      description:
        "Minimalist portfolio showcasing frontend engineering & grayscale aesthetics.",
      tags: ["Framer Motion", "Minimalism", "Vite"],
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop", // Contoh gambar placeholder
      link: "#",
    },
    {
      id: 3,
      title: "MoodMate",
      description: "Mood sender application for couples.",
      tags: ["React Native", "FireBase", "Android"],
      image:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop", // Contoh gambar placeholder
      link: "#",
    },
  ];

  // CONFIG 1: Kita definisikan "container" variant untuk animasi berurutan
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // FIXED: Memberikan jeda 0.2 detik antar anak (child)
        delayChildren: 0.3, // Jeda awal sebelum animasi mulai
      },
    },
  };

  // CONFIG 2: Kita definisikan variant untuk tiap elemen anak
  const itemVariants = {
    hidden: { opacity: 0, y: 20 }, // JELASIN: Mulai dari pudar & agak ke bawah
    visible: {
      opacity: 1,
      y: 0, // FIXED: Selesai di posisi asli & pudar hilang
      transition: {
        duration: 0.8, // Durasi pudar 0.8 detik
        ease: [0.16, 1, 0.3, 1] as const, // JELASIN: Ease-out yang halus (cubic-bezier)
      },
    },
  };

  return (
    <div
    className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200 dark:bg-zinc-900 antialiased
    transition-colors duration-500"
    >
      <title>YS Archive | Frontend Engineer</title>
      {/* Navbar */}
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      {/* MAIN CONTENT: Menjadi motion.main */}
      <motion.main
        className="max-w-5xl mx-auto px-6 pt-40 pb-20"
        // Hubungkan container dengan variant-nya
        variants={containerVariants}
        initial="hidden" //  Keadaan awal
        animate="visible" // Keadaan akhir
      >
        <motion.section className="max-w-2xl">
          <motion.span
            className="text-zinc-400 text-sm font-medium tracking-widest uppercase mb-4 block dark:text-zinc-100"
            variants={itemVariants}
          >
            Frontend Developer
          </motion.span>

          <motion.h2
            className="text-5xl md:text-7xl font-light tracking-tighter leading-[1.1] mb-8 dark:text-zinc-600"
            variants={itemVariants}
          >
            Building clean, <br />
            <span className="text-zinc-400 font-serif italic dark:text-zinc-200">
              meaningful
            </span>{" "}
            web experiences.
          </motion.h2>

          <motion.p
            className="text-xl text-zinc-500 leading-relaxed font-light dark:text-zinc-300"
            variants={itemVariants}
          >
            Based in Yogyakarta. Transitioning from backend logic to the art of
            minimalist frontend engineering.
          </motion.p>
        </motion.section>

        {/* Grid Section */}
        <motion.section
          id="projects"
          className="w-full mt-8"
          variants={itemVariants}
        >
          <div className="flex items-center gap-4 mb-12">
            <h3
              className="text-xs uppercase tracking-widest text-zinc-400 font-medium leading-none
            dark:text-zinc-200"
            >
              Selected Works
            </h3>
            <div className="flex-1 h-[1px] bg-zinc-400"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.section>

        <div className="flex items-center gap-4 mb-12 mt-12">
          <h3 className="text-xs uppercase tracking-widest text-zinc-400 font-medium leading-none">
            About Me & Connect
          </h3>
          <div className="flex-1 h-[1px] bg-zinc-400"></div>
        </div>
        <motion.section className="grid grid-cols-3">
          {/* Foto Profil */}

          <div className="aspect-square">
            <img
              className="object-cover w-full h-full rounded-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-500"
              src="src/assets/fp.jpg"
            />
          </div>
          {/* Nama dan Contact Person */}
          <div className="col-span-2 flex flex-col justify-center pl-8 gap-3">
            <h3 className="text-4xl font-bold dark:text-zinc-100">
              Yeremia YSG Sutanto
            </h3>
            <p className="text-zinc-500">
              Profesional Programmer and Tech Enthusiast
              <br />
              From Back to the Front
            </p>
            {/* Kumpulan link social media/ github */}
            <div className="flex flex-row gap-6">
              <a
                href="https://github.com/yeremiay"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-400 hover:text-zinc-900 gap-2
                dark:text-zinc-300 dark:hover:text-zinc-100"
              >
                <FontAwesomeIcon icon={faGithub} /> GitHub
              </a>

              <a
                href="https://www.instagram.com/yeremiayudhas_/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-zinc-400 hover:text-zinc-900 gap-2
                dark:text-zinc-300 dark:hover:text-zinc-100"
              >
                <FontAwesomeIcon icon={faInstagram} />
                Instagram
              </a>
            </div>
          </div>
        </motion.section>

        {/* Get in Touch */}
        <div className="max-w-xl mt-8">
          <h1 className="text-3xl dark:text-zinc-300 font-serif">
            Get to know me
          </h1>
          <form className="flex flex-col gap-6 mt-4" action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value="0385ef43-6697-448d-b0e0-d362f8d8082d" />
            <input
              type="text"
              placeholder="Your Name"
              name="name"
              className="focus:outline-none pb-4 bg-transparent border-b border-zinc-800 focus:border-zinc-950 dark:border-zinc-400 dark:focus:border-zinc-200  dark:text-zinc-200 text-zinc-800"
              required
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="focus:outline-none pb-4 bg-transparent border-b border-zinc-800 focus:border-zinc-950 dark:border-zinc-400 dark:focus:border-zinc-200 dark:text-zinc-200 text-zinc-800"
              required
            ></input>
            <textarea
              placeholder="Your Thoughts"
              name="message"
              className="resize-none bg-transparent border-b border-zinc-800 focus:border-zinc-950 dark:border-zinc-400 dark:focus:border-zinc-200 dark:text-zinc-200 text-zinc-800"
            ></textarea>
            <button
              type="submit"
              className="bg-zinc-700 hover:bg-zinc-900 text-zinc-300 
            dark:bg-zinc-400 dark:hover:bg-zinc-200 dark:text-zinc-700 transition-all duration-300
            py-4 px-10 max-w-fit font-serif rounded-none"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="text-xs" /> Send
              Email
            </button>
          </form>
        </div>
      </motion.main>
      <Footer />
    </div>
  );
};

export default App;
