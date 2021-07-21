    function generateSentences(synonyms, text) {
        let graph = new Map();
        for (let [w1,w2] of synonyms) {
            connect(graph, w1, w2);
            connect(graph, w2, w1);
        }
        let ans = new Set(),q = new Array();
        q.push(text);
        while (q.length) {
            out = q.pop();
            ans.add(out);
            
            let words = out.split(/\W/);
            for (let i = 0; i < words.length; i++) {
                if (!graph.has(words[i])) continue;
                for (let synonym of graph.get(words[i])) {
                    words[i] = synonym;
                    let newText = words.join(" ");
                    if (!ans.has(newText)) q.push(newText);
                }
            }
        }
        return [...ans].sort();
    }
    function connect( graph, v1, v2) {
        if (!graph.has(v1)) graph.set(v1, []);
        graph.get(v1).push(v2);
    }
