//SPDX-License-Identifier: MIT
pragma solidity >=0.8.0 <0.9.0;

/**
 * A smart contract that allows users to view and increment their bump value
 */
contract BumpContract {
    // Mapping to store bump values for each address
    mapping(address => uint8) public bumpValues;

    // Event to emit when a bump value is incremented
    event BumpIncremented(address indexed user, uint8 newValue);

    /**
     * Function to get the bump value for a specific address
     * @param _address The address to check the bump value for
     * @return The bump value for the given address
     */
    function getBumpValue(address _address) public view returns (uint8) {
        return bumpValues[_address];
    }

    /**
     * Function to increment the bump value for the caller's address
     * Resets to 0 if the maximum value is reached
     */
    function incrementBump() public {
        if (bumpValues[msg.sender] == type(uint8).max) {
            bumpValues[msg.sender] = 0;
        } else {
            bumpValues[msg.sender] += 1;
        }
        emit BumpIncremented(msg.sender, bumpValues[msg.sender]);
    }
}
