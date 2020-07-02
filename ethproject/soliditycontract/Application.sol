pragma solidity ~0.4.22;

contract Application {
    address[] public listOfCreatedInvestments;

    function createInvestment (uint _numResearchers, uint _numInvestors, uint _maxTimesOfProject,uint _contribution, uint _contributionorganizationpercentage, uint _activities) public {
        address newInvestments = new Investment (_numResearchers, _numInvestors, _maxTimesOfProject, _contribution, _contributionorganizationpercentage, _activities , msg.sender);
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


    uint public nowOrganizationsAddedDeclaireMaster;
    uint public nowOrganizationsAdded;
    uint public nowInvestorsAdded;

    uint public activities;

    uint public maxTimesOfProject = 0;
    uint public maxTimesOfProjectTemp;

    State public statusOfResearch;
    uint public numberOfCompletedActivities = 0;

    mapping(address => bool) public organizationsmaster; // Mapping με τις διευθύνσης των οργανισμών όπως έχει δηλωθεί από την master
    address[] public organizationsaddressesdeclairemaster; // Λίστα με τις διευθύνσης των οργανισμών όπως έχει δηλωθεί από την master
    mapping(address => bool) public organizations; // Mapping με τις διευθύνσης των οργανισμών που έχουν συμμετάσχει στην έρευνα καταθέτοντας το ανάλογο ποσό
    address[] public organizationsaddresses; // Λίστα με τις διευθύνσης των οργανισμών που έχουν συμμετάσχει στην έρευνα καταθέτοντας το ανάλογο ποσό

    mapping(uint => bool) public check_complete_activity;

    mapping(address => bool) public investors;
    address[] public investorsaddresses;



    enum State {Inactive, Active, Pending, Cancelled, Completed}


    DetailActivities[] public activitiesTable;
    struct DetailActivities {
        uint value;
        uint leftvalue;
        uint timeSecStartActivity;
        uint timeSecStopActivity;
        uint timeStartActivity;
        uint timeStopActivity;
        string detail;
        uint perscentagecoverage;
        State statusActivity;
        mapping(address => uint) available_ether_to_spent_per_organization;

    }

    DetailPurchase[] public detailPurchase;
    struct DetailPurchase {
        uint activityNumber;
        uint value;
        string detail;
        address seller;
    }

    modifier requireToBeContractHasAllContribution{
        require(address(this).balance == ((numInvestors*contribution) + (numOrganizations*contributionorganization)));
        _;
    }

    modifier requireToBeMaster(){
        require(master == msg.sender);
        _;
    }

    modifier requireToBeOrganizationDeclareMaster(){
        require(organizationsmaster[msg.sender] == true);
        _;
    }

    modifier requireToBeOrganization(){
        require(organizations[msg.sender] == true);
        _;
    }

    modifier requireToBeInvestors(){
        require(investors[msg.sender] == true);
        _;
    }

    modifier requireOrganizationAndInvestorsDonate{
        require(organizationsaddresses.length == numOrganizations); // Θα πρέπει όλοι οι Οργανισμοί να έχουν πραγματοποιήσει συνεισφορά
        require(investorsaddresses.length == numInvestors); // Θα πρέπει όλοι οι ερευνητές να έχουν πραγματοποιήσει την επένδηση
        _;
    }
    constructor (uint _numOrganizations, uint _numInvestors, uint _maxTimesOfProject,uint _contribution,uint _contributionorganizationpercentage, uint _activities, address _master) public {
        require(_numOrganizations > 0);
        require(_numInvestors > 0);
        require(_maxTimesOfProject > 0);
        require(_contribution > 0);
        require(_contributionorganizationpercentage > 0);
        require(_activities > 0);
        // _maxTimesOfProject --> Χρονική Διάρκεια σε sec της Έρευνας . Η έρευνα ξεκινάει αφού επενδύσουν ο απαραίτητος αριθμός των επενδυτών
        master = _master;
        numOrganizations = _numOrganizations;
        numInvestors = _numInvestors;
        contribution = _contribution;
        contributionorganization = ((_contributionorganizationpercentage*contribution)/100);
        availableetherforactivities = (_contribution*_numInvestors);
        activities = _activities;
        maxTimesOfProjectTemp = _maxTimesOfProject;
        statusOfResearch = State.Inactive;
    }

    function B_AddOrganizations (address _organizations) public requireToBeMaster{
        require(!organizationsmaster[_organizations] == true);
        require(nowOrganizationsAddedDeclaireMaster < numOrganizations);
        organizationsmaster[_organizations] = true;
        organizationsaddressesdeclairemaster.push(_organizations);
        nowOrganizationsAddedDeclaireMaster ++ ;
    }

    function C_AddActivity (uint _value, uint _timeStartActivity, uint _duration, string _detail) public requireToBeMaster{
        require(nowOrganizationsAddedDeclaireMaster == numOrganizations);
        //    require(nowInvestorsAdded == numInvestors);
        require(_value <= availableetherforactivities);
        //    require((_timeStartActivity + _duration) == maxTimesOfProject);
        require(activitiesTable.length < activities);
        // _timeStartActivity --> Time In seconds reference where project started
        // _duration --> Time In seconds reference where activity started

        DetailActivities memory newDetailActivities = DetailActivities({
            value : _value,
            leftvalue : _value,
            timeSecStartActivity: _timeStartActivity,
            timeSecStopActivity: _duration, //Χρονική Διάρκεια σε sec της Activity. Activity ξεκινάει αφού επενδύσουν ο απαραίτητος αριθμός των επενδυτών
            timeStartActivity : 0,
            timeStopActivity: 0,
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
        require(nowOrganizationsAddedDeclaireMaster == numOrganizations);
        //    require(nowInvestorsAdded == numInvestors);
        require(detailActivity.perscentagecoverage < 100 && detailActivity.perscentagecoverage + _perscentage <= 100);
        /* Τα ποσοστά που έχουν εισαχθεί να μην ξεπερνούν το 100% ή να είναι μικρότερα
        ή ίσα με το 100% έπειτα απο το εισαχθέν ποσοστό.*/
        detailActivity.available_ether_to_spent_per_organization[organizationsaddressesdeclairemaster[_organizationsaddresses]] = (_perscentage*detailActivity.value) / 100;
        detailActivity.perscentagecoverage = activitiesTable[_activityNumber].perscentagecoverage + _perscentage;
    }

    function E_OrganizationsPayment () public payable requireToBeOrganizationDeclareMaster{
        require(activitiesTable.length == activities);  // Require activities create by master
        require(!organizations[msg.sender] == true);
        require(msg.value == contributionorganization);
        require(nowOrganizationsAdded < numOrganizations);
        organizations[msg.sender] = true;
        nowOrganizationsAdded++;
        organizationsaddresses.push(msg.sender);
    }

    function F_MakeAppanage () public payable{
        require(activitiesTable.length == activities);  // Require activities create by master
        require(!investors[msg.sender] == true);        // Require Investors not MakeAppanage before in this contract
        require(msg.value == contribution);             // Require Appanage equal Contribution which set master before
        require(organizationsaddresses.length == numOrganizations); // Require to OrganizationPayment
        require(nowInvestorsAdded < numInvestors);      // Require not to make all count of investors Appanage
        investorsaddresses.push(msg.sender);
        investors[msg.sender] = true;
        nowInvestorsAdded ++ ;
        if (nowInvestorsAdded == numInvestors) {
            maxTimesOfProject = block.timestamp + maxTimesOfProjectTemp;
            for(uint n=0; n<=activitiesTable.length-1; n++){
                activitiesTable[n].timeStartActivity = block.timestamp + activitiesTable[n].timeSecStartActivity;
                activitiesTable[n].timeStopActivity = block.timestamp + activitiesTable[n].timeSecStopActivity;
            }
        }
    }

    function StartInvestment () public {
        for(uint n=0; n<=activitiesTable.length-1; n++){
            activitiesTable[n].timeStartActivity = block.timestamp + activitiesTable[n].timeSecStartActivity;
            activitiesTable[n].timeStopActivity = block.timestamp + activitiesTable[n].timeSecStopActivity;
        }
    }

    function G_checkStatusOfActivities () public{ // check status of All Activities
        for(uint i=0; i<=(activitiesTable.length-1); i++){
            checkStatusOfActivity(i);
        }
    }

    function checkStatusOfActivity (uint _activityNumber) public requireOrganizationAndInvestorsDonate returns (State){
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        if ((statusOfResearch == State.Inactive) && detailActivity.timeStartActivity < block.timestamp // Case 1 Initial Start
            && (detailActivity.timeStartActivity+detailActivity.timeStopActivity) > block.timestamp ){
            statusOfResearch = State.Active;
            detailActivity.statusActivity = State.Active;
            return detailActivity.statusActivity;
        }else if (statusOfResearch == State.Active && detailActivity.timeStartActivity < block.timestamp // Case 2 But time is over
            && detailActivity.timeStartActivity+detailActivity.timeStopActivity < block.timestamp ){
            statusOfResearch = State.Pending;
            detailActivity.statusActivity = State.Pending;
            return detailActivity.statusActivity;
        }
    }

    function H_PaySeller (uint _activityNumber, uint _value, string _detail, address _seller) public requireToBeOrganization requireOrganizationAndInvestorsDonate returns(bool){
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        require(_value <= detailActivity.available_ether_to_spent_per_organization[msg.sender]);
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
            detailActivity.available_ether_to_spent_per_organization[msg.sender] = (detailActivity.available_ether_to_spent_per_organization[msg.sender] - _value);
            return true;
        }else {
            return false;
        }
    }

    function I_changeStatusOfActivity(uint _activityNumber, State _state) public{
        require(!(check_complete_activity[_activityNumber] == true)); // Απαιτείται να μην έχει γίνει ήδη Completed μια Activity
        require(_state == State.Completed || _state ==  State.Cancelled);
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        if (_state == State.Completed && numberOfCompletedActivities == (activitiesTable.length-1)){ // Mark this Activity as Completed and all the Other has been Marked as Completed
            detailActivity.statusActivity = _state;
            check_complete_activity[_activityNumber] = true;
            numberOfCompletedActivities++;
            statusOfResearch = State.Completed;
        }else if(_state == State.Completed){ // Mark this Activity as Completed
            detailActivity.statusActivity = _state;
            check_complete_activity[_activityNumber] = true;
            numberOfCompletedActivities++;
            statusOfResearch = State.Active;
        }else {                             // Mark as Cancelled
            detailActivity.statusActivity = _state;
            statusOfResearch = _state;
        }
    }

    function getInvestmentSummary() public view returns ( address, uint, uint, uint, uint, uint, uint, uint, uint, State) {
        return (
        master,
        numOrganizations,
        nowOrganizationsAddedDeclaireMaster,
        nowOrganizationsAdded,
        contributionorganization,
        numInvestors,
        nowInvestorsAdded,
        contribution,
        activities,
        statusOfResearch
        );
    }


    function getAvailableEtherPerOrganizationPerActivity (uint _activityNumber, address _researcheraddresses) public view returns(uint) {
        DetailActivities storage detailActivity = activitiesTable[_activityNumber];
        return detailActivity.available_ether_to_spent_per_organization[_researcheraddresses];
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
            _valueReturnOrganization = (contributionorganization /organizationsaddresses.length);
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