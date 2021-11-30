import { context, ContractPromise } from "near-sdk-as";

const ETH_CONTRACT = "challenge-9-etherium.lkskrnk.testnet";
const NEAR_CONTRACT = "challenge-9-near.lkskrnk.testnet";

export class Near102 {
  get_primitives(blockchain: string): ContractPromise {
    const contract: string =
      blockchain == "near" ? NEAR_CONTRACT : ETH_CONTRACT;
    context.accountBalance;
    let promise = ContractPromise.create(
      contract,
      "primitives",
      [],
      10_000_000_000_000
    );
    return promise;
  }

  get_features(blockchain: string): ContractPromise {
    const contract: string =
      blockchain == "near" ? NEAR_CONTRACT : ETH_CONTRACT;
    let promise = ContractPromise.create(
      contract,
      "features",
      [],
      10_000_000_000_000
    );
    return promise;
  }

  compare_primitives(): void {
    let promise = ContractPromise.create(
      ETH_CONTRACT,
      "primitives_near_vs_eth",
      [],
      20_000_000_000_000
    );
    promise.returnAsResult();
  }

  compare_features(): void {
    let promise = ContractPromise.create(
      ETH_CONTRACT,
      "features_near_vs_eth",
      [],
      20_000_000_000_000
    );
    promise.returnAsResult();
  }
}

export function primitives(blockchain: string): void {
  assert(
    blockchain == "etherium" || blockchain == "near" || "near_vs_etherium",
    "We only support 'near', 'etherium' or 'near_vs_etherium'"
  );
  let instance = new Near102();
  if (blockchain == "near_vs_etherium") {
    instance.compare_primitives();
  } else {
    let promise: ContractPromise;
    promise = instance.get_primitives(blockchain);
    promise.returnAsResult();
  }
}

export function features(blockchain: string): void {
  assert(
    blockchain == "etherium" || blockchain == "near" || "near_vs_etherium",
    "We only support 'near', 'etherium' or 'near_vs_etherium'"
  );
  let instance = new Near102();
  if (blockchain == "near_vs_etherium") {
    instance.compare_primitives();
  } else {
    let promise: ContractPromise;
    promise = instance.get_features(blockchain);
    promise.returnAsResult();
  }
}
