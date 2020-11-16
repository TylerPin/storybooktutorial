import React, { useState, useEffect } from "react";

const AppContext = React.createContext();

const ContextProvider = (props) => {
    const [isShowLoader, setIsShowLoader] = useState(false);
    const [name, setName] = useState("Tacos");
    const [calories, setCalories] = useState("80");

    // const setFoodFromUrl = async () => {
    //     const result = await fetch("https://api.openbrewerydb.org/breweries/5494");
    //     const brewery = await result.json();
    //     console.log(brewery.name);
    // };

    // useEffect(() => {
    //     console.log("useEffect called");
    //     setFoodFromUrl();
    // });

    return (
        <AppContext.Provider
            value={{
                isShowLoader,
                name,
                calories,
                setName,
                setCalories,
                setIsShowLoader,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};

export { AppContext, ContextProvider };
