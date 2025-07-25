import Transactions from "./Components/TransactionsList/TransactionsList.tsx";
import Header from "./Components/Header/Header.tsx";
import Summary from "./Components/Summary/Summary.tsx";

function Home() {

    return (
        <main>
            <Header/>
            <Summary/>
            <Transactions/>
        </main>

    );
}

export default Home;