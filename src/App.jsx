import Card from "./components/Card"
import swPosterImg from "./assets/sw-poster.jpg"
import rotjPosterImg from "./assets/rotj-poster.jpg"
import esbPosterImg from "./assets/esb-poster.jpg"

export default function App() {
  return (
    <>
      <Card
        title='Pôster: Star Wars (1977)'
        posterImg={swPosterImg}
      />

      <Card
        title='Pôster: Empire Strikes Back (1980)'
        posterImg={rotjPosterImg}
      />

      <Card
        title='Pôster: Return of the Jedi (1983)'
        posterImg={esbPosterImg}
      />
    </>
  )
}