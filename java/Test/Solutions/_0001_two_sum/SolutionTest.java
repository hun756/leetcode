package Solutions._0001_two_sum;

import org.junit.jupiter.api.*;

import java.util.ArrayList;

class SolutionTest {
    static class TestStruct {
        int[] nums;
        public int target;
        int[] sols;

        public TestStruct(int[] nums, int target, int[] sols) {
            this.nums = new int[nums.length];
            this.sols = new int[sols.length];

            this.nums = nums;
            this.sols = sols;
            this.target = target;
        }
    }

    @Test
    void twoSum() {
        ArrayList<TestStruct> testVec = new ArrayList<>();

        testVec.add(new TestStruct(
                new int[]{2, 7, 11, 15},
                9,
                new int[]{0, 1})
        );


        testVec.add(new TestStruct(
                new int[]{3, 2, 4},
                6,
                new int[]{1, 2})
        );


        testVec.add(new TestStruct(
                new int[]{3, 3},
                6,
                new int[]{0, 1})
        );

        Solution s = new Solution();

        for (TestStruct testVar : testVec) {
            Assertions.assertArrayEquals(s.twoSum(testVar.nums, testVar.target), testVar.sols);
        }
    }
}