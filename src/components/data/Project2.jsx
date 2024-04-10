import React from "react";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack, IoMdMail } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Project2 = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navigate back
  };

  const handleMailClick = () => {
    window.location.href =
      "mailto:utkarshbhardwajmail@getDefaultNormalizer.com";
  };

  return (
    <div className="project-page">
      <div
        className="project-page-image-container"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="project-page-go-back" onClick={handleGoBack}>
          <IoMdArrowRoundBack />
        </div>
        <div className="project-page-project-name">
          <h1>Decentralized Election: Ethereum based Dapp</h1>
        </div>
        <div className="project-page-project-share" onClick={handleMailClick}>
          <IoMdMail />
        </div>
      </div>
      <div className="project-page-body">
        <h1 className="project-page-body-header">
          Decentralized Election: Ethereum based Dapp
        </h1>
        <div className="project-page-body-para">
          {/* What? */}
          <div className="project-section-fragment">
            <h1>What is Decentralized Election?</h1>
            <p>
              The Decentralized Election: Ethereum based Dapp project is a
              decentralized application (DApp) that leverages the power of the
              Ethereum blockchain to create a secure and transparent election
              system. This DApp allows users to participate in elections, cast
              their votes, and verify the integrity of the voting process, all
              through a user-friendly web interface built with React. The
              project's core objective is to demonstrate how blockchain
              technology can be applied to the electoral process, addressing the
              common issues of voter fraud, ballot tampering, and lack of
              transparency that plague traditional voting systems. By utilizing
              the inherent security and immutability of the Ethereum blockchain,
              the project aims to revolutionize the way we conduct and
              participate in elections.
            </p>
          </div>
          <hr></hr>

          {/* Why */}

          <div className="project-section-fragment">
            <h1>Why this problem statement?</h1>
            <p>
              In recent years, the integrity of elections has come under
              increased scrutiny, with concerns about voter suppression,
              gerrymandering, and the potential for election interference. The
              project offers a innovative solution to these pressing issues by
              leveraging the decentralized and transparent nature of blockchain
              technology. By implementing a DApp on the Ethereum network, the
              project creates a secure and immutable record of votes, ensuring
              that each vote is accurately counted and that the entire electoral
              process is transparent and verifiable. This approach not only
              enhances the credibility of the electoral system but also empowers
              citizens to actively participate in the democratic process with
              confidence. Furthermore, the use of blockchain technology in this
              project has the potential to increase voter turnout and
              engagement, as the DApp provides a convenient and accessible
              platform for citizens to exercise their right to vote, regardless
              of their location or any physical limitations.
            </p>
          </div>
          <hr></hr>

          {/* Approach */}
          <div className="project-section-fragment">
            <h1>Approach to the project</h1>
            <p>
              The project was developed using a methodical and well-thought-out
              approach, leveraging the strengths of various technologies and
              frameworks to create a robust and user-friendly application.
            </p>
            <div className="grid-boxx">
              <div className="grid-boxx-item">
                <h2 className="grid-boxx-item-heading">Ethereum Blockchain</h2>
                <p>
                  The foundation of the project is the Ethereum blockchain,
                  which provides the decentralized and secure infrastructure
                  necessary for the electoral process. The team utilized the
                  Solidity programming language to develop the smart contracts
                  that govern the election rules and vote recording.
                </p>
              </div>
              <div className="grid-boxx-item">
                <h2 className="grid-boxx-item-heading">React.js</h2>
                <p>
                  The user interface of the DApp was built using the React
                  JavaScript library, which allowed the team to create a modern,
                  responsive, and intuitive web application. React's
                  component-based architecture and virtual DOM (Document Object
                  Model) enabled the development of a seamless and efficient
                  user experience.
                </p>
              </div>
              <div className="grid-boxx-item">
                <h2 className="grid-boxx-item-heading">Node.js and Web3.js</h2>
                <p>
                  To facilitate the interaction between the client-side React
                  application and the Ethereum blockchain, the project leveraged
                  Node.js and the Web3.js library. This combination enabled the
                  team to build a robust backend infrastructure that handles the
                  communication, data processing, and integration with the
                  Ethereum network.
                </p>
              </div>
            </div>
          </div>
          <hr></hr>

          {/* Development */}

          <div className="project-section-fragment">
            <h1>Developing the project using Solidity, Node.js, and React</h1>
            <p>
              Decentralized Election: Ethereum based Dapp employed a
              well-structured and modular approach to development, ensuring a
              seamless integration between the Ethereum blockchain, Node.js
              backend, and the React.js frontend.
            </p>
            <div className="grid-boxx">
              <div className="grid-boxx-item">
                <h2 className="grid-boxx-item-heading">
                  Solidity Smart Contracts
                </h2>
                <p>
                  The core of the application's logic is implemented in
                  Solidity, the programming language for Ethereum smart
                  contracts. The team designed and deployed these contracts to
                  handle the electoral process, including voter registration,
                  vote casting, and vote tallying. The smart contracts ensure
                  the immutability and transparency of the election results by
                  recording all the transactions on the Ethereum blockchain.
                </p>
              </div>
              <div className="grid-boxx-item">
                <h2 className="grid-boxx-item-heading">React.js Frontend</h2>
                <p>
                  The user-facing interface of the DApp was developed using the
                  React.js library, which provided a flexible and efficient way
                  to create a responsive and interactive web application. The
                  team leveraged React's component-based architecture to build a
                  modular and scalable frontend, ensuring a seamless user
                  experience for voters and election administrators.
                </p>
              </div>
              <div className="grid-boxx-item">
                <h2 className="grid-boxx-item-heading">Node.js and Web3.js</h2>
                <p>
                  The Node.js runtime environment, combined with the Web3.js
                  library, served as the bridge between the frontend React
                  application and the Ethereum blockchain. This backend
                  infrastructure facilitated the communication between the
                  client-side and the smart contracts, allowing for the secure
                  transmission of data and the execution of blockchain
                  transactions.
                </p>
              </div>
            </div>
          </div>
          <hr></hr>

          {/* Features */}
          <div className="project-section-fragment">
            <h1>Features of DApp</h1>
            <p>
              The project offers a comprehensive set of features that address
              the key aspects of the electoral process, making it a powerful and
              versatile DApp.
            </p>
            <div className="grid-boxx">
              <div className="grid-boxx-item">
                <h2 className="grid-boxx-item-heading">Voter Registration</h2>
                <p>
                  The DApp allows eligible voters to register their details,
                  including their Ethereum wallet address, on the blockchain.
                  This registration process is secured and immutable, ensuring
                  the integrity of the voter rolls.
                </p>
              </div>
              <div className="grid-boxx-item">
                <h2 className="grid-boxx-item-heading">Secure Voting</h2>
                <p>
                  Once registered, voters can securely cast their ballots
                  through the DApp's intuitive interface. The voting is powered
                  by the Ethereum blockchain, guaranteeing the anonymity and
                  security of each vote.
                </p>
              </div>

              <div className="grid-boxx-item">
                <h2 className="grid-boxx-item-heading">
                  Real-time Vote Tracking
                </h2>
                <p>
                  The DApp provides a transparent and real-time view of the
                  election results, allowing voters to track the progress of the
                  vote count and verify the accuracy of the tallies.
                </p>
              </div>

              <div className="grid-boxx-item">
                <h2 className="grid-boxx-item-heading">Administration Tools</h2>
                <p>
                  The DApp provides a transparent and real-time view of the
                  election results, allowing voters to track the progress of the
                  vote count and verify the accuracy of the tallies.
                </p>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="project-page-buttons">
            <button className="heroButton1">
              Code <FaCode />
            </button>
            <button className="heroButton1">
              Watch Live <FaEye />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;
