pragma solidity ~0.4.17;

contract Application {
    address[] public listOfCreatedInvestments;

    function createInvestment (uint _numResearchers, uint _numInvestors, uint _maxTimesOfProject,uint _contribution, uint _contributionorganization, uint _activities) public {
        address newInvestments = new Investment (_numResearchers, _numInvestors, _maxTimesOfProject, _contribution, _contributionorganization, _activities , msg.sender);
        listOfCreatedInvestments.push(newInvestments);

    }

    function getListOfCreatedInvestments() public view returns (address[]){
        return listOfCreatedInvestments;
    }
}


contract Investment {
    address public master;

    uint public numOrganizations;
    uint public numInvestors;

    uint public contribution;
    uint public contributionorganizationpercentage;
    uint public availableetherforactivities;


    uint public nowOrganizationsAdded;
    uint public nowInvestorsAdded;

    uint public activities;

    uint public maxTimesOfProject = 0;
    uint public maxTimesOfProjectTemp;
    bool public statusOfResearchDel;
    State public statusOfResearch;
    uint public numberOfCompletedActivities;

    mapping(address => bool) public organizations;
    address[] public organizationsaddresses;

    mapping(address => bool) public investors;
    address[] public investorsaddresses;



    enum State {Inactive, Active, Pending, Cancelled, Completed}


    DetailActivities[] public activitiesTable;
    struct DetailActivities {
        uint value;
        uint leftvalue;
        uint timeStartActivity;
        uint duration;
        string detail;
        uint perscentagecoverage;
        State statusActivity;
        mapping(address => uint) organizationpercentageactivity; // perscentage of money can use every researcher

    }

    DetailPurchase[] public detailPurchase;
    struct DetailPurchase {
        uint activityNumber;
        uint value;
        string detail;
        address seller;
    }

    modifier requireToBeContractHasAllContribution{
        require(address(this).balance == (numInvestors*contribution));
        _;
    }

    modifier requireToBeMaster(){
        require(master == msg.sender);
        _;
    }

    modifier requireToBeOrganization(){
        require(organizations[msg.sender] = true);
        _;
    }

    modifier requireToBeInvestors(){
        require(investors[msg.sender] = true);
        _;
    }

    function Investment (uint _numOrganizations, uint _numInvestors, uint _maxTimesOfProject,uint _contribution,uint _contributionorganizationpercentage, uint _activities, address _master) public {
        // _maxTimesOfProject --> Time In seconds reference where project started. Project start after all Investors pay ether
        master = _master;
        numOrganizations = _numOrganizations;
        numInvestors = _numInvestors;
        contribution = _contribution;
        contributionorganizationpercentage = ((_contributionorganizationpercentage*contribution)/100);
        availableetherforactivities = (_contribution*_numInvestors);
        activities = _activities;
        maxTimesOfProjectTemp = _maxTimesOfProject;
        statusOfResearch = State.Inactive;
    }

    function B_AddOrganizations (address _organizations) public requireToBeMaster{
        require(!organizations[_organizations] == true);
        require(nowOrganizationsAdded < numOrganizations);
        organizations[_organizations] = true;
        nowOrganizationsAdded ++ ;
    }

    function C_AddActivity (uint _value, uint _timeStartActivity, uint _duration, string _detail) public requireToBeMaster{
        require(nowOrganizationsAdded == numOrganizations);
        require(nowInvestorsAdded == numInvestors);
        require(_value >= availableetherforactivities);
        require(activitiesTable.length < activities);
        // _timeStartActivity --> Time In seconds reference where project started
        // _timeOffActivity --> Time In seconds reference where activity started

        DetailActivities memory newDetailActivities = DetailActivities({
            value : _value,
            leftvalue : _value,
            timeStartActivity : now + _timeStartActivity,
            duration: now + _timeStartActivity + _duration,
            detail : _detail,
            perscentagecoverage: 0,
            statusActivity: State.Inactive
            });
        activitiesTable.push(newDetailActivities);
        availableetherforactivities = availableetherforactivities - _value;
    }

    function D_AddPercentageInActivity (uint _activityNumber, uint _organizationsaddresses, uint _perscentage) public requireToBeMaster{
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        require(activitiesTable.length == activities);
        require(nowOrganizationsAdded == numOrganizations);
        require(nowInvestorsAdded == numInvestors);
        require(detailActivity.perscentagecoverage < 100 && detailActivity.perscentagecoverage + _perscentage <= 100);
        detailActivity.organizationpercentageactivity[organizationsaddresses[_organizationsaddresses]] = (_perscentage*detailActivity.value) / 100;
        detailActivity.perscentagecoverage = activitiesTable[_activityNumber].perscentagecoverage + _perscentage;
    }

    function E_OrganizationsPayment () public payable requireToBeOrganization{
        require(activitiesTable.length == activities);  // Require activities create by master
        require(!organizations[msg.sender] == true);
        require(msg.value == contributionorganizationpercentage);
        require(nowOrganizationsAdded < numOrganizations);
        organizationsaddresses.push(msg.sender);
    }

    function F_MakeAppanage () public payable{
        require(activitiesTable.length == activities);  // Require activities create by master
        require(!investors[msg.sender] == true);        // Require Investors not MakeAppanage before in this contract
        require(msg.value == contribution);             // Require Appanage equal Contribution which set master before
        require(nowInvestorsAdded < numInvestors);      // Require not to make all count of investors Appanage
        require(organizationsaddresses.length == numOrganizations); // Require to OrganizationPayment
        investorsaddresses.push(msg.sender);
        investors[msg.sender] = true;
        nowInvestorsAdded ++ ;
        if (nowInvestorsAdded == numInvestors) {
            maxTimesOfProject = now + maxTimesOfProjectTemp;
        }
    }

    function PaySeller (uint _activityNumber, uint _value, string _detail, address _seller) public requireToBeOrganization requireToBeContractHasAllContribution returns(bool){
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        require(_value <= detailActivity.organizationpercentageactivity[msg.sender]);
        if (statusOfResearch == State.Active && detailActivity.statusActivity == State.Active ) {
            DetailPurchase memory newDetailPurchase = DetailPurchase({
                activityNumber: _activityNumber,
                value: _value,
                detail: _detail,
                seller: _seller
                });
            detailPurchase.push(newDetailPurchase);
            _seller.transfer(_value);
            detailActivity.leftvalue = detailActivity.leftvalue - _value;
            detailActivity.organizationpercentageactivity[msg.sender] = (detailActivity.organizationpercentageactivity[msg.sender] - _value);
            return true;
        }else {
            return false;
        }
    }

    function checkStatusOfActivities () public{ // check status of All Activities
        for(uint i=0; i<=(activitiesTable.length-1); i++){
            checkStatusOfActivity(i);
        }
    }

    function checkStatusOfActivity (uint _activityNumber) public requireToBeContractHasAllContribution returns (State){
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        if ((statusOfResearch == State.Inactive) && detailActivity.timeStartActivity < now // Case 1 Initial Start
            && (detailActivity.timeStartActivity+detailActivity.duration) > now){
            statusOfResearch = State.Active;
            detailActivity.statusActivity = State.Active;
            return detailActivity.statusActivity;
        }else if (statusOfResearch == State.Active && detailActivity.timeStartActivity < now // Case 2 But time is over
        && detailActivity.timeStartActivity+detailActivity.duration < now){
            statusOfResearch = State.Pending;
            detailActivity.statusActivity = State.Pending;
            return detailActivity.statusActivity;
        }
    }

    function changeStatusOfActivity(uint _activityNumber, State _state) public{
        require(_state == State.Completed || _state ==  State.Cancelled);
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        if (_state == State.Completed && numberOfCompletedActivities == (activitiesTable.length-1)){ // Mark this Activity now as Completed and all the Other has been Marked as Completed
            detailActivity.statusActivity = _state;
            numberOfCompletedActivities++;
        }else if(_state == State.Completed){ // Mark this Activity as Completed
            detailActivity.statusActivity = _state;
            numberOfCompletedActivities++;
            statusOfResearch = State.Active;
        }else {                             // Mark as Cancelled
            detailActivity.statusActivity = _state;
            statusOfResearch = _state;
        }
    }


    function getPercentageInActivity (uint _activityNumber, address _researcheraddresses) public view returns(uint) {
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        return detailActivity.organizationpercentageactivity[_researcheraddresses];
    }

    function getBalance() view public returns (uint) { // Take Balance off the Contract
        return address(this).balance;
    }

    function returnMoney() public requireToBeMaster{
        require (!(statusOfResearch == State.Active));
        uint _valueReturnOrganization;
        uint _valueReturnInvestors;

        if (statusOfResearch == State.Cancelled){
            _valueReturnInvestors = address(this).balance / numInvestors;
            for (uint i=0; i<=investorsaddresses.length-1; i++){
                investorsaddresses[i].transfer(_valueReturnInvestors);
            }
        }else if (statusOfResearch == State.Inactive || statusOfResearch == State.Completed){
            _valueReturnOrganization = (contributionorganizationpercentage/organizationsaddresses.length);
            for (uint k=0; k<=organizationsaddresses.length-1; k++){
                organizationsaddresses[k].transfer(_valueReturnOrganization);
            }
            _valueReturnInvestors = (availableetherforactivities/investorsaddresses.length);
            for (uint j=0; j<=investorsaddresses.length-1; i++){
                investorsaddresses[j].transfer(_valueReturnInvestors);
            }
        }
    }
}