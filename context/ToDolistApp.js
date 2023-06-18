// here we are going to write all the functionality for our applications for communicating with ut smart contract
// everything is going to be here for the data
import React  from 'react'

import { useState } from 'react'

// import WebModal from 'WebModal';

import { ethers } from 'ethers';

// internal import

import { toDoListtAddress } from './constants';
import { toDoListABI } from './constants';

// create a fetch contract function that will allow us to communicate with the contract

const fetchContract = (signerOrProvider) => 
    new ethers.Contract(toDoListtAddress, toDoListABI, signerOrProvider);// this will allow us to fetch the contract

    export const ToDoListContext  = React.createContext

    export const ToDoListProvider = ({children}) => {
        const [currentAccount, setCurrentAccount] = useState("");
        const [error, setError] = useState("");
        const [allToDoList, setAllToDoList] = useState([]);// all to do list is going to be here for the data for the user
        const [myList, setMyList] = useState([]);// list is going to be here for the data for the user
        const [allAddress, setAllAddress] = useState([]);// all address is going to be here for the data for the user

        // function for connecting our front end application with metamask

        const checkIfWalletIsConnected = async () => {
            if(!window.ethereum) return setError("Please Install metamask"); // if metamask is not installed
            const accounts = await window.ethereum.request({ method: "eth_accounts" }); // this will allow us to get the accounts
            if(accounts.length) {
                setCurrentAccount(accounts[0]);// this will allow us to get the current account
            } else {
                setError("No account found, Please install MetaMask & connect and reload");// if metamask is not connected and not found they connect and reload the page
            }
        };
        return(
            <ToDoListContext.ToDoListProvider value={{checkIfWalletIsConnected}}>
                {children}
            </ToDoListContext.ToDoListProvider>
        )
    }

    

const ToDoListApp = () => {
    return (
        <div>
            ToDoListApp
        </div>
    )
}