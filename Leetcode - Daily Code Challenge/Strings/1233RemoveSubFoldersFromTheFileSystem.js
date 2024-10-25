/*1233 Remove SubFolders from the filesystem
25 Oct 2024, Leetcode POTD,  String

Input: folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
Output: ["/a","/c/d","/c/f"]
Explanation: Folders "/a/b" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.
*/

/*In this we first push every folder into set and then we traverse
over it and take out the currfolder and find the last index of /
and take out substring of 0 to lastIndexof / and then check that
substr in set, if there in set so means this is subfolder we break
TC: O(n * l^2), l if for travering over currFolder and one l is for
substring and lastindexof , SC: O(n)
*/
var removeSubfolders = function(folder) {
  let set = new Set();
  for(let f of folder){
      set.add(f);
  }
  let result = [];
  //now loop on folders
  for(let currFolder of folder){
      let temp = currFolder; //because we modify it for looking
      let isSubFolder = false;
      while(currFolder){
          let position = currFolder.lastIndexOf('/');
          currFolder = currFolder.substring(0,position);

          if(set.has(currFolder)){
              isSubFolder = true;
              break; //measn this is subfolder break it
          }
      }
      if(isSubFolder === false){
          //we wont able to find subFolder of currOne
          result.push(temp); //here temp works
      }
  }
  return result;
};


/*IN second method we use sorting, with sorting parent folder will be
on first index then subfolder, so it will easy to look for subfolder
ones. TC: O(nlogn), SC: O(1)
*/
const removeSubfolders = (folders) => {
  let result = [];
  folders.sort(); // Sort folders in lexicographical order
  result.push(folders[0]); //parent folder will be first one
  for(let i=1; i<folders.length; i++){
    let currFolder = folders[i];
    let lastOne = result[result.length - 1];

    lastOne += '/'; // add this at last so it will easy to check
    // Check if currFolder is not a sub-folder of lastFolder
    if(!currFolder.startsWith(lastOne)){
      //if not measn we can push currFOlder into result
      result.push(currFolder);
    }
    return result;
  }
};