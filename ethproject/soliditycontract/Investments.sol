pragma solidity ~0.4.17;

contract Project {
    address public researcher;
    uint public minMoneyContribution;
    mapping(address => bool) public investors;
    uint public investorsCounter;
    struct DetailSubmission {
        uint value;
        uint acceptSubmissionCounter;
        string detail;
        address seller;
        bool status;
        mapping(address => bool) acceptSubmissionInvestors;
    }
    DetailSubmission[] public detailSubmissions;

    modifier requireToBeResearcher(){
        require(msg.sender == researcher);
        _;
    }

    modifier requireToBeInvestorsNotVotedYet(uint numberOfSubmission){
        require(investors[msg.sender]);
        require(!detailSubmissions[numberOfSubmission].acceptSubmissionInvestors[msg.sender]);
        _;
    }

    function Project(uint min) public {
        researcher = msg.sender;
        minMoneyContribution = min;
    }

    function investment() public payable {
        require(msg.value > minMoneyContribution);
        investors[msg.sender] = true;
        investorsCounter++;
    }

    function makeSubmission (uint value, string detail, address seller) public requireToBeResearcher {
        DetailSubmission memory newDetailSubmission = DetailSubmission(value, 0 , detail, seller, false);
        detailSubmissions.push(newDetailSubmission);
    }

    function acceptSubmission (uint numberOfSubmission) public requireToBeInvestorsNotVotedYet(numberOfSubmission) {
        detailSubmissions[numberOfSubmission].acceptSubmissionCounter++;
        detailSubmissions[numberOfSubmission].acceptSubmissionInvestors[msg.sender]= true;

    }

    function paySeller (uint numberOfSubmission) public requireToBeResearcher{
        require(!detailSubmissions[numberOfSubmission].status);
        detailSubmissions[numberOfSubmission].status = true;
        require(detailSubmissions[numberOfSubmission].acceptSubmissionCounter > (investorsCounter/4));
        detailSubmissions[numberOfSubmission].seller.transfer(detailSubmissions[numberOfSubmission].value);
        detailSubmissions[numberOfSubmission].status = true;
    }

}