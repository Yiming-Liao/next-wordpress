/* eslint-disable @next/next/no-img-element */
"use client"

import useCarouselImages from "@/hooks/useCarouselImages";

const HomePage = () => {
  const { carouselImages, isLoading, error } = useCarouselImages();

  return (
    <main>
      <h1>Carousel Images</h1>
      {carouselImages &&
        carouselImages.map(carouselImage => (
          <div key={carouselImage}>
            <img src={carouselImage} alt="" />
          </div>
        ))
      }
    </main>
  )
}
export default HomePage;