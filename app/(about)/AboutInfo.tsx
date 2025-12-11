"use client";
import { useQuery } from "@tanstack/react-query";
import { request, gql, GraphQLClient } from "graphql-request";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Link from "next/link";
import { contentfulConfig } from "@/config/contentful";

export default function AboutInfo() {
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
    id: contentfulConfig.aboutInfo,
  };

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

  isLoading && <div>Loading...</div>;
  error && <div>error</div>;

  return documentToReactComponents(data?.about?.biography?.json, {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mt-8 indent-4 text-justify">{children}</p>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <Link
          href={node?.data?.uri}
          target="_blank"
          className="text-theme hover:anchor-hover pointer-events-auto"
          title={node?.data?.uri}
        >
          {children}
        </Link>
      ),
    },
  });
}
