#define CATCH_CONFIG_MAIN
#include "../dependencies/catch2/catch.hpp"
#include "../solutions/0054_spiral_matrix/solution.hpp"

TEST_CASE("Problem 054 Test", "[Sprial Matix]")
{
    Solution s;
    struct TestVector
    {
        std::vector<std::vector<int>> nums;
        std::vector<int> actual;

        TestVector(std::vector<std::vector<int>> nums, std::vector<int> actual)
            : nums(nums), actual(actual) {}
    };

    std::vector<TestVector> testVec;

    testVec.emplace_back(
        std::vector<std::vector<int>>(
            {
                {1, 2, 3}, 
                {4, 5, 6}, 
                {7, 8, 9}
            }
        ),

        std::vector<int>(
            {1, 2, 3, 6, 9, 8, 7, 4, 5}
        )
    );

    testVec.emplace_back(
        std::vector<std::vector<int>>(
            {
                {1, 2, 3, 4}, 
                {5, 6, 7, 8}, 
                {9, 10, 11, 12}
            }
        ),

        std::vector<int>(
            {1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7}
        )
    );

    for (auto &&var : testVec)
    {
        REQUIRE(var.actual == s.spiralOrder(var.nums));
    }

}