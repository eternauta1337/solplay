# Solplay

Solidity playground to write solidity code in the left side and see solc output on the right side --while you type--.
This does not use solcjs but C++ solc. Requires that the program is installed in the system. Uses a small expressjs server to run the compilations.

This tool is intended to be ran locally, and only intended as a visualization tool for Zeppelin's Solidity Compiler audit.

![Solcplay gif](../assets/peek_solplay.gif)

## Installation

1) Check out repo
2) `npm i`
3) Make sure you have solc in your system: [Installing solc](https://solidity.readthedocs.io/en/v0.4.24/installing-solidity.html)
4) For dissambly options, also make sure you have evmdis installed: [Evmdis](https://github.com/Arachnid/evmdis)

## Usage

1) `npm start`
2) `npm run server`
3) In your browser => `localhost:3000`
4) Type solc arguments in the input fields and press enter (type --help to see available commands)
5) The panels are draggable
6) For binary outputs like --bin, you can use an aggregated parameter --evmdis to make the output more readable.
