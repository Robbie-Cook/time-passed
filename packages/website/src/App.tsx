/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Time from "time-passed";
import Item from "./components/Item";
import hljs from "highlight.js";
import 'highlight.js/styles/github.css';

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

  // Add code highlighting
  React.useEffect(() => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block as HTMLElement);
    });
  }, []);

  return (
    <main className="App">
      <h1>Time Passed</h1>
      <p>
        A library that helps you with showing the time passed since some other
        timestamp.
      </p>
      <h2 id="usage">Usage</h2>
      <h3>Import</h3>
      <pre>
        <code>import Time from "time-passed";</code>
      </pre>
      <p>or in ES5</p>
      <pre>
        <code>const Time = require("time-passed").default;</code>
      </pre>

      <h3>Running</h3>
      <pre>
        <code>Time.getRelativeTime(Date.now());</code>
      </pre>

      <h2 id="examples">Examples</h2>
      <section
        css={css`
          padding-top: 20px;
          * {
            margin-bottom: 20px;
          }
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
        <Item
          title="My example post 2"
          date={Time.getRelativeTime(Date.now() - 200000) ?? ""}
        >
          Consectetur labore sit sit occaecat est sunt excepteur nostrud officia
          aute culpa minim excepteur. Laborum aliquip reprehenderit occaecat in
          Lorem aute nulla magna. Elit ut proident sunt deserunt exercitation
          irure culpa id voluptate dolore amet ut eiusmod ex. Consequat
          consectetur elit non aliqua quis ullamco in eiusmod eu velit velit
          commodo dolore. Amet exercitation anim elit deserunt consectetur sit
          magna.
        </Item>
        <Item
          title="My old post"
          date={Time.getRelativeTime(1605257752374) ?? ""}
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
