/**
 *  @see Problem on Leetcode
 *      https://leetcode.com/problems/two-sum/
 * 
 *  @date
 *      07/19/2021
 * 
 *  @author
 *      Hun
**/

#include <vector>
#include <stdexcept>

class Solution
{
public:
    /**
     *  @see 
     *      Check out the test cases of the problem.
     *  @link
     *      https://github.com/hun756/leetcode/blob/main/cpp/tests/0001_two_sum_test.cpp
     * 
    **/
    std::vector<int> twoSum(std::vector<int> &nums, int target)
    {
        for (int i = 0; i < nums.size(); ++i)
            for (int j = i + 1; j < nums.size(); ++j)
                if (nums[i] + nums[j] == target)
                    return {i, j};

        throw std::runtime_error("No twoSum solution");
    }
};