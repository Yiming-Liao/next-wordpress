import apolloClient from "@/app/lib/apolloClient";
import { gql } from "@apollo/client";
import { useEffect, useState } from "react";

const useCarouselImages = () => {
    const [carouselImages, setCarouselImages] = useState<[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<Error | null>(null);

    const fetchData = async () => {
        setIsLoading(true);
        try {
            const { data } = await apolloClient.query({
                query: GET_CAROUSEL_IMAGES
            })
            // [] Image Urls
            setCarouselImages(data.carouselImages.nodes.map((node: NodeProps) => {
                return node.acfCarouselImageFields.acfcarouselimages.node.link
            }))
        } catch (error) {
            setError(error as Error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return { carouselImages, isLoading, error };
}
export default useCarouselImages;


const GET_CAROUSEL_IMAGES = gql`
  query GetCarouselImages {
    carouselImages {
      nodes {
        acfCarouselImageFields {
          acfcarouselimages {
            node {
              link
            }
          }
        }
      }
    }
  }
`;

interface NodeProps {
    acfCarouselImageFields: {
        acfcarouselimages: {
            node: {
                link: string
            }
        }
    }
}