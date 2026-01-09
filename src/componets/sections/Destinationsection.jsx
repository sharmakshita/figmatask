import { motion } from "framer-motion"
import { useState } from "react"
import DestinationCard from '../sections/Destinationcard'

const data = [
  {
    title: "Dilwara Temples",
    description:
      "The Dilwara Temples are celebrated for their exquisite white marble carvings.",
    image: "/dilwara.jpg",
  },
  {
    title: "Nakki Lake",
    description: "A serene lake surrounded by lush hills.",
    image: "/nakki.jpg",
  },
  {
    title: "Sunset Point",
    description: "One of the best sunset views in Rajasthan.",
    image: "/sunset.jpg",
  },
  {
    title: "Achalgarh Fort",
    description: "Historic fort with panoramic views.",
    image: "/achalgarh.jpg",
  },
]

function DestinationsSection() {
  const [active, setActive] = useState(1)

  return (
    <section style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <span style={styles.tag}>DESTINATIONS</span>
        <h2 style={styles.title}>
          Top Destinations To Visit <br /> Mount Abu
        </h2>
      </motion.div>

<div style={styles.slider}>
  {data.map((item, index) => (
    <motion.div
      key={index}
      onClick={() => setActive(index)}
      animate={{
        x: (index - active) *-80,
          rotateY:
    index === active
      ? 0
      : index < active
      ? 18
      : -18,
  scale: index === active ? 1 : 0.9,
  opacity: index === active ? 1 : 0.7,
      }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      style={{ cursor: "pointer" }}
    >
      <DestinationCard {...item} active={index === active} />
    </motion.div>
  ))}
</div>


    </section>
  )
}

export default DestinationsSection

const styles = {
  section: {
   padding: "140px 60px",
    background:
      "radial-gradient(circle at top, #1f2933, #020617)",
    color: "#fff",
    overflow: "hidden",
    textAlign: "center",
  },
  tag: {
    color: "#d1d5db",
    letterSpacing: "2px",
    fontSize: "20px",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "48px",
    margin: "12px 0 80px",
    fontWeight: "600",
  },
  slider: {
    position: "relative",
    height: "480px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    perspective: "1200px",
  },
}
