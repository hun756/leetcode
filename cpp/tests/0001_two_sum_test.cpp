#define CATCH_CONFIG_MAIN
#include "../dependencies/catch2/catch.hpp"
#include "../solutions/0001_two_sum/solution.hpp"

TEST_CASE("Problem 01 Test", "[Two Sum]")
{
    Solution s;
    struct TestVector
    {
        std::vector<int> nums;
        int target;
        std::vector<int> sols;

        TestVector(std::vector<int> nums, int target, std::vector<int> sols)
            : nums(nums), sols(sols), target(target) {}
    };

    std::vector<TestVector> testVec;

    testVec.emplace_back(
        std::vector<int>({2, 7, 11, 15}),
        9,
        std::vector<int>({0, 1}));

    testVec.emplace_back(
        std::vector<int>({3, 2, 4}),
        6,
        std::vector<int>({1, 2}));

    testVec.emplace_back(
        std::vector<int>({3, 3}),
        6,
        std::vector<int>({0, 1}));

    for (auto &&var : testVec)
    {
        REQUIRE(var.sols == s.twoSum(var.nums, var.target));
    }
}