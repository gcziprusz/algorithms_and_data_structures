    func myAtoi(str string) int {
        return convert(clean(str))
    }

    func clean (str string) (sign int, abs string){
        str = strings.TrimSpace(str)
        if str == "" {
            return 
        }

        switch str[0] {
            case '0','1','2','3','4','5','6','7','8','9':
                sign,abs = 1, str
            case '-':
                sign,abs =   -1,str[1:]
            case '+':
                sign,abs = 1, str[1:]
        }

        for i, c := range abs  {
            if c < '0' || c > '9' {
                abs = abs[:i]
                break
            }
        }
        return

    }

    func convert(sign int , abs string) int{
        res := 0
        for _, s := range abs {
            fmt.Printf("s %s x\n", s)
            res = res*10 + int(s-'0')
            if sign == 1 && res > math.MaxInt32 {
                return math.MaxInt32
            }
            if sign == -1 && res*sign < math.MinInt32 {
                return math.MinInt32
            }
        }
        return res * sign
    }
