const onMessage = (room, message, sender, isGroupChat, profileImageBase64, isDebugMode) => {
		const reply = (message) => {
				Bot.reply(room, message, isDebugMode);
		}
}