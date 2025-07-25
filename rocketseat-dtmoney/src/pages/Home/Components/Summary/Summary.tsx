
import * as Styles from "./Summary.styled.ts";
import {ArrowCircleDown, ArrowCircleUp, CurrencyDollar} from "phosphor-react";
import {GlobalWrapper} from "../../Home.styled.ts";
import useSummary from "../../../../hooks/useSummary.tsx";
import {MoneyFormatter} from "../../../../utilities/API.ts";

function Summary() {
    const summaryData = useSummary()

    return (
        <GlobalWrapper>
            <Styles.Summary>
                <Styles.SummaryCard>
                    <div>
                        <p>Entrada</p>
                        <ArrowCircleDown size={24} />
                    </div>
                    <span> { summaryData ? MoneyFormatter.format(summaryData.income) : "Sem Registros."}</span>
                </Styles.SummaryCard>

                <Styles.SummaryCard>
                    <div>
                        <p>Saídas</p>
                        <ArrowCircleUp size={24}/>
                    </div>
                    <span>{ summaryData ? MoneyFormatter.format(summaryData.outcome) : "Sem Registros."}</span>
                </Styles.SummaryCard>

                <Styles.SummaryCard $isGreen={true}>
                    <div>
                        <p>Total</p>
                        <CurrencyDollar size={24}/>
                    </div>
                    <span>{ summaryData ? MoneyFormatter.format(summaryData.total) : "Sem Registros."}</span>
                </Styles.SummaryCard>
            </Styles.Summary>
        </GlobalWrapper>
    );
}

export default Summary;