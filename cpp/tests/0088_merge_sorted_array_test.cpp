#define CATCH_CONFIG_MAIN
#include "../dependencies/catch2/catch.hpp"
#include "../solutions/0088_merge_sorted_arrays/solution.hpp"

#include <vector>

/*
Test Cases

Case 01 -----
[1,2,3,0,0,0]
3
[2,5,6]
3

Case 02 -----
[1]
1
[]
0


Case 03 -----
[0]
0
[1]
1
*/

TEST_CASE("Problem 0088 Test"
          "[Merge Sorted Array]")
{
    struct TestStruct
    {
        std::vector<int> nums1;
        std::vector<int> nums2;
        int m;
        int n;

        //> for compare
        std::vector<int> actual;

        TestStruct() = default;


        TestStruct(
            std::vector<int> nums1,
            int m,
            std::vector<int> nums2,
            int n,
            std::vector<int> actual) : nums1(nums1), m(m), nums2(nums2), n(n), actual(actual)
        {
        }
    };

    std::vector<TestStruct> testVec;

    testVec.emplace_back(
        std::vector<int>({1, 2, 3, 0, 0, 0}),
        3,
        std::vector<int>({2, 5, 6}),
        3,
        std::vector<int>({1, 2, 2, 3, 5, 6})
    );

    testVec.emplace_back(
        std::vector<int>({1}),
        1,
        std::vector<int>({}),
        0,
        std::vector<int>({1})
    );

    testVec.emplace_back(
        std::vector<int>({0}),
        0,
        std::vector<int>({1}),
        1,
        std::vector<int>({1})
    );

    Solution s;
    for (auto&& var : testVec)
    {
        s.merge(var.nums1, var.m, var.nums2, var.n);
        REQUIRE(var.nums1 == var.actual);
    }
}