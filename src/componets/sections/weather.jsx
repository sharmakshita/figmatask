import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { getWeather } from "../../services/weatherapi"

function TravelInsightSection() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    getWeather()
      .then((res) => {
        setData(res)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <section style={styles.section}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={styles.wrapper}
      >
        <span style={styles.tag}>TRAVEL INSIGHT</span>

        <h2 style={styles.title}>
          Live Weather Update
          <span style={styles.subTitle}>Mount Abu</span>
        </h2>

        {loading && <p style={styles.status}>Loading weather...</p>}
        {error && <p style={styles.status}>Failed to load weather</p>}

        {data && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            style={styles.card}
          >
            <h3 style={styles.cardTitle}>
              {data.weather[0].main}
            </h3>

            <p style={styles.cardValue}>
              {Math.round(data.main.temp)}°C
            </p>

            <p style={styles.cardInfo}>
              {data.weather[0].description}
            </p>

            <p style={styles.cardInfo}>
              Humidity: {data.main.humidity}%
            </p>

            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="weather icon"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  )
}

export default TravelInsightSection

const styles = {
  section: {
    padding: "140px 60px",
    background: "radial-gradient(circle at top, #1f2933, #020617)",
    color: "#fff",
  },
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },
  tag: {
    color: "#d1d5db",
    letterSpacing: "2px",
    fontSize: "14px",
    textTransform: "uppercase",
  },
  title: {
    fontSize: "48px",
    fontWeight: "600",
    margin: "12px 0 60px",
    lineHeight: "1.2",
  },
  subTitle: {
    display: "block",
    marginTop: "8px",
    fontSize: "56px",
    fontWeight: "700",
    color: "#fbbf24",
  },
  status: {
    marginTop: "20px",
    opacity: 0.7,
  },
  card: {
    margin: "0 auto",
    padding: "32px",
    maxWidth: "380px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.06)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.08)",
  },
  cardTitle: {
    fontSize: "20px",
    letterSpacing: "1px",
    color: "#d1d5db",
  },
  cardValue: {
    fontSize: "28px",
    fontWeight: "700",
    margin: "12px 0",
    color: "#fbbf24",
  },
  cardInfo: {
    fontSize: "14px",
    opacity: 0.8,
  },
}

