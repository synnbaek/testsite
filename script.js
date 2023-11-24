function predictWinner() {
    let teamScores = {
        '맨시티': 57, '아스널': 48, '맨유':39,'뉴캐슬':32,'리버풀':47,'브라이튼':30,'에스턴빌라':31,'토트넘':40,'브렌트포드':28,'풀럼':15,'크리스탈 팰리스':22,'첼시':32,'울버햄튼':26,'웨스트햄':27,'본머스':11,'노팅엄 포레스트':9,'에버턴':19,'레스터':23,'리즈':16,'사우샘프턴':6

    };

    let team1 = document.getElementById('team1').value;
    let team2 = document.getElementById('team2').value;
    let resultDiv = document.getElementById('result');

    if (team1 in teamScores && team2 in teamScores) {
        if (teamScores[team1] > teamScores[team2]) {
            resultDiv.innerHTML = team1;
        } else if (teamScores[team1] < teamScores[team2]) {
            resultDiv.innerHTML = team2;
        } else {
            resultDiv.innerHTML = '무승부';
        }

        // Styling for the result
        resultDiv.style.fontSize = '75px'; // Adjust the font size
        resultDiv.style.color = 'yellow';   // Set the text color to yellow

    } else {
        resultDiv.innerHTML = '정보를 입력하세요';
        resultDiv.style.color = 'red';
    }
}
