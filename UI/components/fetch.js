// fetch api
async function post(name, body) {
    const url = `https://${GetParentResourceName()}/` + name;
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
    } catch (error) {
        //   console.error('Post request failed:', error);
    }
}
