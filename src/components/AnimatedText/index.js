import { motion } from "framer-motion";

const MotionText = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-10 mb-20 text-[24px] sm:text-[20px] mb-[10px] text-center"
    >
      {children}
    </motion.div>
  );
};

export default function AnimatedText() {
  return (
    <div>
      <MotionText>
        <p>Құрметті қонақтар!</p>
        <p>Cіз(дер)ді қызымыз</p>
        <p>Томирисіміздің</p>
        <p>тұсау кесер тойына</p>
        <p>арналған салтанатты</p>
        <p>ақ дастарханымыздың</p>
        <p>қадірлі қонағы болуға</p>
        <p>шақырамыз!!!</p>
      </MotionText>
    </div>
  );
}
