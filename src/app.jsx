import { useEffect, useState } from "react";
import PodcastCard from "./Components/podcastCard";
import "./App.css";

/**
 * Main application component
 */
function App() {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPodcasts();
  }, []);

  /**
   * Fetch podcasts from API
   */
  async function fetchPodcasts() {
    try {
      const response = await fetch(
        "https://podcast-api.netlify.app"
      );

      if (!response.ok) {
        throw new Error("Failed to fetch podcasts");
      }

      const data = await response.json();

      setPodcasts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <h2 className="message">Loading podcasts...</h2>;
  }

  if (error) {
    return <h2 className="message">{error}</h2>;
  }

  if (!podcasts.length) {
    return <h2 className="message">No podcasts found.</h2>;
  }

  return (
    <main className="app">
      <header className="header">
        <h1>🎙️ Podcast Discovery</h1>
      </header>

      <section className="podcast-grid">
        {podcasts.map((podcast) => (
          <PodcastCard
            key={podcast.id}
            podcast={podcast}
          />
        ))}
      </section>
    </main>
  );
}

export default App;