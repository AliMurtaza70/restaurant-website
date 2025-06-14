import Events from "./components/Events/events";
import Hero from "./components/hero/Hero";
import ImageGallery from "./components/imageGallery/ImageGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <Events />
      <ImageGallery />
    </>
  );
}
