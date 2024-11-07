import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ className, description, imagePath }) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl overflow-hidden group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent flex flex-col justify-center items-center",
        className
      )}
    >
      {/* Image Layer */}
      <div className="absolute inset-0 h-full transition-opacity duration-300 group-hover/bento:opacity-0">
        <img
          src={imagePath}
          alt="Grid Item Image"
          className="w-full h-full object-cover rounded-xl" // Add `rounded-xl` to round image corners
        />
      </div>

      {/* Text Layer */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center opacity-0 transition-opacity duration-300 transform group-hover/bento:opacity-100 group-hover/bento:translate-y-0 translate-y-4 ">
        <div className="font-sans font-bold text-white text-xl dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
