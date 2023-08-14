var user = {
    firstName: "nama",
    lastName: "kero",
    age: 19,
    favoriteFoods: ["寿司", "ラーメン", "カレー"],
    hasProgrammingExperience: false,
};
var getSelfIntroduction = function (user) {
    var favoriteFoodsString = function () {
        var texts = "";
        for (var i = 0; i < user.favoriteFoods.length; i++) {
            if (user.favoriteFoods.length - 1 === i) {
                texts += user.favoriteFoods[i];
            }
            else {
                texts += user.favoriteFoods[i] + "と、";
            }
        }
        return texts;
    };
    var judgeProgrammingExperience = function () {
        if (user.hasProgrammingExperience) {
            return "があります。";
        }
        else {
            return "はありません。";
        }
    };
    return ("\u79C1\u306E\u540D\u524D\u306F".concat(user.firstName).concat(user.lastName, "\u3067\u3059\u3002\n\u5E74\u9F62\u306F").concat(user.age, "\u3067\u3059\u3002\n\u597D\u304D\u306A\u98DF\u3079\u7269\u306F") + favoriteFoodsString() + "\u3067\u3059\u3002\n\u30D7\u30ED\u30B0\u30E9\u30DF\u30F3\u30B0\u306E\u7D4C\u9A13\u306F" + judgeProgrammingExperience());
};
console.log(getSelfIntroduction(user));
