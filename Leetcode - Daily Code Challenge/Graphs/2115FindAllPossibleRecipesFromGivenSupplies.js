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


/*Use of Graph
//T.C : (n + m + S)
//S.C : O(n+S)
*/
var findAllRecipes = function (recipes, ingredients, supplies) {
    let n = recipes.length;
    let supplySet = new Set(supplies);
    
    let adj = new Map(); // ingredient -> list of recipe indices
    let indegree = new Array(n).fill(0);
    
    for (let i = 0; i < n; i++) {
        for (let ing of ingredients[i]) {
            if (!supplySet.has(ing)) {
                if (!adj.has(ing)) {
                    adj.set(ing, []);
                }
                adj.get(ing).push(i);
                indegree[i]++;
            }
        }
    }
    
    let queue = [];
    for (let i = 0; i < n; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }
    
    let result = [];
    while (queue.length > 0) {
        let i = queue.shift();
        let recipe = recipes[i];
        result.push(recipe);
        
        if (adj.has(recipe)) {
            for (let idx of adj.get(recipe)) {
                indegree[idx]--;
                if (indegree[idx] === 0) {
                    queue.push(idx);
                }
            }
        }
    }
    
    return result;
};