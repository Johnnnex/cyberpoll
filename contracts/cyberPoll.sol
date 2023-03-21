//SPDX-License-Identifier: MIT
//Verified on Matic at: 0xaBecF747F7c0B40E1a94FC8FBc0c189D20CCCb18
pragma solidity ^0.8.17;

/// @title CyberPoll: A Decentralized Voting Smart Contract
/// @notice You can use this contract to create quick voting ballots
/// @dev All function calls are currently implemented without side effects
/// @custom:testing stages. This contract is still undergoing tests.

contract CyberPoll {
    /// @notice A Struct to record candidates
    /// @dev Struct stores each Candidate's Data
    struct Candidate {
        uint id;
        string name;
        string politicalParty;
        uint voteCount;
    }

    /// @notice A Struct to enable pre-registration of voters
    /// @dev Struct tracks each voter's Data
    struct voter {
        string voterName;
        bool voted;
    }

    //**************VARIABLE DECLARATION***************//
    uint public candidatesCount;
    uint public timestamp;
    uint public voteDuration;
    uint public totalVoters;
    // address public owner;
    // bool public voteStart;
    bool public votingLive;
    // store accounts which have voted
    mapping(address => bool) public voters;
    // Store, Fetch & Map Candidate data into candidates
    // Store Candidate Count
    mapping(uint => Candidate) public candidates;
    mapping(address => voter) public voterRegister;

    //************  EVENTS  ************//
    event votedEvent(uint indexed _candidateId);
    event voterAdded(address voter);
    event voteStarted();

    //only the contract owner should be able to start voting
    address public owner;
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    constructor() {
        owner = msg.sender;
        votingLive = false;
    }

    //**************WRITABLE FUNCTIONS***************//

    function startVote() public onlyOwner {
        votingLive = true;

        emit voteStarted();
    }

    /// @notice Is trigerred by owner to end voting
    function endVote() public onlyOwner {
        votingLive = false;
    }

    /// @notice Enables owner to add new candidates
    /// @dev Increments totalNumber of Candidates
    /// @dev Registers 'Candidate' then updates 'candidates' mapping
    /// @param _name takes name of each candidate (stored in memory)
    function addCandidate(
        string memory _name,
        string memory _politicalParty
    ) public onlyOwner {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(
            candidatesCount,
            _name,
            _politicalParty,
            0
        );
    }

    /// @notice Enables qualified voters vote registered Candiates
    /// @dev Function checks sets of requirements
    // @param _candidateID represents unique ID of Candidate(voter intends to vote)
    function vote(uint _candidateId) public {
        // require that address hasn't voted before
        require(!voters[msg.sender], "Already voted!");
        //require voting is live
        require(votingLive == true, "Vote isn't Live");
        // require vote only for valid candidate
        require(
            _candidateId > 0 && _candidateId <= candidatesCount,
            "Candidate Not Found"
        );

        // record that voter has voted
        voters[msg.sender] = true;

        // update candidate vote count
        candidates[_candidateId].voteCount++;

        // trigger vote event
        emit votedEvent(_candidateId);
    }

    // @return total numbers of vote each candidates have
    function checkCandidateVote(uint _candidateId) public view returns (uint) {
        return candidates[_candidateId].voteCount;
    }

    /// @notice Lets user know if their vote has been counted
    function haveYouVoted() public view returns (bool) {
        return voters[msg.sender];
    }

    /// @notice Enable transfer of ownership
    function changeOwnership(address _newOwner) public onlyOwner {
        owner = _newOwner;
    }
}
