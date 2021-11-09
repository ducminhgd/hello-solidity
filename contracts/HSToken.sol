//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract HSToken is ERC20 {
    constructor() ERC20("HSToken", "HST") {
        _mint(msg.sender, 1_000_000 * 10 ** decimals());
    }
}
