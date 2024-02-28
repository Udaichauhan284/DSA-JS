/* Book Allocation to Student
arr is given with number of pages of book
arr = [25,46,28,49,24] students given = 4/
allocate the books among the students atleast one book will get to one students.
each book allocate only to students.
book allocation shoul be i acontingous manners.
You have to allocate the book to "m" studnets such that the maximum number of pages assignes to student is a minimum. => (maximum number of pages to one student) is minimum.
*/
//for this first we need a function, countStudent which have the maximum numbers of pages.
//brute force - linear search range will max of arr and sum of arr. O(n^2)
const cntStudent = (arr, pages) => {
  let len = arr.length;
  let stud = 1,
    pagesOnStud = 0;
  for (let i = 0; i < len; i++) {
    if (arr[i] + pagesOnStud <= pages) {
      pagesOnStud += arr[i]; //add more pages - student can handle
    } else {
      stud++; //move to next student
      pagesOnStud = arr[i]; //assign that page to new stude
    }
  }
  return stud;
};
const bruteAllocationPages = (arr, m) => {
  let len = arr.length;
  if (m > len) return -1; //means student more we cannot assigned book to each student, thats why returning -1;
  //range of pages - where we can find ans, which student can hold maxi pages which is mini amoung each other.
  let max = Math.max(...arr);
  let sum = arr.reduce((sum, acc) => sum + acc, 0);
  //find the ans, in this loop we will call that cntstud function
  for (let pages = max; pages <= sum; pages++) {
    if (cntStudent(arr, pages) === m) {
      return pages;
    }
  }
  return max;
};

//optimal way - use of binary search - O(Nlogn)
const optimalBookAllocation = (arr, m) => {
  let len = arr.length;
  let low = Math.max(...arr); // Set low to the maximum number of pages in the array
  // let sum = 0;

  // for (let i = 0; i < len; i++) {
  //   sum += arr[i]; // Calculate the total sum of pages in the array
  // }

  // let high = sum; // Set high to the total sum of pages

  //OR
  let high = arr.reduce((sum,acc) => sum+acc,0)

  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // Calculate the middle point

    if (cntStudent(arr, mid) > m) {
      low = mid + 1; // Adjust the search range if more students are needed
    } else {
      high = mid - 1; // Adjust the search range if fewer students are needed
    }
  }

  return low; // Return the minimum number of pages needed for allocation
};

let arr = [25, 46, 28, 49, 24];
let students = 4;
console.log(bruteAllocationPages(arr, students));
console.log(optimalBookAllocation(arr, students));
