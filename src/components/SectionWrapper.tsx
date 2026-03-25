import { motion } from "motion/react";

const SectionWrapper = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-5"
  >
    {children}
  </motion.section>
);

export default SectionWrapper;
