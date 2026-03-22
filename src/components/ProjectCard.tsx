import { motion } from "framer-motion";

const ProjectCard = ({ project }: { project: any }) => (
  <motion.a
    href={project.link}
    className="group block w-full space-y-4" //Group block penting untuk hover effect
    variants={{
      hidden: { opacity: 0, y: 10 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    {/* IMAGE CONTAINER: aspect-[16/9] (Rasio TV), overflow-hidden biar gambar gak meluber */}
    <div className="aspect-[16/9] w-full overflow-hidden bg-zinc-50 border border-zinc-100 rounded-lg">
      <img
        src={project.image}
        alt={project.title}
        //transition-all 500ms ease-out (perubahan halus). grayscale (abu-abu). group-hover:grayscale-0 (berwarna saat di-hover).
        className="w-full h-full object-cover grayscale opacity-90 transition-all duration-500 ease-out group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105"
      />
    </div>

    {/* TEXT GROUP: pt-2 (jarak dari gambar) */}
    <div className="pt-2">
      {/* TITLE: text-lg, font-medium, leading-tight */}
      <h4
        className="text-lg font-medium tracking-tight text-zinc-900 leading-tight
      dark:text-zinc-100"
      >
        {project.title}
      </h4>
      {/* DESCRIPTION: text-sm, text-zinc-500 (kontras rendah), leading-relaxed */}
      <p
        className="text-sm text-zinc-500 leading-relaxed font-light mt-1.5 mb-3
      dark:text-zinc-400"
      >
        {project.description}
      </p>

      {/* TAGS: Flex gap-2 buat tag-tag kecil */}
      <div className="flex gap-2 flex-wrap">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] uppercase tracking-widest text-zinc-700 px-3 py-1 border border-zinc-800 rounded-full font-medium
            dark:text-zinc-100"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

export default ProjectCard;
