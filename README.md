# Solplay

This simple web utility allows you to write Solidity code and see it compiled via solc on on real-time. Each view accepts solc compiler options, as well as some aggregated options which are not actually part of solc.

The tool is intended for simple visualisation of Solidity to EVM output via solc.

![Solcplay gif](../assets/peek_solplay.gif)

NOTE: This tool is intended to be ran 100% locally. It does not use solcjs, but good old C++ solc, and so, solc needs to ne installed on your system. A small expressjs server is used to run your local solc version.

## Installation

1) Check out repo
2) `npm i`
3) Make sure you have solc in your system: [Installing solc](https://solidity.readthedocs.io/en/v0.4.24/installing-solidity.html)

## Usage

1) `npm start`
2) `npm run server`
3) In your browser => `localhost:3000`
4) Type solc arguments in the input fields and press enter (type --help to see available commands).
5) The panels are draggable.
6) For binary outputs like --bin, you can use the aggregated options listed below.

## Aggregated options

Installing the following tools gives access to the aggregated options:

### disasm, evm
[evm-tools](https://github.com/CoinCulture/evm-tools) provides additional features.

### evmdis
[Evmdis](https://github.com/Arachnid/evmdis)
