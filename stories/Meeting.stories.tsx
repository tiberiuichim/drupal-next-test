import type { Meta, StoryObj } from "@storybook/react";

import { NodeMeeting, NodeMeetingProps } from "./../components/node--meeting";

const meta: Meta<typeof NodeMeeting> = {
  title: "Content types/Meeting",
  component: NodeMeeting,
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded",
  },
};

const node = {
  type: "node--event",
  id: "a4c22a1e-afbc-41fb-828c-d531422dbb42",
  drupal_internal__nid: 6,
  drupal_internal__vid: 7,
  langcode: "en",
  revision_timestamp: "2023-10-24T10:07:59+00:00",
  revision_log: null,
  status: true,
  title: "88th meeting",
  created: "2023-10-24T10:07:59+00:00",
  changed: "2023-10-24T10:07:59+00:00",
  promote: false,
  sticky: false,
  default_langcode: true,
  revision_translation_affected: true,
  metatag: null,
  content_translations: [
    {
      label: "88th meeting",
      path: "/meetings/88th-meeting",
      langcode: "en",
    },
  ],
  path: {
    alias: "/meetings/88th-meeting",
    pid: 411,
    langcode: "und",
  },
  content_translation_source: "und",
  content_translation_outdated: false,
  body: null,
  field_date_notes: null,
  field_date_range: {
    value: "2021-01-01",
    end_value: "2021-01-01",
  },
  field_hide_date: null,
  field_number: 88,
  links: {
    self: {
      href: "https://test.multilateralfund.edw.ro/jsonapi/node/event/a4c22a1e-afbc-41fb-828c-d531422dbb42?resourceVersion=id%3A7",
    },
  },
  node_type: {
    type: "node_type--node_type",
    id: "debdfd21-142e-4367-942b-de1e01c9dda9",
    resourceIdObjMeta: {
      drupal_internal__target_id: "event",
    },
  },
  revision_uid: {
    type: "user--user",
    id: "8616acb9-b924-40eb-ab39-d85e29fcc54d",
    resourceIdObjMeta: {
      drupal_internal__target_id: 1,
    },
  },
  uid: {
    type: "user--user",
    id: "8616acb9-b924-40eb-ab39-d85e29fcc54d",
    resourceIdObjMeta: {
      drupal_internal__target_id: 1,
    },
  },
  field_content: [],
  relationshipNames: ["node_type", "revision_uid", "uid", "field_content"],
};

export default meta;
type Story = StoryObj<typeof NodeMeeting>;

export const Meeting: Story = {
  args: {
    node,
  },
};
