export class Solution {
    isValid(s: string): boolean {
        let st = [];
        for (let c of s) {
            switch (c) {
                case '(':
                case '[':
                case '{':
                    st.push(c);
                    break;

                case ')':
                    if (st.length == 0)
                        return false;
                    else {
                        if (st[st.length - 1] == '(')
                            st.pop();
                        else
                            return false;
                    }
                    break;

                case ']':
                    if (st.length == 0)
                        return false;
                    else {
                        if (st[st.length - 1] == '[')
                            st.pop();
                        else
                            return false;
                    }
                    break;

                case '}':
                    if (st.length == 0)
                        return false;
                    else {
                        if (st[st.length - 1] == '{')
                            st.pop();
                        else
                            return false;
                    }
                    break;
            }
        }

        return st.length == 0;
    };
}