/* 18 Mar 2024.
452. Minimum Number of Arrows to Brust Ballons.
points: [[10,16],[2,8],[1,6],[7,12]], output: 2, need to arrows to brust the ballons
 //1. Sort the point, using the endPoints. 2. make endPoint of current to end. and use it as compare with next coming points.
 //TC O(nlogn), SC: O(1)
*/
const miniArrow = (points) => {
  let len = points.length;
  if(len===0) return 0;
  points.sort((a,b) => a[1]-b[1]);

  let arrows = 1;
  let end = points[0][1];
  for(let i=1; i<len; i++){
    if(points[i][0] > end){
      arrows++;
      end = points[i][1];
    }
  }
  return arrows;
}
