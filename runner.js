const path = require('path');

/**
 * Simple Runner for Algorithm Problems
 * Usage: node runner.js <folder>/<filename> [args...]
 */

async function run() {
    const args = process.argv.slice(2);
    if (args.length === 0) {
        console.error("Usage: node runner.js <folder>/<filename> [args...]");
        process.exit(1);
    }

    const filePath = path.resolve(process.cwd(), args[0]);
    
    try {
        // Clear cache to allow re-running in the same process if needed
        delete require.cache[require.resolve(filePath)];
        
        // Import the file
        const module = require(filePath);
        
        // Find the exported function or the first function in the module
        let targetFunction;
        if (typeof module === 'function') {
            targetFunction = module;
        } else if (typeof module === 'object') {
            // Look for common export patterns
            targetFunction = Object.values(module).find(v => typeof v === 'function');
        }

        if (!targetFunction) {
            console.warn("No function exported from the file. Running the file directly...");
            // If no function is exported, requiring it already executed the top-level code
            return;
        }

        // If arguments are provided, call the function
        if (args.length > 1) {
            const fnArgs = args.slice(1).map(arg => {
                try {
                    return JSON.parse(arg);
                } catch (e) {
                    return arg;
                }
            });
            console.log(`Running ${targetFunction.name || 'function'} with args:`, fnArgs);
            const start = performance.now();
            const result = await targetFunction(...fnArgs);
            const end = performance.now();
            console.log("Result:", result);
            console.log(`Execution time: ${(end - start).toFixed(4)}ms`);
        } else {
            console.log(`File ${args[0]} loaded. To pass arguments, use: node runner.js ${args[0]} arg1 arg2 ...`);
        }
    } catch (err) {
        console.error("Error running the file:", err);
        process.exit(1);
    }
}

run();
