import React from "react";
import BorderedTab from "../../components/tabs/borderedTab";
//import Performance from "./performance.json";
import InvestmentLineChart from "../../components/charts/lineChart";
import StatsAndImage from "../../components/stats/statsAndImage";
import Layout from "../../components/layout";
import "./styles.css";

const MyInvestmentsPage = () => {
  //const holdings = ["stocks", "bonds", "crypto", "realEstate", "etfs"];

  //const [selectedHolding, setSelectedHolding] = useState("stocks");

  /* const handleButtonClick = (holding) => {
    setSelectedHolding(holding);
  }; */

  return (
    <div>
      <Layout>
        <div
          className="drawer-content flex flex-col items-center justify-center primary"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <div
            className="primary"
            style={{
              flex: 1,
              alignSelf: "flex-start",
              paddingTop: 30,
              paddingLeft: 50,
            }}
          >
            <h2 className="title-text text-primary">Meus investimentos</h2>
          </div>
          <div style={{ flex: 1 }}>
            <StatsAndImage />
          </div>
          <div
            style={{
              flex: 1,
              alignSelf: "flex-start",
              paddingLeft: 50,
            }}
          >
            <BorderedTab
              labelTab1={"Geral"}
              labelTab2={"Participações"}
              labelTab3={"Atividade"}
              labelTab4={"Desempenho"}
              content1={
                /* CONTEÚDO DA ABA 1 */
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    minWidth: "160vh",
                  }}
                >
                  <div style={{ flex: 1, whiteSpace: "nowrap" }}>
                    <h2 className="blue-text">Patrimônio Líquido Total: </h2>
                    <h1 className="value-show">$353.901,52</h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: "nowrap" }}>
                    <h2 className="pd-10 blue-text">
                      {" "}
                      Rendimento de Dividendos:{" "}
                    </h2>
                    <h1 className=" value-show center">$78.964</h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: "nowrap" }}>
                    <h2 className="pd-10 blue-text"> Desempenho Total: </h2>
                    <h1
                      className=" value-show center"
                      style={{ color: "green" }}
                    >
                      + $32.240
                    </h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: "nowrap" }}>
                    <h2 className="pd-10 blue-text">Pagamento de Impostos:</h2>
                    <h1
                      className=" value-show center"
                      style={{ color: "#c41414" }}
                    >
                      - $4.791
                    </h1>
                  </div>
                </div>
              }
              content2={
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    minWidth: "160vh",
                  }}
                >
                  <div style={{ flex: 1, whiteSpace: "nowrap" }}>
                    <h2 className="blue-text">Ações: </h2>
                    <h1 className="value-show center">$142.104,20</h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: "nowrap" }}>
                    <h2 className="blue-text pd-10">Títulos: </h2>
                    <h1 className="value-show center pd-10">$3.901,52</h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: "nowrap" }}>
                    <h2 className="blue-text" style={{ paddingLeft: 25 }}>
                      Criptomoedas:
                    </h2>
                    <h1
                      className="value-show center"
                      style={{ paddingLeft: 10 }}
                    >
                      $3.456,70
                    </h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: "nowrap" }}>
                    <h2 className="blue-text pd-10">Imóveis: </h2>
                    <h1
                      className="value-show center"
                      style={{ paddingLeft: 20 }}
                    >
                      $4.567,98
                    </h1>
                  </div>
                  <div style={{ flex: 1, whiteSpace: "nowrap" }}>
                    <h2 className="blue-text">
                      ETFs (Fundos de Investimento em Ações):
                    </h2>
                    <h1 className="value-show center">$5.678,12</h1>
                  </div>
                </div>
              }
              content3={
                <div className="container">
                  <div className="row">
                    <div className="left-column blue-text">Descrição</div>
                    <div className="center-column blue-text">Valor</div>
                    <div className="right-column blue-text">Data</div>
                  </div>
                  <div className="row">
                    <div className="left-column">
                      <div className="activity">Compras de Supermercado</div>
                      <div className="activity">Jantar com Amigos</div>
                      <div className="activity">
                        Venda de Loja de E-commerce
                      </div>
                      <div className="activity">Depósito de Salário</div>
                    </div>
                    <div className="center-column">
                      <h1 className="outcome">- $50,00</h1>
                      <h1 className="outcome">- $38,90</h1>
                      <h1 className="income">+ $249,00</h1>
                      <h1 className="income">+ $5200,00</h1>
                    </div>
                    <div className="right-column">
                      <div className="amount">23 de Fevereiro de 2024</div>
                      <div className="amount">22 de Fevereiro de 2024</div>
                      <div className="amount">20 de Fevereiro de 2024</div>
                      <div className="amount">20 de Fevereiro de 2024</div>
                    </div>
                  </div>
                </div>
              }
              content4={
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <InvestmentLineChart />
                </div>
              }
            />
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default MyInvestmentsPage;
