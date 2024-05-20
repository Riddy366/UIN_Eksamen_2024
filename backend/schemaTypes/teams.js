export const teams = {
    title: "Teams",
    name: "teams",
    type: "document",
    fields: [
        {
            title: "Pokemon Team",
            name: "teamName", 
            type: "string"
        },
        {
            title: "Pokemons",
            name: "pokemons",
            type: "array", 
            of: [{ type: "string" }]
        },
        {
            title: "Bilde",
            name: "image",
            type: "image",
            options: {
                hotspot: true 
            }
        }
    ]
}
