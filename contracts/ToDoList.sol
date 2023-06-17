// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract ToDoList {
    uint public _idUser;// every user will assign an id
    address public ownerOfContract;//owner of the contract the one who deployed the contract

    address[] public creators;// all the users who will create todo list we will store their addresses here
    string[] public message; // store all the messages.
    uint256[] public messageId; //here we are going to hold all the ID's of the users who created the todo list

    // the above are state variables


    struct ToDolistApp{
        address account;
        uint256 userId;
        string message;
        bool completed;// this is to check the status of their todo list
    }

    event ToDoEvent(
        address indexed account,
        uint256 indexed userId,
        string message,
        bool completed
    );
    
    //mapping to identify all the information about the user on the base of their address

    mapping (address => ToDolistApp) public toDolistApps;

    constructor() {
        ownerOfContract = msg.sender;
    }

    //function that will increament the ID of the user
    function inc() internal {
        _idUser++;  
    }

    function createList(string calldata _message) external{
        inc();//calling the function to increase the ID of the user
        uint256 idNumber = _idUser;
        ToDolistApp storage toDo = toDolistApps[msg.sender];


        toDo.account = msg.sender;
        toDo.userId = idNumber;
        toDo.message = _message;
        toDo.completed = false;

        creators.push(msg.sender); //push the address to the creators array
        message.push(_message);// push the message to the message array
        messageId.push(idNumber);// push the ID to the messageId array

        // now we have to emit the event that we have above

        emit ToDoEvent(msg.sender, toDo.userId, _message, toDo.completed);

    }


    function getCreatorData(address _address) public view returns(address, uint256, string memory, bool){
        // create the copy of the variables to be used in the function 
        ToDolistApp memory singleUserData = toDolistApps[_address];// the address of the user in the mapping.
        // we are using memory in the state variables because we are going to use it in the function
        // and we will get the information in the base of the address we provide in the mapping.
        return(
            singleUserData.account,
            singleUserData.userId,
            singleUserData.message,
            singleUserData.completed
        );
    }

    // functions of all the arrays that are created

    function getAddress() external view returns(address[] memory){
        return creators;
    }

    function getMessage() external view returns(string[] memory){
        return message;
    }

    function toggle(address _creator) public {
        ToDolistApp storage singleUserData = toDolistApps[_creator];
        singleUserData.completed = !singleUserData.completed;
    }

}