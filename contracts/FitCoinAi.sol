// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract FitCoinAI is ERC20 {
    struct Reward {
        string id;  // Change from uint256 to string
        uint256 amount;
    }

    // Mapping to store rewards per user
    mapping(address => Reward[]) private userRewards;

    // Event to be emitted when a reward is registered
    event RewardRegistered(address indexed user, string id, uint256 amount);

    constructor() ERC20("FitCoinAI", "FCAI") {
        // Initial minting can be done here if needed, e.g., mint initial supply to the deployer
        // _mint(msg.sender, initialSupply);
    }

    // Additional functions for minting and burning tokens can be added here
    // Note: Be cautious with who has access to minting and burning functions
    function mint(address account, uint256 amount) external {
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) external {
        _burn(account, amount);
    }

    // Function to register a reward for a user
    function registerReward(address user, string memory id, uint256 amount) external {
        // Register the reward for the user
        userRewards[user].push(Reward(id, amount));
        
        // Emit the RewardRegistered event
        emit RewardRegistered(user, id, amount);

        // Optionally, you could mint the reward amount to the user
        _mint(user, amount);
    }

    // Function to retrieve rewards for a user
    function getUserRewards(address user) external view returns (Reward[] memory) {
        return userRewards[user];
    }
}
