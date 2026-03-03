import React from "react";
import { motion } from "motion/react";

export default function WorkflowImageSection() {
  return (
    <section className="bg-[#020617] w-full min-h-[200vh] relative">
      {/* Sticky Wrapper */}
      <div className="sticky top-0 w-full h-[100vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-full flex items-center justify-center p-4 md:p-8"
        >
          <img
            src="/workflow-infographic.png"
            alt="Diagnuvo ED Workflow Infographic"
            className="w-full h-full object-contain object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
}
