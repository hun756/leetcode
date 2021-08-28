#include <string>
#include <stack>

class Solution
{
public:
    bool isValid(std::string s)
    {
        std::stack<char> st;
        for (auto &&c : s)
        {
            switch (c)
            {
            case '(':
            case '[':
            case '{':
                st.push(c);
                break;

            case ')':
                if (st.empty())
                    return false;
                else
                {
                    if (st.top() == '(')
                        st.pop();
                    else
                        return false;
                }
                break;

            case ']':
                if (st.empty())
                    return false;
                else
                {
                    if (st.top() == '[')
                        st.pop();
                    else
                        return false;
                }
                break;

            case '}':
                if (st.empty())
                    return false;
                else
                {
                    if (st.top() == '{')
                        st.pop();
                    else
                        return false;
                }
                break;
            }
        }

        return st.empty();
    }
};