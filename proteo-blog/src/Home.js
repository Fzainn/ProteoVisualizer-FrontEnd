///import App from "./App";
import { useState, useRef, useEffect } from "react";
import BlogList from "./BlogList";
const Home  = () => {
    const addPosts = async (title, body) => {
        await fetch('http://localhost:8080/api/v1/proteomics', {
        method: 'POST',
        body: JSON.stringify({
           title: title,
           body: body,
           userId: Math.random().toString(36).slice(2),
        }),
        headers: {
           'Content-type': 'application/json; charset=UTF-8',
        },
        })
        .then((response) => response.json())
        .then(data => this.setState({ postId: data.id }));
        ///console.log(data);
        
        };
        console.log(data);
    }
     
    export default Home;

    