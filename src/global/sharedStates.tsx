import { useState } from "react";
import { useBetween } from "use-between";

export const useStateVariables = () => {
  const [accounts, setAccounts] = useState([
    {
      accountType: "Conta Corrente",
      accountNumber: "57896824753-1",
      bankName: "Quality Control",
      income: 6000,
      withdraw: 4000,
      balance: 6000 - 4000,
    },
    {
      accountType: "Corrente Poupança",
      accountNumber: "36516026871-5",
      bankName: "New Digital",
      income: 10000,
      withdraw: 2000,
      balance: 10000 - 2000,
    },
  ]);
  const [name, setName] = useState("Wesley Franco Maciel");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("wesleymaciel2500@gmail.com");
  return {
    accounts,
    setAccounts,
    name,
    setName,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    email,
    setEmail,
  };
};

export const useSharedState = () => useBetween(useStateVariables);
