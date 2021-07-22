/**
 *  @see Problem on Leetcode
 *      https://leetcode.com/problems/two-sum/
 * 
 *  @date
 *      07/22/2021
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
     *      https://github.com/hun756/leetcode/blob/main/cpp/tests/0054_sprial_matrix_test.cpp
     * 
    **/
    std::vector<int> spiralOrder(std::vector<std::vector<int>> &matrix)
    {
        std::vector<int> result;
        int top = 0,
            back = matrix.size() - 1,
            left = 0,
            right = matrix[0].size() - 1,
            dir = 0;
        while (top <= back && left <= right)
        {

            switch (dir)
            {
                case 0:
                {
                    for (int i = left; i <= right; i++)
                        result.emplace_back(matrix[top][i]);
                    ++top;
                    break;
                }

                case 1:
                {
                    for (int i = top; i <= back; i++)
                        result.emplace_back(matrix[i][right]);
                    --right;
                    break;
                }

                case 2:
                {
                    for (int i = right; i >= left; i--)
                        result.emplace_back(matrix[back][i]);
                    --back;
                    break;
                }

                case 3:
                {
                    for (int i = back; i >= top; i--)
                        result.emplace_back(matrix[i][left]);
                    ++left;
                    break;
                }
            }

            ++dir %= 4;
        }
        return result;
    }
};