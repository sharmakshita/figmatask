import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

const slides = [
  { image: "/hero1.jpg", subtitle: "NAKKI LAKE" },
  { image: "/hero2.jpg", subtitle: "GURU SHIKHAR" },
  { image: "/hero3.jpg", subtitle: "TOAD ROCK" },
]

const textVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
}

function HeroSection() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section style={styles.hero}>
      {/* Background image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          style={{
            ...styles.background,
            backgroundImage: `url(${slides[index].image})`,
          }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div style={styles.overlay} />

      {/* Content */}
      <motion.div
        style={styles.content}
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
              delayChildren: 0.4,
            },
          },
        }}
      >
        <motion.span variants={textVariant} style={styles.smallText}>
          Majestic
        </motion.span>

        <div style={styles.titleWrapper}>
          <motion.h1 variants={textVariant} style={styles.title}>
            Mount Abu
          </motion.h1>

          {/* Dynamic subtitle */}
          <AnimatePresence mode="wait">
            <motion.span
              key={slides[index].subtitle}
              initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              style={styles.highlight}
            >
              {slides[index].subtitle}
            </motion.span>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  )
}

export default HeroSection

const styles = {
  hero: {
    //position: "relative",
    height: "100vh",
    //width:"100%",
    overflow: "hidden",
  },
  background: {
    position: "absolute",
    inset: 0,
    backgroundSize: "cover",
    backgroundPosition: "center",
   
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
  },
  content: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: "4%",
    paddingTop :"12%",
    color: "#fff",
  },
  titleWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },
  smallText: {
    fontSize: "50px",
    fontWeight:"20",
    color: "#fbbf24",
  },
  title: {
    fontSize: "100px",
    fontWeight: "800",
    lineHeight: "1",
  },
  highlight: {
    fontSize: "40px",
    fontWeight:"50",
    color: "#fbbf24",
  },
}

