# Minesweeper UI

A Fully Homomorphic Encryption (FHE) powered Minesweeper game built on [fhEVM](https://github.com/zama-ai/fhevm) using
Solidity. The game board remains encrypted on-chain, allowing players to reveal cells without exposing the full state.
This project demonstrates the use of FHE for privacy-preserving gameplay in smart contracts.

## Warning

I am **NOT** a Front-end developer and I do not like and do not have enough experience in developing Front End Apps. I prefer Smart Contracts and Backend. I made an MWP (Minimum Working Product) to just show you that I can call transactions on the blockchain, catch events and contract state. But I did not pay enough attention to the UI itself. This is not what I am ready to do.

## TX Proofs

These transactions were called through this Frontend App:

1. [Start Game](https://sepolia.etherscan.io/tx/0xffa3cf7a379d77f4a522e52137422bc35de8098704b0563c35147744ebf1b376)
2. [Request Cell Reveal 1](https://sepolia.etherscan.io/tx/0x55280721a8480b7cef3ddad6ad750e2d1b41fdaf507a4a20ba6322f6310958e3)
3. [Request Cell Reveal 2](https://sepolia.etherscan.io/tx/0xcc0a18e2fca61e2c0647bab8a2221f496998310644d524fa9c6fc9a0734fba5e)
4. [Start New Game](https://sepolia.etherscan.io/tx/0x278028549003b4524f96b4e105f710677719fa4508439401076f7a7f13aff432)
5. More on the smart contract page: [Page](https://sepolia.etherscan.io/address/0x898cba70b3853db431f7668068ad38b7ce05d3f4)

## Getting started

```bash
npm install
```

## Configuration

Copy `.env.example` to `.env` and update the gateway URL, ACL address, and KMS address to match the fhEVM you're using.

## Development

```bash
npm run dev
```

The server listens on [http://localhost:5173/](http://localhost:5173/)

## Build

```bash
npm run build
```
