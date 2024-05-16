import {
  faChartPie,
  faCircleQuestion,
  faChartSimple,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoText = () => {
  return (
    <div
      style={{
        maxWidth: "160vh",
        borderWidth: 1,
        borderColor: "gray",
        borderRadius: 18,
      }}
    >
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-primary text-white"
        style={{ backgroundColor: "#337ab7" }}
      >
        <div className="collapse-title text-xl font-medium flex items-center">
          <FontAwesomeIcon
            icon={faCircleQuestion}
            style={{
              color: "white",
              width: 30,
              height: 30,
              paddingRight: 20,
            }}
          />
          O que 'AgroSync' pode fazer por você?
        </div>

        <div className="collapse-content items-center">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faChartPie}
              style={{
                color: "white",
                width: 30,
                height: 30,
                paddingRight: 20,
              }}
            />
            Use 'Analytics' para acompanhar o desempenho de suas contas.
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faChartSimple}
              style={{
                color: "white",
                width: 30,
                height: 30,
                paddingRight: 20,
              }}
            />
            Em 'Meus Investimentos', você pode ver como suas participações se
            comportam ao longo do tempo.
          </div>
          <div className="flex items-center mb-4">
            <FontAwesomeIcon
              icon={faCreditCard}
              style={{
                color: "white",
                width: 30,
                height: 30,
                paddingRight: 20,
              }}
            />
            E em 'Minhas Contas', é fácil transferir valores e adicionar contas.
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoText;
