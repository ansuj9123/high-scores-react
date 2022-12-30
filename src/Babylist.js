import React from "react";
import babyNamesData from "./data/babyNamesData.json";
import { useState } from "react";

let sortedNames = babyNamesData.sort(function (a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

    function Babylist() {
        const [names, setNames] = useState(sortedNames)
        const [favouriteNames, setFavouriteNames] = useState([])

        function addFavourite (name){
            setFavouriteNames([...favouriteNames,name])

            let newNames = names.filter((babyname)=>{
                if(babyname.id!=name.id){
                    return true
                }
            })
            setNames(newNames)
        }

        function removeFavourite (name) {
            setNames([...names, name]);

            let newNames = favouriteNames.filter((babyname) => {
                if (babyname.id != name.id) {
                return true;
                }
            });
            setFavouriteNames(newNames);
        }

    
    return (
        <div>
            <input
            onChange={(e) => {
                console.log(e.target.value);
                let filterNames = sortedNames.filter((babyname) => {
                if (
                    babyname.name
                    .toLocaleLowerCase()
                    .includes(e.target.value.toLocaleLowerCase())
                ) {
                    return true;
                }
                });
                console.log(filterNames);
                setNames(filterNames);
            }}
            type="text"
            />

            <h1>Favourite Names</h1>
            <div className="name-container">
            {favouriteNames.map((babyname) => {
                return (
                <div
                    onClick={() => {
                    removeFavourite(babyname)
                    }}
                    className={babyname.sex === "f" ? "female" : "male"}
                >
                    {babyname.name}{" "}
                </div>
                );
            })}
            </div>

            <h1>Names</h1>
            <div className="name-container">
            {names.map((babyname) => {
                return (
                <div
                    onClick={() => {
                    addFavourite(babyname);
                    }}
                    className={babyname.sex === "f" ? "female" : "male"}
                >
                    {babyname.name}{" "}
                </div>
                );
            })}
            </div>
        </div>
        );
        }

export default Babylist;
