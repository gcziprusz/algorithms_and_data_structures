// Problem https://leetcode.com/explore/featured/card/google/67/sql-2/3044/
class Solution {
    public int numUniqueEmails(String[] emails) {
        Set<String> uniqueEmails = new HashSet<>();
        for(String e : emails){
            String[] parts = e.split("@");
            String local = parts[0];
            local = local.split("\\+")[0];
            local = local.replace(".","");
            local = local+"@"+parts[1];
            uniqueEmails.add(local);
        }
        return uniqueEmails.size();
    }
}
