/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  LedgerStorage,
  LedgerStorageInterface,
} from "../../../../dms-osx-artifacts/contracts/ledger/LedgerStorage";

const _abi = [
  {
    inputs: [],
    name: "MAX_FEE",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "consumerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "exchangerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "feeAccount",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "foundationAccount",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "providerAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "settlementAccount",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506101bf806100206000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063706e52571161005b578063706e52571461010c578063bc063e1a1461012c578063cc0e3f2c14610149578063dbc2d042146101695761007d565b806319e367081461008257806347b15a89146100cc57806365e17c9d146100ec575b600080fd5b6005546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b600a546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b6007546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b6008546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b610134600581565b60405163ffffffff90911681526020016100c3565b6006546100a29073ffffffffffffffffffffffffffffffffffffffff1681565b6009546100a29073ffffffffffffffffffffffffffffffffffffffff168156fea264697066735822122003199ed7b09fceffb671d0f2ec7373e0e9dac2c9acbf3d7d6d65cf867571d4cd64736f6c63430008020033";

type LedgerStorageConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LedgerStorageConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LedgerStorage__factory extends ContractFactory {
  constructor(...args: LedgerStorageConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LedgerStorage> {
    return super.deploy(overrides || {}) as Promise<LedgerStorage>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): LedgerStorage {
    return super.attach(address) as LedgerStorage;
  }
  override connect(signer: Signer): LedgerStorage__factory {
    return super.connect(signer) as LedgerStorage__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LedgerStorageInterface {
    return new utils.Interface(_abi) as LedgerStorageInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LedgerStorage {
    return new Contract(address, _abi, signerOrProvider) as LedgerStorage;
  }
}
