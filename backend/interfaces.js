const { Alchemy, Network } = require('alchemy-sdk');

const settings = {
    apiKey: "ENTER-ALCHEMY-API-KEY",
    network: Network.ETH_MAINNET
};

const callAlchemy = async (wallet) => {
    const alchemy = new Alchemy(settings);
    const mintednfts = await alchemy.nft.getNftsForOwner(wallet);
    return mintednfts;
}

module.exports = { callAlchemy };