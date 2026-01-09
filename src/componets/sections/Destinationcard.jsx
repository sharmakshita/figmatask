import { motion } from "framer-motion"

function DestinationCard({ title, description, image, active }) {
  return (
    <motion.div
      animate={{
        scale: active ? 1.05 : 0.9,
        opacity: active ? 1 : 0.6,
        rotateY: active ? 0 : -20,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        ...styles.card,
        backgroundImage: `url(${image})`,
        zIndex: active ? 5 : 1,
      }}
    >
      <div style={styles.overlay} />

      
      {active && (
        <div style={styles.arrow}>
          ↗
        </div>
      )}

      
      {active && (
        <div style={styles.content}>
          <h3 style={styles.title}>{title}</h3>
          <p style={styles.desc}>{description}</p>
        </div>
      )}
    </motion.div>
  )
}

export default DestinationCard

const styles = {
  card: {
    width: "320px",
    height: "440px",
    borderRadius: "22px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    overflow: "hidden",
    border: "3px solid rgba(255,255,255,0.15)",
    boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.1))",
  },
  arrow: {
    position: "absolute",
    top: "18px",
    right: "18px",
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "#000",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    zIndex: 2,
  },
  content: {
    position: "absolute",
    bottom: "24px",
    left: "24px",
    right: "24px",
    zIndex: 2,
  },
  title: {
    fontSize: "22px",
    fontWeight: "600",
  },
  desc: {
    marginTop: "8px",
    fontSize: "14px",
    color: "#e5e7eb",
    lineHeight: "1.4",
  },
}
