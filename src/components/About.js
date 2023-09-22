import React from "react";
import user from "../data/user";
import Links from "./Links";
function About(props) {
  const bio = props.bio;
  if (bio==undefined) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.linkG} linkedin={props.linkL} />
      </div>
  );}
  else  if (bio=="") {
    return (
      <div id="about">
        <h2>About Me</h2>
        <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
        <Links github={props.linkG} linkedin={props.linkL} />
        </div>
    );}
    else 
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.linkG} linkedin={props.linkL} />
      </div>
  );
}

export default About;
