pragma solidity ^0.4.0;

contract SimpleStorage {
    uint256 storageDate;
    
    function set(uint256 x) public {
        storageDate = x;
    }
    
    function get() public view returns (uint256) {
        return storageDate;
    }
}