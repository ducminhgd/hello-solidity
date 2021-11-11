# Instruction

1. Register account on [infura.io](https://infura.io).
2. Create new project with type "Etherum"
3. Update `hardhat.config.js`
   1. Choose **Rinkeby** as `ENDPONTS`
   2. Copy HTTPS endpoint and paste into network configurations
   3. Using metamask to get `chainId` of Network
        
        ```typescript
        module.exports = {
            ...
            networks: {
                // Register and create project on infura.io
                rinkeby: {
                    chainId: 4,
                    url: "https://rinkeby.infura.io/v3/d8429a25f6f6474387180d3d635f3a12",
                    accounts: [privateKey]
                }
            },
            ...
        }
        ```
    4. Using Metamask and create a new wallet
4. Go to https://faucet.rinkeby.io/ and follow instructions to get Faucet tokens
5. Deploy:
   1. Localhost run `npx hardhat node` and open another terminal to run `npx hardhat run --network localhost scripts/deploy.js`
   2. Rinkeby: `npx hardhat run --network rinkeby scripts/deploy.js`