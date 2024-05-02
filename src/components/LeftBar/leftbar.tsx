import React from "react";
import IconAndLabel from "../Buttons/iconAndLabel";
import {
  faHouse,
  faIdCard,
  faChartSimple,
  faMoneyBillTrendUp,
  faLock,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import "./leftBar.css";

const LeftBar = () => {
  return (
    <div
      className="leftBar "
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <div className="doubleBorder" />
      <div>
        <IconAndLabel
          icon={faHouse}
          label={"Página Inicial"}
          navigateTo={"/home"}
        />
        <IconAndLabel
          icon={faChartSimple}
          label={"Analytics"}
          navigateTo={"/analytics"}
        />
        <IconAndLabel
          icon={faMoneyBillTrendUp}
          label={"Meus Investimentos"}
          navigateTo={"/my-investments"}
        />
        <IconAndLabel
          icon={faIdCard}
          label={"Minhas Contas"}
          navigateTo={"/my-accounts"}
        />
        <div
          style={{
            borderStyle: "double",
            borderBottomWidth: "3px",
            borderBottomColor: "white",
          }}
        />
        <IconAndLabel icon={faUser} label={"Perfil"} navigateTo={"/profile"} />
        <IconAndLabel
          icon={faLock}
          label={"Alterar\n Senha"}
          navigateTo={"/forgot-password"}
        />
        <div style={{ position: "fixed", bottom: 0, width: "210px" }}>
          <IconAndLabel
            icon={faRightFromBracket}
            label={"Sair"}
            navigateTo={"/"}
          />
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
