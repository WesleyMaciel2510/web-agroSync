"use client";
import React, { useEffect, useState } from "react";
import BarChartComponent from "../../components/charts/barChart";
import AreaChartComponent from "../../components/charts/areaChart";
import PieChartComponent from "../../components/charts/pieChart";
import checkingAccountData from "./checkingAccount/checkingAccountData.json";
import savingAccountData from "./savingAccount/savingAccountData.json";
import checkingAccountExpenses from "./checkingAccount/checkingAccountExpenses.json";
import savingAccountExpenses from "./savingAccount/savingAccountExpenses.json";
import LottieView from "../../components/lottieView";
import Layout from "../../components/layout";

const Analytics = () => {
  //const animationData = require("");
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTab, setSelectedTab] = useState("tab1");

  useEffect(() => {
    setIsClient(true);
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  const handleTabChange = (event: {
    target: { id: React.SetStateAction<string> };
  }) => {
    setSelectedTab(event.target.id);
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
            minWidth: "50%",
          }}
        >
          <div
            style={{
              padding: 20,
              paddingLeft: 50,
              paddingRight: 50,
            }}
          >
            <div
              style={{
                flex: 1,
                borderWidth: 1,
                borderColor: "gray",
                borderRadius: 20,
                padding: 20,
                display: "flex",
                flexDirection: "column",
                backgroundColor: "white",
              }}
            >
              <div>
                <h2 className="title-text text-primary">Analytics</h2>
              </div>
              <div role="tablist" className="tabs tabs-lifted">
                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab text-primary"
                  id="tab1"
                  aria-label="BarChart"
                  checked={selectedTab === "tab1"}
                  onChange={handleTabChange}
                />
                <div
                  role="tabpanel"
                  className="tab-content border-base-300 rounded-box p-6"
                  aria-labelledby="tab1"
                  style={{ display: selectedTab === "tab1" ? "flex" : "none" }}
                >
                  {/* Tab content 1 */}
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ flex: 1 }}>
                      {isClient &&
                        (isLoading ? (
                          <div className="w-1/2">
                            <LottieView
                              //animationData={animationData}
                              loopingActive={false}
                            />
                          </div>
                        ) : (
                          <div>
                            <BarChartComponent
                              data={checkingAccountData}
                              IncomeColor="#008080"
                              OutcomeColor="#FFD700"
                            />
                            <h2
                              style={{
                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#336699",
                              }}
                            >
                              Conta Corrente
                            </h2>
                          </div>
                        ))}
                    </div>
                    <div style={{ flex: 1 }}>
                      {isClient &&
                        (isLoading ? (
                          <div className="w-1/2">
                            <LottieView
                              //animationData={animationData}
                              loopingActive={false}
                            />
                          </div>
                        ) : (
                          <div className="w-1/2" style={{ minWidth: "80vh" }}>
                            <BarChartComponent
                              data={savingAccountData}
                              IncomeColor="#8a2be2"
                              OutcomeColor="#3cb371"
                            />
                            <h2
                              style={{
                                textAlign: "center",
                                fontSize: 18,
                                fontWeight: "bold",
                                color: "#336699",
                              }}
                            >
                              Corrente Poupança
                            </h2>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab text-primary"
                  id="tab2"
                  aria-label="AreaChart"
                  checked={selectedTab === "tab2"}
                  onChange={handleTabChange}
                />
                <div
                  role="tabpanel"
                  className="tab-content border-base-300 rounded-box p-6"
                  aria-labelledby="AreaChart"
                  style={{ display: selectedTab === "tab2" ? "flex" : "none" }}
                >
                  {/* Tab content 2 */}
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <div style={{ flex: 1 }}>
                      <AreaChartComponent
                        data={checkingAccountData}
                        strokeColor="#8a2be2"
                        fillColor="#8a2be2"
                      />
                      <h2
                        className="text-title"
                        style={{
                          textAlign: "center",
                          fontSize: 18,
                        }}
                      >
                        Conta Corrente
                      </h2>
                    </div>
                    <div style={{ flex: 1 }}>
                      <AreaChartComponent
                        data={savingAccountData}
                        strokeColor="#008080"
                        fillColor="#3cb371"
                      />
                      <h2
                        className="text-title"
                        style={{
                          textAlign: "center",
                          fontSize: 18,
                        }}
                      >
                        Corrente Poupança
                      </h2>
                    </div>
                  </div>
                </div>

                <input
                  type="radio"
                  name="my_tabs_2"
                  role="tab"
                  className="tab text-primary"
                  id="tab3"
                  aria-label="PieChart"
                  checked={selectedTab === "tab3"}
                  onChange={handleTabChange}
                />
                <div
                  role="tabpanel"
                  className="tab-content border-base-300 rounded-box p-6"
                  aria-labelledby="PieChart"
                  style={{ display: selectedTab === "tab3" ? "flex" : "none" }}
                >
                  {/* Tab content 3 */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <div style={{ flex: 1, paddingLeft: 20, paddingRight: 20 }}>
                      <h2
                        className="text-title"
                        style={{
                          textAlign: "start",
                          fontSize: 18,
                          paddingLeft: 80,
                        }}
                      >
                        Conta Corrente
                      </h2>
                      <PieChartComponent data={checkingAccountExpenses} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h2
                        className="text-title"
                        style={{
                          textAlign: "center",
                          fontSize: 18,
                          paddingRight: 70,
                        }}
                      >
                        Corrente Poupança
                      </h2>
                      <PieChartComponent data={savingAccountExpenses} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Analytics;
