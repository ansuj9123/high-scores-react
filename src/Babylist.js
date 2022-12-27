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

    
    return (
        <div>
            <input onChange={(e) =>{
                console.log(e.target.value)
                let filterNames = sortedNames.filter((babyname)=>{
                    if(babyname.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())){
                        return true
                    } 
                })
                console.log(filterNames)
                setNames(filterNames)
            }} type="text"/>
            <div className="name-container">
            {names.map((babyname) => {
                return (
                <div className={babyname.sex === "f" ? "female" : "male"}>
                    {babyname.name}{" "}
                </div>
                );
            })}
            </div>
        </div>
    );
    }

export default Babylist;
