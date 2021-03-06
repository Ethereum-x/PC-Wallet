import { TSymbol, StoreAccount, ITxConfig, ITxReceipt } from 'v2/types';

export interface ISwapAsset {
  name: string;
  symbol: TSymbol;
}

export enum LAST_CHANGED_AMOUNT {
  FROM = 'FROM_AMOUNT',
  TO = 'TO_AMOUNT'
}

export interface SwapDisplayData {
  fromAsset: ISwapAsset;
  toAsset: ISwapAsset;
  fromAmount: string;
  toAmount: string;
}

export interface SwapState extends SwapDisplayData {
  assets: ISwapAsset[];
  fromAmountError: string | JSX.Element;
  isCalculatingFromAmount: boolean;
  toAmountError: string | JSX.Element;
  isCalculatingToAmount: boolean;
  lastChangedAmount: LAST_CHANGED_AMOUNT;
  account: StoreAccount;
  isSubmitting: boolean;
  txConfig: ITxConfig;
  rawTransaction: ITxConfig;
  dexTrade: any;
  txReceipt: ITxReceipt | undefined;
  initialToAmount: string; // This is used to reverse the fee calculation when inputing the recipient amount. It's how we determine the fee.
  exchangeRate: string; // The exchange rate displayed to the user (post-markup)
  markup: string;
}
