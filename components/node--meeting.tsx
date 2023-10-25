import { DrupalNode } from "next-drupal"

interface NodeMeetingProps {
  node: DrupalNode
}

export function NodeMeeting({ node, ...props }: NodeMeetingProps) {
  return (
    <article {...props}>
      <h1 className="mb-4 text-6xl font-black leading-tight">{node.title}</h1>
      {node.body?.processed && (
        <div
          dangerouslySetInnerHTML={{ __html: node.body?.processed }}
          className="mt-6 font-serif text-xl leading-loose prose"
        />
      )}
    </article>
  )
}
