import { context, logging, ContractPromise } from "near-sdk-as";

const NEAR_CONTRACT = "challenge-9-near.lkskrnk.testnet";
const FEATURES_INFO =
  "standards - ERC20 / ERC721\n" +
  "transaction results - Etherscan\n" +
  "special data types:\n" +
  "\taddress\n" +
  "\tmapping\n" +
  "payable methods - payable\n" +
  "event model - Events\n" +
  "running a node - ganache\n";

const PRIMITIVES_INFO =
  "account - Ethereum supports two types of accounts with a single private key for EOAs\n" +
  "state - Ethereum state is replicated across all nodes of a single threaded machine\n" +
  "transaction - Ethereum supports transfer, contract deployment and function call transactions\n" +
  "gas - Ethereum gas price is determined by network load and profit-motive\n" +
  "block Ethereum blocks are produced using PoW consensus at a rate of one per 15s\n";

export function primitives(): string {
  logging.log("-------------------------------------------------------");
  logging.log("Contract Called : " + context.contractName);
  logging.log("Contract Signer : " + context.predecessor);
  logging.log("Contract Sender : " + context.sender);
  logging.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

  return `Hello, ${context.sender}. Here are the primitive types of etherium blockchain:\n${PRIMITIVES_INFO}`;
}

export function features(): string {
  logging.log("-------------------------------------------------------");
  logging.log("Contract Called : " + context.contractName);
  logging.log("Contract Signer : " + context.predecessor);
  logging.log("Contract Sender : " + context.sender);
  logging.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

  return `Hello, ${context.sender}. Here are the main features of etherium blockchain:\n${FEATURES_INFO}`;
}

@nearBindgen
class Args {
  eth: string;
}

export function primitives_near_vs_eth(): ContractPromise {
  const args: Args = { eth: PRIMITIVES_INFO };
  let promise = ContractPromise.create(
    NEAR_CONTRACT,
    "primitives_near_vs_eth",
    args.encode(),
    10_000_000_000_000
  );
  return promise;
}

export function features_near_vs_eth(): ContractPromise {
  const args: Args = { eth: FEATURES_INFO };
  let promise = ContractPromise.create(
    NEAR_CONTRACT,
    "features_near_vs_eth",
    args.encode(),
    10_000_000_000_000
  );
  return promise;
}
