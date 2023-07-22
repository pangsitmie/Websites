
export interface Recipe {
    title: string;
    ingredients: string[];
    instructions: string[];
}

function capitalizeWords(str: string): string {
    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export const parseRecepie = (response: string): Recipe => {
    // Split the response into lines
    const lines = response.split('\n');

    // Extract the title from the first line using a regex
    // const titleRegex = /Here's a (.+?) recipe/;
    const match = lines[0];
    const title = match ? capitalizeWords(match[1]) : 'Unknown Recipe';

    // Initialize ingredients and steps arrays
    let ingredients: string[] = [];
    let instructions: string[] = [];

    // Use a state flag to know if we're parsing ingredients or steps
    let parsingIngredients = false;
    let parsingInstructions = false;

    // Start from the second line
    for (let i = 1; i < lines.length; i++) {
        // If the line is "Ingredients:", we start parsing ingredients
        if (lines[i] === "Ingredients:") {
            parsingIngredients = true;
        }
        // If the line is "Instructions:", we stop parsing ingredients and start parsing steps
        else if (lines[i] === "Instructions:") {
            parsingIngredients = false;
            parsingInstructions = true;
        }
        // If the line starts with a hyphen, it's an ingredient
        else if (parsingIngredients && lines[i].startsWith("- ")) {
            ingredients.push(lines[i].substring(2));  // Strip the leading "- " from the ingredient
        }
        // If the line starts with a number followed by a period, it's a step
        else if (parsingInstructions && lines[i].match(/^\d+\.\s+/)) {
            instructions.push(lines[i]);
        }
    }

    return { title, ingredients, instructions };
}