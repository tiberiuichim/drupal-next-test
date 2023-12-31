import {
  GetStaticPropsContext,
  GetStaticPathsResult,
  GetStaticPropsResult,
} from "next";
import Head from "next/head";
import { DrupalNode } from "next-drupal";

import { drupal } from "lib/drupal";
import { NodeArticle } from "components/node--article";
import { NodeBasicPage } from "components/node--basic-page";
import { NodeMeeting } from "components/node--meeting";
import { Layout } from "components/layout";

interface NodePageProps {
  resource: DrupalNode;
}

export default function NodePage({ resource }: NodePageProps) {
  if (!resource) return null;

  return (
    <Layout>
      <Head>
        <title>{resource.title}</title>
        <meta name="description" content="A Next.js site powered by Drupal." />
      </Head>
      {resource.type === "node--event" && <NodeMeeting node={resource} />}
      {resource.type === "node--page" && <NodeBasicPage node={resource} />}
      {resource.type === "node--article" && <NodeArticle node={resource} />}
    </Layout>
  );
}

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  // const RESOURCE_TYPES = ["node--event"];
  // context: GetStaticPropsContext
  // const paths = await drupal.getStaticPathsFromContext(RESOURCE_TYPES, context);
  // console.log(paths.map((p) => p.params));

  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(
  context: GetStaticPropsContext
): Promise<GetStaticPropsResult<NodePageProps>> {
  // console.log("pathcontext", context, drupal);
  // debugger;
  const path = await drupal.translatePathFromContext(context);

  if (!path) {
    return {
      notFound: true,
    };
  }

  const type = path.jsonapi.resourceName;

  let params = {};
  if (type === "node--article") {
    params = {
      include: "field_image,uid",
    };
  }

  const resource = await drupal.getResourceFromContext<DrupalNode>(
    path,
    context,
    {
      params,
    }
  );
  // console.log(resource);

  // At this point, we know the path exists and it points to a resource.
  // If we receive an error, it means something went wrong on Drupal.
  // We throw an error to tell revalidation to skip this for now.
  // Revalidation can try again on next request.
  if (!resource) {
    throw new Error(`Failed to fetch resource: ${path.jsonapi.individual}`);
  }

  // If we're not in preview mode and the resource is not published,
  // Return page not found.
  if (!context.preview && resource?.status === false) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      resource,
    },
  };
}
