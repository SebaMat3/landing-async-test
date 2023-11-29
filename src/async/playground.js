/* export function runCode() {
    // Tu código aquí 👈
    const url = 'https://domain-api-com';
    try {
      const api = fetch(url);
      console.log(api)
    } catch (error) {
        throw new Error('API Not Found');
    }
} 

Observation: didn't used async keyword, nor return on try*/

// Local version



async function runCode() {
    const url = 'https://domain-api-com';
    try {
      return await fetch(url);
    } catch {
      throw new Error('API Not Found');
    }
  }
await runCode();