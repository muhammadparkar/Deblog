# Deblog

Deblog is a decentralized blogging platform that leverages blockchain technology to bring transparency, ownership, and censorship resistance to content creation. Built primarily with JavaScript, Solidity, HTML, and CSS, Deblog enables users to publish, manage, and interact with blogs in a trustless environment.

## Features

- **Decentralized Content:** Blogs and posts are managed on the blockchain, ensuring data immutability.
- **User Ownership:** Authors have complete control and ownership over their content.
- **Censorship Resistance:** Content cannot be arbitrarily removed or censored.
- **Seamless UI:** An intuitive frontend built with JavaScript, HTML, and CSS for easy interaction.
- **Smart Contracts:** Solidity-powered contracts for post management and user authentication.
- **Responsive Design:** Mobile-friendly interface for blogging on the go.

## Tech Stack

- **Frontend:** JavaScript, HTML, CSS
- **Smart Contracts:** Solidity
- **Blockchain Integration:** (e.g., Ethereum, compatible wallet support like MetaMask)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MetaMask](https://metamask.io/) (for blockchain interaction)
- [Truffle](https://www.trufflesuite.com/) or [Hardhat](https://hardhat.org/) (for smart contract development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/muhammadparkar/Deblog.git
   cd Deblog
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## How to Run the App

1. **Compile and deploy smart contracts**
   - If using Truffle:
     ```bash
     truffle compile
     truffle migrate
     ```
   - If using Hardhat:
     ```bash
     npx hardhat compile
     npx hardhat run scripts/deploy.js
     ```
   - Ensure your blockchain node (e.g., Ganache or Hardhat local network) is running.

2. **Configure the frontend**
   - Update any contract addresses in the frontend config to match the deployed smart contract address.

3. **Start the frontend application**
   ```bash
   npm start
   ```
   - This will start the development server, usually at `http://localhost:3000`.

4. **Open Deblog in your browser**
   - Visit [http://localhost:3000](http://localhost:3000)
   - Connect your MetaMask wallet (ensure you are on the correct network).

5. **Interact with Deblog**
   - Create, edit, and browse decentralized blog posts.

## Usage

- **Sign In:** Connect your Ethereum wallet to get started.
- **Create Post:** Publish new blog entries to the blockchain.
- **Manage Posts:** Edit or delete posts you own.
- **Browse:** View content from all users in a decentralized feed.

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

Enjoy decentralized blogging with Deblog!
