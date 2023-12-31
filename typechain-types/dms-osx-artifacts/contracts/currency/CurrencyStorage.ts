/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../../common";

export interface CurrencyStorageInterface extends utils.Interface {
  functions: {
    "BASE_CURRENCY()": FunctionFragment;
    "MULTIPLE()": FunctionFragment;
    "NULL_CURRENCY()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "BASE_CURRENCY" | "MULTIPLE" | "NULL_CURRENCY"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "BASE_CURRENCY",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MULTIPLE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "NULL_CURRENCY",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "BASE_CURRENCY",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MULTIPLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "NULL_CURRENCY",
    data: BytesLike
  ): Result;

  events: {};
}

export interface CurrencyStorage extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: CurrencyStorageInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BASE_CURRENCY(overrides?: CallOverrides): Promise<[string]>;

    MULTIPLE(overrides?: CallOverrides): Promise<[BigNumber]>;

    NULL_CURRENCY(overrides?: CallOverrides): Promise<[string]>;
  };

  BASE_CURRENCY(overrides?: CallOverrides): Promise<string>;

  MULTIPLE(overrides?: CallOverrides): Promise<BigNumber>;

  NULL_CURRENCY(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    BASE_CURRENCY(overrides?: CallOverrides): Promise<string>;

    MULTIPLE(overrides?: CallOverrides): Promise<BigNumber>;

    NULL_CURRENCY(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    BASE_CURRENCY(overrides?: CallOverrides): Promise<BigNumber>;

    MULTIPLE(overrides?: CallOverrides): Promise<BigNumber>;

    NULL_CURRENCY(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE_CURRENCY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MULTIPLE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    NULL_CURRENCY(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
