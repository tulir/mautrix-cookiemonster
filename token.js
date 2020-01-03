if (localStorage.mautrixLoginSite === window.location.pathname) {
	browser.runtime.sendMessage({token: window.location.hash.substr(1)})
		.then(() => console.info("Login token eaten by Mautrix Cookie Monster"))
}
