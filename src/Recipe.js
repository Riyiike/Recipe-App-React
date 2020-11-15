import React from "react";
export default function Recipe({ title, calories }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
    </div>
  );
}
