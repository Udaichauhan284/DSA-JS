/*
*   edges: vector of vectors which represents the graph
*   S: source vertex to start traversing graph with
*   V: number of vertices
*/
class Solution {
    static int[] bellman_ford(int V, ArrayList<ArrayList<Integer>> edges, int S) {
        // Write your code here
        int[] result = new int[V];
        Arrays.fill(result, (int) 1e8);
        result[S] = 0;
        
        for(int count=1; count<=V-1; count++){
            for(ArrayList<Integer> edge : edges){
                int u = edge.get(0);
                int v = edge.get(1);
                int w = edge.get(2);
                
                if(result[u] != 1e8 && result[u]+w < result[v]){
                    result[v] = result[u]+w;
                }
            }
        }
        
        //detecting cycle
        for(ArrayList<Integer> edge : edges){
            int u = edge.get(0);
            int v = edge.get(1);
            int w = edge.get(2);
            
            if(result[u] != 1e8 && result[u]+w < result[v]){
                return new int[]{-1};
            }
        }
        return result;
    }
}
