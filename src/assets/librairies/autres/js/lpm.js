function estEmailValide(str) {
	var longueurMax = 80;

	if (str.length > longueurMax)
		return false;

	return estEmailValideRegexp(str, /[a-zA-Z0-9]+([.]?[-_a-zA-Z0-9]+)*@([a-zA-Z0-9]+(-[a-zA-Z0-9]+)*\.)+[a-zA-Z]{2,4}/)
		&& estEmailValideRegexp(str, /^(?=.{1,64}@.{4,78}$)(?=.{6,80}$).*/);
}

function estEmailValideRegexp(str, regex) {
    // 1er test
    if (!regex.test(str))
        return false;

    // 2ème vérification
    var m = regex.exec(str);

    if (m.length > 0)
        return m[0] == str;

    return false;
}