"use client";
import AccountCard from "../../components/cards/accountCard";
import TableInfo from "../../components/tables/infoTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSharedState } from "../../global/sharedStates";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { SetStateAction, useState } from "react";
import Layout from "../../components/layout";
import InfoText from "../../components/Bars/InfoTextBar/infoTextBar";

const AccountPage = () => {
  const { accounts, setAccounts } = useSharedState();
  const [transferAmount, setTransferAmount] = useState(0);

  const addAccount = () => {
    setAccounts((prevAccounts) => [
      ...prevAccounts,
      {
        accountType: "",
        accountNumber: "",
        bankName: "",
        income: 0,
        withdraw: 0,
        balance: 0,
      },
    ]);
  };
  const updateBalances = (side: string) => {
    console.log("side = ", side);

    //validate 'transferAmount' to not be bigger then Total in the selected account
    let updatedAccounts: SetStateAction<
      {
        accountType: string;
        accountNumber: string;
        bankName: string;
        income: number;
        withdraw: number;
        balance: number;
      }[]
    > = [];

    if (side === "left") {
      if (transferAmount > accounts[1].balance || accounts[1].balance <= 0) {
        alert(
          `Unable to transfer your balance. \n Please check the amount entered and the total available \n in Corrente Poupança.`
        );
      } else {
        //saving to checking
        const checking = transferAmount + accounts[0].balance;
        const saving =
          transferAmount === 0
            ? accounts[1].balance
            : accounts[1].balance - transferAmount;
        updatedAccounts = [
          { ...accounts[0], balance: checking },
          { ...accounts[1], balance: saving },
        ];
        setAccounts(updatedAccounts);
      }
    }

    if (side === "right") {
      if (transferAmount > accounts[0].balance || accounts[0].balance <= 0) {
        alert(
          `Unable to transfer your balance. \n Please check the amount entered and the total available \n in Conta Corrente.`
        );
      } else {
        //checking to saving
        const saving = transferAmount + accounts[1].balance;
        const checking =
          transferAmount === 0
            ? accounts[0].balance
            : accounts[0].balance - transferAmount;
        updatedAccounts = [
          { ...accounts[0], balance: checking },
          { ...accounts[1], balance: saving },
        ];
        setAccounts(updatedAccounts);
      }
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <Layout>
        <div
          className="primary"
          style={{
            flex: 5,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="drawer-content flex flex-col items-center justify-center primary">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div style={{ flex: 3 }}>
                <AccountCard
                  type={accounts[0].accountType}
                  amount={accounts[0].balance}
                />
              </div>

              <div
                style={{
                  flex: 2,
                  textAlign: "center",
                  marginTop: 20,
                  padding: 10,
                }}
              >
                <div onClick={() => updateBalances("left")}>
                  <FontAwesomeIcon
                    icon={faCircleArrowLeft}
                    style={{
                      color: "#07508f",
                      width: 50,
                      height: 50,
                      cursor: "pointer",
                    }}
                  />
                </div>
                <div
                  onClick={() => updateBalances("right")}
                  style={{ paddingTop: 20, paddingBottom: 20 }}
                >
                  <FontAwesomeIcon
                    icon={faCircleArrowRight}
                    style={{
                      color: "#07508f",
                      width: 50,
                      height: 50,

                      cursor: "pointer",
                    }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Digite Aqui"
                  className="input input-bordered input-sm"
                  value={transferAmount}
                  style={{ width: "70px" }}
                  onChange={(e) => {
                    const value = e.target.value;
                    //validating to backspace do not makes the 'transferAmount' NaN
                    if (value === "") {
                      setTransferAmount(0);
                    } else {
                      const parsedValue = parseInt(value);
                      if (!isNaN(parsedValue)) {
                        setTransferAmount(parsedValue);
                      }
                    }
                  }}
                />
              </div>

              <div style={{ flex: 3 }}>
                <AccountCard
                  type={accounts[1].accountType}
                  amount={accounts[1].balance}
                />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <TableInfo />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default AccountPage;
