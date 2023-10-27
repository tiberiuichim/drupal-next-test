import { render } from "@testing-library/react";

import { NodeMeeting } from "components/node--meeting";
import { meetingNode } from "./fixtures";

test("Index page matches snapshot", () => {
  const { asFragment } = render(<NodeMeeting node={meetingNode} />);
  expect(asFragment()).toMatchSnapshot();
});
