var PlayerService = {
    getPlayerTeamId: async (playerId) => {
        const team = 
            await fetch(`/player/${playerId}/team`)
            .then(res => res.json() )

        return team.id;
    },
    getPlayers: async (teamId) => {
        const players =
            await fetch(`/team/${teamId}/player`)
            .then(res => res.json())

        return players;
    }
};

var PlayerDetailsController = {
    playerId: 8,
    showTeammatesClick: async () => {
        const playerTeamId = await PlayerService.getPlayerTeamId(this.playerId);
        const players = await PlayerService.getPlayers(playerTeamId);
        // Render playerList
    }
};