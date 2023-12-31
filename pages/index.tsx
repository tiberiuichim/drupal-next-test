import Head from "next/head";
import { GetStaticPropsResult, GetStaticPropsContext } from "next";
import { DrupalNode } from "next-drupal";

import { drupal } from "lib/drupal";
import { Layout } from "components/layout";
import { NodeArticleTeaser } from "components/node--article--teaser";

interface IndexPageProps {
  nodes: DrupalNode[];
}

export default function IndexPage({ nodes }: IndexPageProps) {
  return (
    <Layout>
      <Head>
        <title>Next.js for Drupal</title>
        <meta
          name="description"
          content="A Next.js site powered by a Drupal backend."
        />
      </Head>
      <div>
        <h1 className="mb-10 text-6xl font-black">Latest Articles.</h1>
        {nodes?.length ? (
          nodes.map((node) => (
            <div key={node.id}>
              <NodeArticleTeaser node={node} />
              <hr className="my-20" />
            </div>
          ))
        ) : (
          <p className="py-4">No nodes found</p>
        )}
      </div>
    </Layout>
  );
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<IndexPageProps>> {
  const nodes = await drupal.getResourceCollectionFromContext<DrupalNode[]>(
    "node--event",
    context,
    {
      params: {
        "filter[status]": 1,
        "filter[langcode]": "en",
        "fields[node--event]": "title,path,uid,created,content_translations",
        include: "uid", // field_image,uid
        sort: "-created",
      },
    }
  );

  return {
    props: {
      nodes,
    },
  };
}
