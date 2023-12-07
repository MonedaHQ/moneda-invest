import { calculateUSD } from '@/services/apiCalculator';
import * as cheerio from 'cheerio';

export function hasDecimal(number) {
  return number % 1 !== 0;
}

async function convertToUSD(amount) {
  const data = await calculateUSD();
  const USDRate = +data?.data?.ngn;
  return amount / USDRate;
}

export async function calculateInterest(
  amount,
  tenor,
  interest,
  isExchanged,
  isUSD
) {
  let actualAmount = amount;
  const tenorDivisible = isUSD ? 360 : 365;
  const actualTenor = +(tenor / tenorDivisible).toFixed(2);
  const interestRate = interest / 100;

  if (isExchanged) actualAmount = await convertToUSD(amount);
  return +(actualAmount * interestRate * actualTenor).toFixed(0);
}

export async function calculateMaturity(amount, interest, isExchanged) {
  let actualAmount = amount;
  if (isExchanged) actualAmount = await convertToUSD(amount);
  return actualAmount + interest;
}

export function calculateNairaBills(amount, tenor, interest) {
  const interestRate = interest / 100;
  const actualTenor = tenor / 365;
  const interestAmount = +(amount * interestRate * actualTenor).toFixed(0);
  const interestIntervals = +(interestAmount / 2).toFixed(0);
  const finalMaturity = amount + interestIntervals;

  return { interestAmount, finalMaturity, interestIntervals };
}

export const formatCurrency = (value, isUSD = true) =>
  new Intl.NumberFormat('en', {
    style: 'currency',
    currency: isUSD ? 'USD' : 'NGN',
  }).format(value);

export const getImage = (content) => {
  const imgSrc =
    cheerio
      .load(content || '')('img')
      .first()
      .attr('src') || '/no-img.jpg';

  return imgSrc;
};
