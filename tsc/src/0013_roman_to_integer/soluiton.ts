export default class solution {
    romanToInt(s: string): number {
        let map = new Map();

        map.set('I', 1);
        map.set('V', 5);
        map.set('X', 10);
        map.set('L', 50);
        map.set('C', 100);
        map.set('D', 500);
        map.set('M', 1000);

        const sLen = s.length;
        let res: number = map.get(s[sLen - 1]);

        for (let i = sLen - 2; i >= 0; --i) {
            map.get(s[i]) < map.get(s[i + 1]) ?
                res -= map.get(s[i]) : res += map.get(s[i]);
        }

        return res;
    };

}