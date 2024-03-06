let pronouns = ['the', 'our'];
let adjs = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let extennsions = [".com", ".es", ".net", ".us"]
for (pronoun in pronouns) {
    for (adj in adjs) {
        for (noun in nouns) {
            for (extennsion in extennsions) {
            console.log(pronouns[pronoun]+adjs[adj]+nouns[noun]+extennsions[extennsion]);
            }
        }
    }
}