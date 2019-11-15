function estEmailValide(str) {
	var longueurMax = 40;
	if (str.length > longueurMax)
		return false;

    var regex = /[a-zA-Z]+([a-zA-Z0-9._-][a-zA-Z0-9]+)*@([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,24}/;
    
    // 1er test
    if (!regex.test(str))
        return false;

    // 2ème vérification
    var m = regex.exec(str);
    if (m.length > 0)
        return m[0] == str;

    return false;
}
