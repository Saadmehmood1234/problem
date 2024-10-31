export interface Problem {
  id: number;
  title: string;
  description: string;
  category: 'Easy' | 'Medium' | 'Hard';
  hint: string;
  solution: string;
  completed: boolean;
}

  export const ProblemData: Problem[] = [
    {
      id: 1,
      title: 'Two Sum',
      description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
      category: 'Easy',
      hint: 'Use a hash map to store the difference and index.',
      solution: 'Iterate through the array, for each element, check if the target minus that element exists in the hash map. If it does, return the indices.',
      completed: false,
    },
    {
      id: 2,
      title: 'Reverse Integer',
      description: 'Given a 32-bit signed integer, reverse digits of an integer.',
      category: 'Easy',
      hint: 'Handle overflow and sign of the integer.',
      solution: 'Reverse the integer while checking for overflow and handle the sign of the integer appropriately.',
      completed: true
    },
    {
      id: 3,
      title: 'Longest Substring Without Repeating Characters',
      description: 'Given a string, find the length of the longest substring without repeating characters.',
      category: 'Medium',
      hint: 'Use a sliding window approach.',
      solution: 'Maintain a sliding window with a set to track characters and update the window size as needed to ensure no repeating characters.',
      completed: false

    },
    {
      id: 4,
      title: 'Add Two Numbers',
      description: 'You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.',
      category: 'Medium',
      hint: 'Simulate the addition process with carry.',
      solution: 'Traverse both linked lists, add corresponding digits and handle the carry. Create a new linked list to store the result.',
      completed: false
    },
    {
      id: 5,
      title: 'Median of Two Sorted Arrays',
      description: 'Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.',
      category: 'Hard',
      hint: 'Use binary search to find the correct partition.',
      solution: 'Apply binary search to partition both arrays and compute the median based on the partitioned arrays.',
      completed: true
    },
    {
      id: 6,
      title: 'Longest Valid Parentheses',
      description: 'Given a string containing just the characters \'(\' and \')\', find the length of the longest valid (well-formed) parentheses substring.',
      category: 'Hard',
      hint: 'Use a stack or two counters.',
      solution: 'Use a stack to keep track of the indices of unmatched parentheses or use two counters to find the longest valid substring.',
      completed: false
    },
    {
      id: 7,
      title: 'Word Ladder',
      description: 'Given two words (beginWord and endWord), and a dictionary\'s word list, find the length of shortest transformation sequence from beginWord to endWord, such that only one letter can be changed at a time and each transformed word must exist in the word list.',
      category: 'Hard',
      hint: 'Use BFS to explore all possible transformations.',
      solution: 'Implement BFS to explore the shortest path from beginWord to endWord, using a set to track visited words.',
      completed: true
    },
    {
      id: 8,
      title: 'Container With Most Water',
      description: 'You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the line are (i, 0) and (i, height[i]) where 0 <= i < n. Find two lines that together with the x-axis forms a container, such that the container contains the most water.',
      category: 'Medium',
      hint: 'Use two pointers to find the maximum area.',
      solution: 'Use a two-pointer technique to find the maximum area by moving the pointers towards each other based on the height of the lines.',
      completed: true
    },
    {
      id: 9,
      title: 'Merge Intervals',
      description: 'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
      category: 'Medium',
      hint: 'Sort intervals and merge them.',
      solution: 'Sort the intervals based on start times and merge overlapping intervals by comparing the end times of the intervals.',
      completed: false
    },
    {
      id: 10,
      title: 'N-Queens',
      description: 'The n-queens puzzle is the problem of placing n chess queens on an n × n chessboard so that no two queens threaten each other. Given an integer n, return all distinct solutions to the n-queens puzzle.',
      category: 'Hard',
      hint: 'Use backtracking to place queens.',
      solution: 'Use backtracking to place queens on the board while ensuring no two queens threaten each other, and collect all valid configurations.',
      completed: false
    },
    {
      id: 11,
      title: 'Valid Parentheses',
      description: 'Given a string containing just the characters \'(\', \')\', \'{\', \'}\', \'[\' and \']\', determine if the input string is valid.',
      category: 'Easy',
      hint: 'Use a stack to track parentheses.',
      solution: 'Use a stack to keep track of opening parentheses and ensure each closing parenthesis matches the most recent opening parenthesis.',
      completed: false
    },
    {
      id: 12,
      title: 'Climbing Stairs',
      description: 'You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?',
      category: 'Easy',
      hint: 'Use dynamic programming or recursion.',
      solution: 'Use dynamic programming to compute the number of ways to reach each step by summing the ways to reach the previous one or two steps.',
      completed: true
    },
    {
      id: 13,
      title: 'Longest Common Prefix',
      description: 'Write a function to find the longest common prefix string amongst an array of strings. If there is no common prefix, return an empty string "".',
      category: 'Easy',
      hint: 'Compare characters of the strings.',
      solution: 'Compare characters of each string at the same position and find the longest common prefix by iterating through the array of strings.',
      completed: false
    },
    {
      id: 14,
      title: 'Search Insert Position',
      description: 'Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.',
      category: 'Easy',
      hint: 'Use binary search to find the position.',
      solution: 'Apply binary search to find the target value or the position where it should be inserted in the sorted array.',
      completed: true
    },
    {
      id: 15,
      title: 'Jump Game',
      description: 'You are given an array of non-negative integers nums. You are initially positioned at the first index. Each element in the array represents your maximum jump length at that position. Determine if you are able to reach the last index.',
      category: 'Medium',
      hint: 'Track the maximum reachable index.',
      solution: 'Use a greedy approach to keep track of the farthest reachable index and check if it reaches or exceeds the last index.',
      completed: true
    },
    {
      id: 16,
      title: 'Regular Expression Matching',
      description: 'Given an input string s and a pattern p, implement regular expression matching with support for \'.\' and \'*\'.',
      category: 'Hard',
      hint: 'Use dynamic programming or recursion.',
      solution: 'Implement a dynamic programming solution to handle regular expressions with support for matching any character (.) and zero or more repetitions (*) of the preceding character.',
      completed: false
    },
    {
      id: 17,
      title: 'Trapping Rain Water',
      description: 'Given n non-negative integers representing the elevation map where the width of each bar is 1, compute how much water it can trap after raining.',
      category: 'Hard',
      hint: 'Use two pointers or dynamic programming.',
      solution: 'Use two pointers to calculate the trapped water by keeping track of the maximum heights from both ends and calculating the water trapped based on these heights.',
      completed: false
    },
    {
      id: 18,
      title: 'Edit Distance',
      description: 'Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2. You have the following three operations permitted on a word: insert a character, delete a character, replace a character.',
      category: 'Hard',
      hint: 'Use dynamic programming to solve the problem.',
      solution: 'Apply dynamic programming to compute the minimum number of operations required to transform one string into another by considering insertion, deletion, and replacement operations.',
      completed: true
    },
    {
      id: 19,
      title: 'Binary Tree Maximum Path Sum',
      description: 'Given a non-empty binary tree, find the maximum path sum. The path must start and end at any node in the tree.',
      category: 'Hard',
      hint: 'Use recursion to find the maximum path sum.',
      solution: 'Use recursion to find the maximum path sum by exploring all possible paths and calculating the maximum sum that can be obtained starting and ending at any node in the tree.',
      completed: false
    },
    {
      id: 20,
      title: 'Longest Increasing Subsequence',
      description: 'Given an integer array nums, return the length of the longest strictly increasing subsequence.',
      category: 'Medium',
      hint: 'Use dynamic programming to solve the problem.',
      solution: 'Implement a dynamic programming approach to find the length of the longest increasing subsequence by maintaining an array to store the length of the longest increasing subsequence ending at each position.',
      completed: false
    }
  ];
  