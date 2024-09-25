import { AnimatePresence, motion } from "framer-motion";
import { cn } from "./lib/utils";

export default function Accordion({
  index,
  expanded,
  setExpanded,
  question,
  answer,
}) {
  const isOpen = index === expanded;
  return (
    <motion.section
      initial={false}
      onClick={() => setExpanded(isOpen ? false : index)}
      className={cn("flex cursor-pointer flex-col py-4", index === 0 && "pt-3 sm:pt-4")}
    >
      <motion.h2
        className={cn(
          "hover:text-fuchsia-600 transition-all duration-300 py-2 pr-12 font-semibold leading-[1.15] sm:text-lg",
          isOpen
            ? "-"
            : "+",
        )}
      >
        {question}
      </motion.h2>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapse"
            animate="open"
            exit="collapse"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapse: { opacity: 0, height: 0 },
            }}
            transition={{
              duration: 0.3,
              ease: [0.04, 0.62, 0.23, 0.98],
            }}
            className="overflow-hidden"
          >
            <motion.div className="pb-2 pt-4 text-[0.915rem] leading-[1.425] sm:text-base sm:leading-normal">
              {answer}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}