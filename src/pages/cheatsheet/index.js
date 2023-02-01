import { client } from "../../../config";

import Header from "../../components/Header/Header";

const Cheatsheet = () => {
  return (
    <>
      <Header>
        <title>Cheatsheet</title>
      </Header>
      <p>
        Create a new Bookmark by adding the link under the "/new" page, for
        example:
      </p>
      <ul>
        <li>- {`${client}/new/https://www.google.com`}</li>
      </ul>
      <p>
        This will create a new "temporary" Bookmark in the root area and not in
        any folder.
      </p>
      <hr />
      <p>
        To create a Bookmark with a title, add the title at the end of the
        Bookmark URL by prefixing it with "#naslov=", for example:
      </p>
      <ul>
        <li>
          - {`${client}/new/https://www.google.com#naslov=New Google Bookmark`}
        </li>
      </ul>
    </>
  );
};

// Flag for rendering the page with or without global Layout. Used for not rendering Layout on Login
Cheatsheet.withLayout = true;

export default Cheatsheet;
