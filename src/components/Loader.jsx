import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div style={{ perspective: "1000px" }}>
        <motion.div
          className="w-24 h-24 relative"
          initial={{ rotateX: 0, rotateY: 0 }}
          animate={{ rotateX: 360, rotateY: 360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 border border-white/10 rounded-xl"
              style={{
                transform: getFaceTransform(i),
                background: getGradient(i),
                backdropFilter: "blur(6px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: "bold",
              }}
            >
              {getLabel(i)}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

function getFaceTransform(i) {
  const size = 96;
  switch (i) {
    case 0: return `rotateY(0deg) translateZ(${size / 2}px)`;     // Front
    case 1: return `rotateY(180deg) translateZ(${size / 2}px)`;   // Back
    case 2: return `rotateY(90deg) translateZ(${size / 2}px)`;    // Right
    case 3: return `rotateY(-90deg) translateZ(${size / 2}px)`;   // Left
    case 4: return `rotateX(90deg) translateZ(${size / 2}px)`;    // Top
    case 5: return `rotateX(-90deg) translateZ(${size / 2}px)`;   // Bottom
    default: return "";
  }
}

function getGradient(i) {
    const gradients = [
      "linear-gradient(135deg, #1e3a8a, #2563eb)",       // Deep Blue
      "linear-gradient(135deg, #0f172a, #334155)",       // Slate
      "linear-gradient(135deg, #065f46, #0d9488)",       // Cool Teal
      "linear-gradient(135deg, #312e81, #6366f1)",       // Indigo Vibes
      "linear-gradient(135deg, #1e293b, #3b82f6)",       // Navy & Sky Blue
      "linear-gradient(135deg, #0f172a, #1d4ed8)",       // Dark Blue Duo
    ];
    return gradients[i % gradients.length];
  }
  

function getLabel(i) {
  const labels = ["BUILD", "LEARN", "CODE", "INSPIRE", "CREATE", "GROW"];
  return labels[i % labels.length];
}

export default Loader;
