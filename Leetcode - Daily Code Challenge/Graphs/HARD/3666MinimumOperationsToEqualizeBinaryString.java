/* 3666. Minimum Operations To Equalize Binary String
27 Feb 2026, leetcode POTD, HARD

Input: s = "110", k = 1

Output: 1

Explanation:

There is one '0' in s.
Since k = 1, we can flip it directly in one operation.
*/

class Solution {
    public int minOperations(String s, int k) {

        int n = s.length();

        int startZeros = 0;
        for(char ch : s.toCharArray()) {
            if(ch == '0')
                startZeros++;
        }

        if(startZeros == 0)
            return 0;

        int[] operations = new int[n+1];
        Arrays.fill(operations, -1);

        TreeSet<Integer> evenSet = new TreeSet<>();
        TreeSet<Integer> oddSet = new TreeSet<>();

        for(int count = 0; count <= n; count++) {
            if(count % 2 == 0)
                evenSet.add(count);
            else
                oddSet.add(count);
        }

        Queue<Integer> queue = new LinkedList<>();

        queue.offer(startZeros);
        operations[startZeros] = 0;

        if(startZeros % 2 == 0)
            evenSet.remove(startZeros);
        else
            oddSet.remove(startZeros);

        while(!queue.isEmpty()) {

            int z = queue.poll();

            int minNewZ = z + k - 2*Math.min(k, z);
            int maxNewZ = z + k - 2*Math.max(0, k-n+z);

            TreeSet<Integer> currSet =
                    (minNewZ % 2 == 0) ? evenSet : oddSet;

            Integer val = currSet.ceiling(minNewZ); // lower_bound

            while(val != null && val <= maxNewZ) {

                int newZ = val;

                operations[newZ] = operations[z] + 1;

                if(newZ == 0)
                    return operations[newZ];

                queue.offer(newZ);

                currSet.remove(val);

                val = currSet.ceiling(minNewZ);
            }
        }

        return -1;
    }
}