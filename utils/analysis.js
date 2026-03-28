function analyze(product) {
  const prices = product.priceHistory;

  const avg =
    prices.reduce((sum, price) => sum + price, 0) / prices.length;

  let decision = "NORMAL";

  if (product.currentPrice < avg * 0.8) {
    decision = "BUY";
  } else if (product.currentPrice > avg * 1.25) {
    decision = "WAIT";
  }

  let seller = "TRUSTED";

  if (product.sellerRating < 3.5 || product.reviewCount < 50) {
    seller = "UNRELIABLE";
  }

  return {
    averagePrice: avg,
    decision,
    seller
  };
}

module.exports = analyze;