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
    uint public contributionorganization;
    uint public availableetherforactivities;


    uint public nowOrganizationsAdded;
    uint public nowInvestorsAdded;

    uint public activities;

    uint public maxTimesOfProject = 0;
    uint public maxTimesOfProjectTemp;
    bool public statusOfResearchDel;
    StateActivity public statusOfResearch;

    mapping(address => bool) public organizations;
    address[] public organizationsaddresses;

    mapping(address => bool) public investors;
    address[] public investorsaddresses;



    enum StateActivity {Active, Inactive, Cancelled, Completed}


    DetailActivities[] public activitiesTable;
    struct DetailActivities {
        uint value;
        uint leftvalue;
        uint timeStartActivity;
        uint timeOffActivity;
        string detail;
        uint perscentagecoverage;
        StateActivity statusActivity;
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

    function Investment (uint _numOrganizations, uint _numInvestors, uint _maxTimesOfProject,uint _contribution,uint _contributionorganization, uint _activities, address _master) public {
        // _maxTimesOfProject --> Time In seconds reference where project started. Project start after all Investors pay ether
        master = _master;
        numOrganizations = _numOrganizations;
        numInvestors = _numInvestors;
        contribution = _contribution;
        contributionorganization = ((_contributionorganization*300)/100);
        availableetherforactivities = (_contribution*_numInvestors);
        activities = _activities;
        maxTimesOfProjectTemp = _maxTimesOfProject;
        statusOfResearch = StateActivity.Inactive;
    }

    function B_AddOrganizations (address _organizations) public requireToBeMaster{
        require(!organizations[_organizations] == true);
        require(nowOrganizationsAdded < numOrganizations);
        organizations[_organizations] = true;
        nowOrganizationsAdded ++ ;
    }

    function C_AddActivity (uint _value, uint _timeStartActivity, uint _timeOffActivity, string _detail) public requireToBeMaster{
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
            timeOffActivity: now + _timeStartActivity +_timeOffActivity,
            detail : _detail,
            perscentagecoverage: 0,
            statusActivity: StateActivity.Inactive
            //statusActivity : StateActivity.Inactive
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
        require(msg.value == contributionorganization);
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
            detailActivity.organizationpercentageactivity[msg.sender] = (detailActivity.organizationpercentageactivity[msg.sender] - _value);
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
        if (statusOfResearchDel == true && detailActivity.timeStartActivity < now // Case 1 Activity
            && detailActivity.timeOffActivity > now){
            detailActivity.statusActivity = StateActivity.Active;
        }else if (statusOfResearchDel == true && detailActivity.timeStartActivity < now // Case 2 Activity
        && detailActivity.timeOffActivity < now && detailActivity.leftvalue == 0){
            detailActivity.statusActivity = StateActivity.Completed;
        }else if (statusOfResearchDel == true && detailActivity.timeStartActivity < now // Case 3 Activity
        && detailActivity.timeOffActivity < now && detailActivity.leftvalue > 0){
            detailActivity.statusActivity = StateActivity.Inactive;
            statusOfResearchDel = false;
        }else if (statusOfResearchDel == false){   // In case project status change to false, canceled the Activity
            detailActivity.statusActivity = StateActivity.Inactive;
        }
        return detailActivity.statusActivity;
    }

    function getPercentageInActivity (uint _activityNumber, address _researcheraddresses) view public returns(uint) {
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        return detailActivity.organizationpercentageactivity[_researcheraddresses];
    }

    function getBalance() view public returns (uint) { // Take Balance off the Contract
        return address(this).balance;
    }

    function returnMoney() public requireToBeMaster{
        require (!(statusOfResearch == StateActivity.Active));
        uint _valueReturnOrganization;
        uint _valueReturnInvestors;

        if (statusOfResearch == StateActivity.Cancelled){
            _valueReturnInvestors = address(this).balance / numInvestors;
            for (uint i=0; i<=investorsaddresses.length-1; i++){
                investorsaddresses[i].transfer(_valueReturnInvestors);
            }
        }else if (statusOfResearch == StateActivity.Inactive || statusOfResearch == StateActivity.Completed){
            _valueReturnOrganization = (contributionorganization/organizationsaddresses.length);
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