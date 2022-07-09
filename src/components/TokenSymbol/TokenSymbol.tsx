import React from 'react';

//Graveyard ecosystem logos
import tombLogo from '../../assets/img/tombLogo.png';
import tShareLogo from '../../assets/img/tShareLogo.png';
import tBondLogo from '../../assets/img/tBondLogo.png';
// import tombLogoPNG from '../../assets/img/TOMP-01.png';
// import tShareLogoPNG from '../../assets/img/TBOND-01.png';

import tombFtmLpLogo from '../../assets/img/tomb_ftm_lp.png';
import tshareFtmLpLogo from '../../assets/img/tshare_ftm_lp.png';

import wftmLogo from '../../assets/img/ftm_logo_blue.svg';
import wethLogo from '../../assets/img/weth.png';
import rtombLogo from '../../assets/img/crypto_tomb_cash.svg';
import shibaLogo from '../../assets/img/mimlogo.png';

import tombtshares from '../../assets/img/TOMB-TSHARES.png';

import usdc from '../../assets/img/USDC.png';

const logosBySymbol: { [title: string]: string } = {
  //Real tokens
  //=====================
  TOMB: tombLogo,
  // TOMBPNG: tombLogoPNG,
  // TSHAREPNG: tShareLogoPNG,
  TSHARE: tShareLogo,
  TBOND: tBondLogo,
  // WFTM: wftmLogo,
  // WETH: wethLogo,
  // MIM: shibaLogo,
  // RTOMB: rtombLogo,
  'TOMP-FTM-LP': tombFtmLpLogo,
  'TSHARE-FTM-LP': tshareFtmLpLogo,
  'TOMP-TSHARE-LP': tombtshares,
  'USDC': usdc,
};

type LogoProps = {
  symbol: string;
  size?: number;
};

const TokenSymbol: React.FC<LogoProps> = ({ symbol, size = 64 }) => {
  if (!logosBySymbol[symbol]) {
    return <img src={logosBySymbol["TOMB"]} alt={`Tomb Logo`} width={size} height={size} />;
    // throw new Error(`Invalid Token Logo symbol: ${symbol}`);
  }
  return <img src={logosBySymbol[symbol]} alt={`${symbol} Logo`} width={size} height={size} />;
};

export default TokenSymbol;
