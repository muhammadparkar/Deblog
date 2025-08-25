# Deblog

Deblog is a decentralized blogging platform that leverages blockchain technology to bring transparency, ownership, and censorship resistance to content creation. Built primarily with JavaScript, Solidity, HTML, and CSS, Deblog enables users to publish, manage, and interact with blogs in a trustless environment.

## Features

- **Decentralized Content:** Blogs and posts are managed on the blockchain, ensuring data immutability.
- **User Ownership:** Authors have complete control and ownership over their content.
- **Censorship Resistance:** Content cannot be arbitrarily removed or censored.
- **Seamless UI:** An intuitive frontend built with JavaScript, HTML, and CSS for easy interaction.
- **Smart Contracts:** Solidity-powered contracts for post management and user authentication.
- **Responsive Design:** Mobile-friendly interface for blogging on the go.
- **IPFS Support (via Pinata):** Store post assets (images, media, JSON) on IPFS with a reliable pinning layer.

## Tech Stack

- **Frontend:** JavaScript, HTML, CSS
- **Smart Contracts:** Solidity
- **Blockchain Integration:** Ethereum-compatible (MetaMask)
- **Local Development:** Ganache (personal Ethereum blockchain)
- **Decentralized Storage:** IPFS (via Pinata Cloud)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MetaMask](https://metamask.io/) (for blockchain interaction)
- [Truffle](https://www.trufflesuite.com/) or [Hardhat](https://hardhat.org/) (for smart contract development)
- [Ganache](https://trufflesuite.com/ganache/) (for local blockchain development)
- [Pinata Cloud](https://www.pinata.cloud/) account (for IPFS pinning; optional but recommended for media storage)

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/muhammadparkar/Deblog.git
   cd Deblog
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. (Optional) Install Pinata SDK if you plan to pin content from the app or scripts
   ```bash
   npm install @pinata/sdk
   ```

### Environment Variables

Create a `.env` file in the project root to store sensitive keys and config. Do not commit this file.

Suggested variables:
```
# Blockchain
RPC_URL=http://127.0.0.1:8545
CHAIN_ID=1337

# Contract addresses (set after deployment)
DEBLOG_CONTRACT_ADDRESS=

# Pinata (recommended to use JWT)
PINATA_JWT=
# OR legacy key/secret (if you must)
PINATA_API_KEY=
PINATA_API_SECRET=
PINATA_GATEWAY_URL=https://gateway.pinata.cloud/ipfs/
```

## How to Run the App

1. Start a local blockchain with Ganache
   - Install Ganache (GUI or CLI).
   - Start on localhost with default port 8545.
     - Common Chain IDs:
       - 1337 (current default in many local setups)
       - 5777 (legacy Ganache default)
   - Note the first account's private key if you need to import it into MetaMask for testing.

2. Connect MetaMask to Ganache
   - Open MetaMask > Networks > Add network manually:
     - Network Name: Ganache (Local)
     - RPC URL: http://127.0.0.1:8545
     - Chain ID: 1337 (or 5777 if using that)
     - Currency Symbol: ETH
   - Optionally import an account from Ganache using the provided private key.

3. Compile and deploy smart contracts
   - If using Truffle:
     ```bash
     truffle compile
     truffle migrate --network development
     ```
     Example development network (in truffle-config.js):
     ```js
     module.exports = {
       networks: {
         development: {
           host: "127.0.0.1",
           port: 8545,
           network_id: "*", // Match any network id
         },
       },
       compilers: {
         solc: { version: "0.8.21" }
       }
     };
     ```
   - If using Hardhat:
     ```bash
     npx hardhat compile
     npx hardhat run scripts/deploy.js --network localhost
     ```
     Example localhost network (in hardhat.config.js):
     ```js
     require("@nomicfoundation/hardhat-toolbox");

     module.exports = {
       solidity: "0.8.21",
       networks: {
         localhost: {
           url: "http://127.0.0.1:8545",
           chainId: 1337
         }
       }
     };
     ```

   - After deployment, update your frontend config or `.env` with the deployed contract address(es):
     ```
     DEBLOG_CONTRACT_ADDRESS=0xYourDeployedContract
     ```

4. Configure IPFS via Pinata (optional but recommended)
   - Create a Pinata account.
   - Generate an API Key:
     - Preferred: Create an Access Token (JWT) with pinning scopes.
     - Copy the JWT to `.env` as PINATA_JWT.
   - Set a gateway base URL if you want a custom gateway (optional).

5. Start the frontend application
   ```bash
   npm start
   ```
   - This will start the development server, usually at `http://localhost:3000`.

6. Open Deblog in your browser
   - Visit http://localhost:3000
   - Connect your MetaMask wallet (ensure you are on the Ganache/desired network).

7. Interact with Deblog
   - Create, edit, and browse decentralized blog posts.

## Using Ganache

Ganache provides a fast, deterministic blockchain for local development.

- Quick tips:
  - Reset the chain from the Ganache GUI when you need a clean state.
  - If deployment fails due to nonce or gas issues, restart Ganache and redeploy.
  - Ensure your Hardhat/Truffle network config points to the same port/chain ID as Ganache.
  - If MetaMask shows “transaction underpriced” or “nonce too low,” reset MetaMask account nonce (Settings > Advanced > Reset Account) and try again.

## Using Pinata Cloud (IPFS)

Pinata is a pinning service that keeps your content available on IPFS. Use it to store post bodies (as JSON), thumbnails, and media.

- Recommended approach: Use a JWT for API calls.
- Typical flow:
  1. Upload files or JSON to IPFS via Pinata.
  2. Receive a CID.
  3. Store the CID (or URL using a gateway) in your smart contract or app database.
  4. Resolve the content in the frontend using a gateway URL.

## Usage

- **Sign In:** Connect your Ethereum wallet to get started.
- **Create Post:** Publish new blog entries to the blockchain. Optionally store large content and media on IPFS via Pinata, then save the CID on-chain.
- **Manage Posts:** Edit or delete posts you own.
- **Browse:** View content from all users in a decentralized feed.

## Configuration Examples

- Use IPFS CIDs in your app, and resolve via a gateway:
  - `ipfs://<CID>` (native scheme) or
  - `https://gateway.pinata.cloud/ipfs/<CID>` (HTTP gateway)
- Storing the CID on-chain keeps your contract lightweight and avoids high gas costs from storing full content.

## Troubleshooting

- Ganache:
  - “Invalid sender” or “nonce too low”: Reset MetaMask account, restart Ganache, redeploy.
  - Contracts not updating: Clear artifacts/builds, re-compile and re-deploy.
- Pinata:
  - 401/403 errors: Ensure you’re using a valid JWT or API key/secret with the correct scopes.
  - Slow content fetch: Try a different gateway or pin to multiple services for redundancy.

## Security

- Never commit `.env` or any API keys/secrets.
- Prefer Pinata JWT over API key/secret.
- Consider rate limits and usage caps on your Pinata plan.

## Contributing

Pull requests, issues, and feature suggestions are welcome!

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Open a Pull Request describing your changes.

## License

This project is licensed under the MIT License.

## Contact

- Author: [Muhammad Parkar](https://github.com/muhammadparkar)
- Repository: [Deblog](https://github.com/muhammadparkar/Deblog)

---
