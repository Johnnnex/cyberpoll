import React from "react";
import DashboardComp from "../components/dashboardcomp";
import LoaderComp from "../components/loaderComp";
import candidateData from "../Data files/candidateData.json";
import { useContract, useContractWrite } from "@thirdweb-dev/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const DashboardVote = () => {
  // const voteTest = (data) => {
  //   console.log(data);
  //   // candId = data
  // };

  //Web 3 Integration
  const { contract } = useContract(
    "0xaBecF747F7c0B40E1a94FC8FBc0c189D20CCCb18"
  );
  const { mutateAsync: vote, isLoading } = useContractWrite(contract, "vote");

  const call = async (dataID) => {
    try {
      const data = await vote([dataID]);
      console.info("contract call successs", data);
      toast.success("Congrats! You have now casted your vote!");
    } catch (error) {
      toast.error("Oops! Transaction Failed");
      toast.error(error.message);
      console.error("contract call failure", error);
    }
  };

  return (
    <div>
      <ToastContainer />
      <DashboardComp activeVote={{ color: "#008000" }}>
        <section className="vote">
          {!candidateData && <LoaderComp />}
          {candidateData.map((data) => {
            return (
              <div key={data.id} className="card">
                <img
                  src={data.candidateImg}
                  alt={`img-${data.candidateParty}`}
                  className="candidateImg"
                />
                <div class="content">
                  <small className="candidateID">ID: {data.id}</small>
                  <h3 className="candidateName">{data.candidateName}</h3>
                  <p className="candidateParty">{data.candidateParty}</p>
                </div>
                <button onClick={() => call(data.id)} className="vote-btn">
                  Vote
                </button>
              </div>
            );
          })}
        </section>
      </DashboardComp>
    </div>
  );
};

export default DashboardVote;
