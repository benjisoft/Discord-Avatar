import axios from 'axios';

export class DiscordAvatar {
	//#region Parameters
	private botToken: string;
	//#endregion

	//#region Constructors
	constructor(botToken: string) {
		this.botToken = botToken;
	}
	//#endregion

	//#region Methods
	async getAvatarId(userId: string) {
		var options = {
			method: 'GET',
			url: `https://discord.com/api/users/${userId}`,
			headers: {
				Authorization: `Bot ${this.botToken}`
			}
		};

		try {
			const response = await axios.request(options)
			return response.data.avatar;
		} catch(error) {
			console.error(error);
		};
	};

	async getAvatarUrl(userId: string) {
		const avatarId = await this.getAvatarId(userId);
		return `https://cdn.discordapp.com/avatars/${userId}/${avatarId}.png`;
	}
	//#endregion
}