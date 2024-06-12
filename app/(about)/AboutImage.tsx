"use client";
import { useQuery } from "@tanstack/react-query";
import { request, gql, GraphQLClient } from "graphql-request";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import useInterval from "@/utils/hooks/useInterval";
import { SetStateAction, useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import { ImageContainer } from "@/components/ImageContainer";
import { ImagesSlider } from "@/components/ImageSlider";

export default function AboutImage() {
  const query = `query about($id: String!) {
    about(id: $id) {
      biography {
        json
      }
      hoverPhoto{
        url
      }
      photosCollection {
        total
        items {
          url
        }
      }
  }
}`;
  const variables = {
    id: "4MXUZL1kYom5Ycxn8RhKBa",
  } as const;
  const [counter, setCounter] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);
  const [images, setImages] = useState<any[]>();
  useInterval(() => {
    if (counter < data?.about?.photosCollection?.items?.length - 1) {
      setCounter(counter + 1);
    } else {
      setCounter(0);
    }
  }, 7000);

  const { data, error, isLoading } = useQuery<any>({
    queryKey: ["about", variables?.id],
    queryFn: async () =>
      await request(
        `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
        query,
        variables,
        {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          "content-type": "application/json",
        }
      ),
  });

  useEffect(() => {
    if (data?.about?.photosCollection?.items?.length > 0) {
      const items: SetStateAction<any[] | undefined> = [];
      data?.about?.photosCollection?.items?.map((item: any) =>
        items.push(item?.url)
      );
      setImages(items);
    }
  }, [data]);
  console.log("data", images, data?.about?.hoverPhoto?.url);
  isLoading && <div>Loading...</div>;
  error && <div>error</div>;

  return (
    // <div className="relative w-full h-full">
    //   <AnimatePresence mode="wait">
    //     <MotionImage
    //       alt="bio image"
    //       src={
    //         !hover
    //           ? data?.about?.photosCollection?.items[counter]?.url
    //           : data?.about?.hoverPhoto?.url
    //       }
    //       fill
    //       initial={{ y: !hover ? -700 : 0, opacity: 0 }}
    //       animate={{ y: 0, opacity: 1 }}
    //       exit={{ y: !hover ? 700 : 0, opacity: 0 }}
    //       onMouseOver={() => setHover(true)}
    //       onMouseOut={() => setHover(false)}
    //     />
    //   </AnimatePresence>
    // </div>
    images && (
      <div
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        {!hover ? (
          <ImagesSlider className="h-[30rem] md:h-[50rem]" images={images} />
        ) : (
          // <div className="overflow-hidden w-full relative flex items-center justify-center h-[30rem] md:h-[50rem]">
          //   <Image
          //     alt="bio image"
          //     src={data?.about?.hoverPhoto?.url}
          //     fill
          //     className="image h-full w-full absolute inset-0 object-cover object-center"
          //   />
          // </div>
          <ImageContainer
            image={data?.about?.hoverPhoto?.url}
            alt="hover image"
            className="h-[30rem] md:h-[50rem]"
          />
        )}
        
      </div>
    )
  );
}