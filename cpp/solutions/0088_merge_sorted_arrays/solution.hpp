/**
 *  @see Problem on Leetcode
 *      https://leetcode.com/problems/merge-sorted-array/
 * 
 *  @date
 *      07/25/2021
 * 
 *  @author
 *      Hun
**/
#include <vector>
#include <algorithm>
#include <iterator>

class Solution
{
public:
    /**
     *  @see 
     *      Check out the test cases of the problem.
     *  @link
     *      https://github.com/hun756/leetcode/blob/main/cpp/tests/0088_merge_sorted_array_test.cpp
    **/
    void merge(std::vector<int> &nums1, int m, std::vector<int> &nums2, int n)
    {
        std::vector<int> temp(nums1.begin(), nums1.begin() + m);
        nums1.clear();


        std::merge(
            temp.begin(), temp.end(),
            nums2.begin(), nums2.begin() + n,
            std::back_inserter(nums1)
        );
    }
};