import { context, logging } from "near-sdk-as";

const FEATURES_INFO =
  "standards - NEP141 / NEP171\n" +
  "transaction results - either view transaction in NEAR Explorer or use near tx-status <tx_hash>\n" +
  "special data types:\n" +
  "\taccounts are String type and validation is available in Rust with env::is_valid_account_id\n" +
  "\tCollections ( Rust & AssemblyScript )\n" +
  "payable methods - #[payable] ( Rust decorator )\n" +
  "event model - polling EXPERIMENTAL_changes RPC method\n" +
  "running a node - nearup ( repo )\n";

const PRIMITIVES_INFO =
  "account - NEAR supports one account type with an unlimited number of scoped keys\n" +
  'state - NEAR state is isolated to one "home" shard per account in a "multithreaded" env\n' +
  "transaction - NEAR supports 8 composable Actions which determine transaction behavior\n" +
  "gas - NEAR gas price is algorithmically controlled to limit shard congestion at 50%\n" +
  "block NEAR blocks are produced using PoS consensus at a rate of one per second\n";

export function primitives(): string {
  logging.log("-------------------------------------------------------");
  logging.log("Contract Called : " + context.contractName);
  logging.log("Contract Signer : " + context.predecessor);
  logging.log("Contract Sender : " + context.sender);
  logging.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

  return `Hello, ${context.sender}. Here are the primitive types of near blockchain:\n${PRIMITIVES_INFO}`;
}

export function features(): string {
  logging.log("-------------------------------------------------------");
  logging.log("Contract Called : " + context.contractName);
  logging.log("Contract Signer : " + context.predecessor);
  logging.log("Contract Sender : " + context.sender);
  logging.log("- - - - - - - - - - - - - - - - - - - - - - - - - - - -");

  return `Hello, ${context.sender}. Here are the main features of near blockchain:\n${FEATURES_INFO}`;
}

export function primitives_near_vs_eth(eth: string): string {
  return `Hello, ${context.sender}. Here is the comparison of near and etherium blockchain primitives:\nNEAR:\n${PRIMITIVES_INFO}\nETHERIUM:\n${eth}`;
}

export function features_near_vs_eth(eth: string): string {
  return `Hello, ${context.sender}. Here is the comparison of near and etherium blockchain features:\nNEAR:\n${FEATURES_INFO}\nETHERIUM:\n${eth}`;
}
