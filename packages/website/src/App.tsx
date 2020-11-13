/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Time from "time-passed";
import Item from "./components/Item";

function App() {
  // const [releases, setReleases] = React.useState<Record<string, any> | null>(
  //   null
  // );
  // React.useEffect(() => {
  //   async function run() {
  //     const myReleases = await (
  //       await fetch(`https://api.github.com/repos/facebook/react/releases`)
  //     ).json();
  //     console.log(myReleases);
  //     setReleases(myReleases)
  //   }
  //   run();
  // }, []);

  return (
    <main className="App">
      <h1>Time Passed</h1>
      <p>
        A library that helps you with showing the time passed since some other
        timestamp.
      </p>
      <h2>Examples</h2>
      <section
        css={css`
          padding-top: 20px;
        `}
      >
        <Item
          title="My example post"
          date={Time.getRelativeTime(Date.now()) ?? ""}
        >
          Consectetur labore sit sit occaecat est sunt excepteur nostrud officia
          aute culpa minim excepteur. Laborum aliquip reprehenderit occaecat in
          Lorem aute nulla magna. Elit ut proident sunt deserunt exercitation
          irure culpa id voluptate dolore amet ut eiusmod ex. Consequat
          consectetur elit non aliqua quis ullamco in eiusmod eu velit velit
          commodo dolore. Amet exercitation anim elit deserunt consectetur sit
          magna.
        </Item>
      </section>
    </main>
  );
}

export default App;
