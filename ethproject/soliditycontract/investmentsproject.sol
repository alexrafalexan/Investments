pragma solidity ~0.4.17;

contract Investments {
    address public master;



    uint public numResearchers;
    uint public numInvestors;
    uint public Contribution;


    uint public nowResearchersAdded;
    uint public nowInvestorsAdded;

    uint public activities;

    uint public maxTimesOfProject = 0;
    uint public maxTimesOfProjectTemp;
    bool public statusOfProject;

    mapping(address => bool) public researchers;
    address[] public researchersaddresses;

    mapping(address => bool) public investors;
    address[] public investorsaddresses;

    enum StateActivity {Active, Inactive, Cancelled, Completed}
    bool _status;

    DetailActivities[] public activitiesTable;
    struct DetailActivities {
        uint value;
        uint leftvalue;
        uint timeStartActivity;
        uint timeOffActivity;
        string detail;
        uint perscentagecoverage;
        StateActivity statusActivity;
        mapping(address => uint) researcherpercentageactivity; // perscentage of money can use every researcher

    }

    DetailPurchase[] public detailPurchase;
    struct DetailPurchase {
        uint activityNumber;
        uint value;
        string detail;
        address seller;
    }

    modifier requireToBeContractHasAllContribution{
        require(address(this).balance == (numInvestors*Contribution));
        _;
    }

    modifier requireToBeMaster(){
        require(master == msg.sender);
        _;
    }

    modifier requireToBeResearchers(){
        require(researchers[msg.sender] = true);
        _;
    }

    modifier requireToBeInvestors(){
        require(investors[msg.sender] = true);
        _;
    }

    function Investments (uint _numResearchers, uint _numInvestors, uint _maxTimesOfProject,uint _Contribution, uint _activities) public {
        // _maxTimesOfProject --> Time In seconds reference where project started. Project start after all Investors pay ether
        master = msg.sender;
        numResearchers = _numResearchers;
        numInvestors = _numInvestors;
        Contribution = _Contribution;
        activities = _activities;
        maxTimesOfProjectTemp = _maxTimesOfProject;
        statusOfProject = true;
    }

    function AddInvestors (address _investors) public requireToBeMaster {
        require(!investors[_investors] == true);
        require(nowInvestorsAdded < numInvestors);
        investorsaddresses.push(_investors);
        investors[_investors] = true;
        nowInvestorsAdded ++ ;
    }

    function AddResearchers (address _researchers) public requireToBeMaster{
        require(!researchers[_researchers] == true);
        require(nowResearchersAdded < numResearchers);
        researchers[_researchers] = true;
        researchersaddresses.push(_researchers);
        nowResearchersAdded ++ ;
    }

    function AddActivity (uint _value, uint _timeStartActivity, uint _timeOffActivity, string _detail) public requireToBeMaster{
        require(nowResearchersAdded == numResearchers);
        require(nowInvestorsAdded == numInvestors);
        require(activitiesTable.length < activities);
        // _timeStartActivity --> Time In seconds reference where project started
        // _timeOffActivity --> Time In seconds reference where activity started

        DetailActivities memory newDetailActivities = DetailActivities({
            value : _value,
            leftvalue : _value,
            timeStartActivity : now + _timeStartActivity,
            timeOffActivity: now + _timeStartActivity +_timeOffActivity,
            detail : _detail,
            perscentagecoverage: 0,
            statusActivity: StateActivity.Inactive
            //statusActivity : StateActivity.Inactive
            });
        activitiesTable.push(newDetailActivities);
    }

    function AddPercentageInActivity (uint _activityNumber, uint _researchersaddresses, uint _perscentage) public requireToBeMaster{
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        require(nowResearchersAdded == numResearchers);
        require(nowInvestorsAdded == numInvestors);
        require(detailActivity.perscentagecoverage < 100 && detailActivity.perscentagecoverage + _perscentage <= 100);
        detailActivity.researcherpercentageactivity[researchersaddresses[_researchersaddresses]] = (_perscentage*detailActivity.value) / 100;
        detailActivity.perscentagecoverage = activitiesTable[_activityNumber].perscentagecoverage + _perscentage;
    }

    function getPercentageInActivity (uint _activityNumber, address _researchersaddresses) view public returns(uint) {
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        return detailActivity.researcherpercentageactivity[_researchersaddresses];
    }

    function paySeller (uint _activityNumber, uint _value, string _detail, address _seller) public requireToBeResearchers requireToBeContractHasAllContribution returns(bool){
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        require(_value <= detailActivity.researcherpercentageactivity[msg.sender]);
        if (checkStatusOfActivity(_activityNumber) == StateActivity.Active ) {
            DetailPurchase memory newDetailPurchase = DetailPurchase({
                activityNumber: _activityNumber,
                value: _value,
                detail: _detail,
                seller: _seller
                });
            detailPurchase.push(newDetailPurchase);
            _seller.transfer(_value);
            detailActivity.leftvalue = detailActivity.leftvalue - _value;
            detailActivity.researcherpercentageactivity[msg.sender] = (detailActivity.researcherpercentageactivity[msg.sender] - _value);
            return true;
        }else {
            return false;
        }
    }

    function checkStatusOfActivities () public { // check status of All Activities
        for(uint i=0; i<=(activitiesTable.length-1); i++){
            checkStatusOfActivity(i);
        }
    }

    function checkStatusOfActivity (uint _activityNumber) public requireToBeContractHasAllContribution returns(StateActivity){
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        if (statusOfProject == true && detailActivity.timeStartActivity < now // Case 1 Activity
        && detailActivity.timeOffActivity > now){
            detailActivity.statusActivity = StateActivity.Active;
        }else if (statusOfProject == true && detailActivity.timeStartActivity < now // Case 2 Activity
        && detailActivity.timeOffActivity < now && detailActivity.leftvalue == 0){
            detailActivity.statusActivity = StateActivity.Completed;
        }else if (statusOfProject == true && detailActivity.timeStartActivity < now // Case 3 Activity
        && detailActivity.timeOffActivity < now && detailActivity.leftvalue > 0){
            detailActivity.statusActivity = StateActivity.Cancelled;
            statusOfProject = false;
        }else if (statusOfProject == false){ // In case project status change to false, canceled the Activity
            detailActivity.statusActivity = StateActivity.Cancelled;
        }else{
            detailActivity.statusActivity = StateActivity.Inactive;
        }
        return detailActivity.statusActivity;
    }


    function InvestrorPay() public payable requireToBeInvestors{
        require(msg.value == Contribution);
        maxTimesOfProject = now + maxTimesOfProjectTemp;
    }

    function getBalance() view public returns (uint) { // Take Balance off the Contract
        return address(this).balance;
    }

    function getBalanceDevided() view public returns (uint) { // Take Balance off the Contract
        return (address(this).balance)/investorsaddresses.length;
    }

    function returnMoneyInToInvestors () public requireToBeMaster{
        require(statusOfProject == false);
        uint _valueReturn = address(this).balance / investorsaddresses.length;
        for (uint i=0; i<=investorsaddresses.length-1; i++){
            investorsaddresses[i].transfer(_valueReturn);
        }
    }
}