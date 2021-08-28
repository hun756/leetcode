#define CATCH_CONFIG_MAIN
#include "../dependencies/catch2/catch.hpp"
#include "../solutions/0020_valid_parantheses/solution.hpp"

TEST_CASE("Problem 054 Test", "[Sprial Matix]")
{
    Solution s;
    struct TestVector
    {
        std::string input;
        bool actual;

        TestVector(std::string input, bool actual)
            : input(input), actual(actual) {}
    };


    std::vector<TestVector> testVec {
        {
            "()",
            true
        },
        {
            "()[]{}",
            true
        },
        {
            "(]",
            false
        },
        {
            "([)]",
            false
        },
        {
            "{[]}",
            true
        }
    };

    for (auto &&var : testVec)
    {
        REQUIRE(var.actual == s.isValid(var.input));
    }

}