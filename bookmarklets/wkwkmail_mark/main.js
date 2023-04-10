function main() {
	if (window.location.hostname == 'wk.550909.com') {
		if (document.querySelector('.afterPartner') != null) {
			let n = Number(window.prompt("ループ回数を入力してください", ""));
			console.log(`input: ${n}`);
			if (n === NaN) {
				alert('数値として認識されませんでした。終了します。');
				return;
			}
			let c = 0;
			for (let i = 0, s = 0; i < n; i++) {
				rS = Math.ceil(Math.random() * 10);
				s += rS;
				timer_id = setTimeout((rS) => {
					let aP = document.querySelector('.afterPartner');
					if (aP != null) {
						c++;
						console.log(`${c}回目：${rS}秒`);
						aP.click();
						if (n === c) {
							alert(`${c}回の繰り返しが完了。終了します。`);
						}
					} else {
						alert('errMsg: afterPertner is null, back to the users view resource');
						alert(`${c}回の繰り返しが完了。終了します。`);
						window.location.href = 'https://wk.550909.com/profile/users?format=thumbnail&order=login';
					}
				}, s * 1000, rS);
			}
		} else {
			alert('次のユーザーを取得できませんでした。');
		}
	} else {
		alert('無効なURLです。');
	}
}
