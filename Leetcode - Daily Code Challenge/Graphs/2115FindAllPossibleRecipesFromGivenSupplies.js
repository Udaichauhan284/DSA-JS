/* 2115. Find all Possible Recipes from Given Supplies
21 March 25, leetcode POTD
Input: recipes = ["bread"], ingredients = [["yeast","flour"]], supplies = ["yeast","flour","corn"]
Output: ["bread"]
Explanation:
We can create "bread" since we have the ingredients "yeast" and "flour".
*/

function findAllRecipes(recipes, ingredients, supplies) {
    const n = recipes.length;
    const result = [];

    const supplySet = new Set(supplies);
    const cooked = new Array(n).fill(false);

    let count = n;
    while (count--) {
        for (let j = 0; j < n; j++) {
            if (cooked[j]) {
                continue;
            }

            let canMake = true;
            for (let k = 0; k < ingredients[j].length; k++) {
                if (!supplySet.has(ingredients[j][k])) {
                    canMake = false;
                    break;
                }
            }

            if (canMake) {
                supplySet.add(recipes[j]);
                result.push(recipes[j]);
                cooked[j] = true;
            }
        }
    }
    return result;
}
