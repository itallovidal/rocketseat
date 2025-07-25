import GlobalWrapper from "../../Global Components/GlobalWrapper/GlobalWrapper.tsx";
import Header from "./Components/Header/Header.tsx";
import * as Styles from './Home.Styled.ts'
import Coffe, {Coffee} from "./Components/Coffe/Coffe.tsx";
import React from "react";
import {GetCoffes} from "../../utilities/fetchData.ts";


function Home() {
    const [coffeeList, setCoffeeList] = React.useState<Array<Coffee> |  null>(null)

    React.useEffect(()=>{
        GetCoffes().then((data)=>{
            setCoffeeList(data)
        })
    },[])

    return (
        <GlobalWrapper>
            <Header/>

            <Styles.CoffeWrapper>
                <h1>Nossos Cafés</h1>

                <Styles.CoffeList>
                    {coffeeList && coffeeList.map((item)=>{
                        return <Coffe key={item.id} coffee={item}/>
                    })}
                </Styles.CoffeList>
            </Styles.CoffeWrapper>
        </GlobalWrapper>
    );
}

export default Home;