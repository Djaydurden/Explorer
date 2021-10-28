import {ethers} from 'ethers';
import { ethers } from "https://cdn.ethers.io/lib/ethers-5.0.esm.min.js";

const url = 'https://mainnet.infura.io/v3/594b3060b96048e49b4355571b0342f8';
const customHttpProvider = new ethers.providers.JsonRpcProvider(url);

async function populateInfo() {
 
    let block = await customHttpProvider.getBlock("latest");
    console.log("Current Block number1: " + block.number);
    let latestBlockNum = block.number;
    for (let i=0; i<10; i++){ 
    let block = await customHttpProvider.getBlock(latestBlockNum-i);
        let number = block.number
        let hash = block.hash;
        let time =block.timestamp;
     console.log("Current Block number2: " + block.number);
     console.log("Current Block hash: " + block.hash);
     console.log("Current Block time: " + block.timestamp);
   
    //document.getElementById('number').innerHTML = "number11";
    //document.getElementById('hash').innerHTML = "hash11";
    //document.getElementById('time').innerHTML = "time11";    
    }
  
}

//document.getElementById("deploy").addEventListener("click", populateInfo);