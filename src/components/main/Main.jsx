import React from "react";
import "./Main.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import InfiniteScroll from "react-infinite-scroll-component";

const hash = "92732d5f172b638cf407182a58e43bcf";

const Main = () => {
  const [offset, setOffset] = useState(0);

  const [characters, setCharacters] = useState([]);
  const url = `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=8d64f0dcac29ab2747a9c6475dc161f3&hash=${hash}&limit=30&offset=${offset}`;

  useEffect(() => {
    const getApi = async () => {
      try {
        const response = await axios.get(url);
        setCharacters(response.data.data.results);
        console.log(response.data.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getApi();
  }, []);

  

  const getApi2 = async () => {
    setOffset(offset + 1)
    const response = await axios.get(url);
    return response.data.data.results
    
    
  };

  const fetchData = async () => {
    getApi2().then((data) => setCharacters([...characters, ...data]));
    
  };

  useEffect(() => {
    console.log("offset",offset);
    console.log("character", characters)
  }, [offset, characters]);

  return (
    <InfiniteScroll
      dataLength={characters.length} //This is important field to render the next data
      next={fetchData}
      hasMore={true}
      className="Maindiv"
      endMessage={
        <p style={{ textAlign: "center" }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className="Main2div">
        {characters?.map((character, index) => {
          return <Card key={index} character={character} />;
        })}
      </div>
    </InfiniteScroll>
  );
};

export default Main;
