/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import React from "react";

/**
 * Interface for Item props
 */
export interface ItemProps {
  title: string;
  date: string;
  id?: string;
  children?: any;
}

/**
 *  A Item component.
 */
const Item: React.FC<ItemProps> = (props) => {
  return (
    <div
      css={css`
        padding: 30px;
        background-color: #252d40;
        border-radius: 10px;
      `}
    >
      <h3
        id={props.id}
        css={css`
          margin-top: 0;
        `}
      >
        {props.title}
      </h3>
      <span
        css={css`
          display: flex;
          margin-bottom: 10px;
        `}
      >
        {props.date}
      </span>
      <div>{props.children}</div>
    </div>
  );
};

export default Item;
