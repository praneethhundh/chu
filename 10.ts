
type MobileColor = "GoldPlatinum" | "PinkGold" | "SilverTitanium";

function getPrice(color: MobileColor): number {
  switch (color) {
    case "GoldPlatinum":
      return 79999;
    case "PinkGold":
      return 74999;
    case "SilverTitanium":
      return 69999;
    default:
      return 0;
  }
}

const colors: MobileColor[] = ["GoldPlatinum", "PinkGold", "SilverTitanium"];

colors.forEach((color) => {
  console.log(`The price of the ${color} mobile is Rs. ${getPrice(color)}`);
});
