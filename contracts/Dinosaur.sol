// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "erc721a/contracts/ERC721A.sol";

contract Dinosaur is ERC721A{
    address public owner;
    uint256 public maxMintable = 5;
    string baseUrl = "https://gateway.pinata.cloud/ipfs/QmYkGvA5RmqmL72qk53Jaw8upWH9igiUMczwcCViRzod3F";
    string public prompt;
    constructor() ERC721A("DinosaurSchool", "DS") {
        owner = msg.sender;
        prompt="dinosaur attending modern day college";
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    function mint(uint256 quantity) external payable onlyOwner{
        require(totalSupply() + quantity <= maxMintable ,"max mintable is 5");
        _mint(msg.sender, quantity);
    }


    function _baseURI() internal view override returns (string memory){
        return baseUrl;
    }
    function promptDescription() external view returns (string memory) {
        return prompt;
    }
}
