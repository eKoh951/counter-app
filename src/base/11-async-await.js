export const getImagen = async () => {
	try {		
		const apiKey = '3TNlsAMoOyU8l5LsFBYtkedGH8lYHUTd';
		const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
		const { data } = await res.json();
		const url = data.images.original.url;
        return url;
	} catch(error) {
		return 'No existe';
	}
}