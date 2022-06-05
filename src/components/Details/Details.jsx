import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const location = useLocation();
  const character = location.state.character;

  let FilterItems = character.comics.items;

  

  let myNewArray = [];

  if (FilterItems.length > 10) {
    for (let i = 0; i < 10; i++) {
      myNewArray.push(FilterItems[i]);
    }
  } else {
    for (let i = 0; i < FilterItems.length; i++) {
      myNewArray.push(FilterItems[i]);
    }
  }

  
  let myObject = {};
  for (let i = 0; i < myNewArray.length; i++) {
    let firstIndex = myNewArray[i].name.indexOf("(");
    let lastIndex = myNewArray[i].name.indexOf(")");

    let newValue = Number(myNewArray[i].name.slice(firstIndex + 1, lastIndex));

    myObject[myNewArray[i].name] = newValue;
  }

  const sortable = Object.entries(myObject).sort(([,a],[,b]) => a-b).reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  const myNewlist = [];
  

  for(let i of Object.keys(sortable)) {
    myNewlist.push(i)
  };

  console.log(myNewlist)












  const navigate = useNavigate();

  const handleback = () => {
    navigate(-1);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ maxWidth: 345 }} style={{ margin: "2rem auto" }}>
        <CardMedia
          component="img"
          height="400"
          image={character.thumbnail.path + "/portrait_xlarge.jpg"}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {character.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {character.description}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <h4 style={{ marginTop: "1rem" }}>
              List Comics Where The Character Appears :
            </h4>
            <br />
            <ul>
              {myNewlist.map((item, index) => {
                return <li key={index}> {item} </li>;
              })}
            </ul>
          </Typography>
        </CardContent>
      </Card>

      <Button variant="contained" onClick={handleback}>
        Go Back
      </Button>
    </div>
  );
}
