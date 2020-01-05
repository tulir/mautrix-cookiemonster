if (localStorage.mautrixLoginSite === window.location.pathname) {
	if (browser) {
		browser.runtime.sendMessage({token: window.location.hash.substr(1)})
			.then(() => console.info("Login token eaten by Mautrix Cookie Monster"))
	} else if (chrome) {
		chrome.runtime.sendMessage({token: window.location.hash.substr(1)},
			() => console.info("Login token eaten by Mautrix Cookie Monster"))
	}
}
