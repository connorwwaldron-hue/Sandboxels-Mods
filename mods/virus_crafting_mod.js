// virus_crafting_mod.js
// Sandboxels mod: Craft Virus from Cell + Infection

// Ensure the game has loaded before modifying elements
if (typeof elements !== "undefined") {
    // Safety check: Ensure required elements exist
    if (elements.cell && elements.infection && elements.virus) {
        
        // Add a reaction: when cell and infection touch, create virus
        elements.cell.reactions = elements.cell.reactions || {};
        elements.cell.reactions.infection = {
            "elem1": "virus", // Replace the cell with virus
            "elem2": null,    // Keep infection or set to null to remove it
            "chance": 1.0     // 100% chance
        };

        // Optional: Also allow infection to react with cell
        elements.infection.reactions = elements.infection.reactions || {};
        elements.infection.reactions.cell = {
            "elem1": "virus",
            "elem2": null,
            "chance": 1.0
        };

        console.log("[Virus Crafting Mod] Loaded: Cell + Infection → Virus");
    } else {
        console.warn("[Virus Crafting Mod] Required elements not found.");
    }
} else {
    console.error("[Virus Crafting Mod] Sandboxels elements object not available.");
