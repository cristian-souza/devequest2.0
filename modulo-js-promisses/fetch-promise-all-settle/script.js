const baseUrl = "https://ghibliapi.vercel.app";

const loadSingleMovie = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/films/${id}`);

        const movie = await response.json();

        console.log(movie.title);
    } catch (error) {
        console.log("Erro ao carregar o filme:", error);
    }
};

// loadSingleMovie();

const loadMultipleMoviesAll = async (moviesIds) => {
    try {
        const promises = moviesIds.map(async (id) => {
            const response = await fetch(`${baseUrl}/films/${id}`);
            if (!response.ok) {
                throw new Error(`Erro ao carregar com id: ${id}`);
            }
            return response.json();
        });

        const movies = await Promise.all(promises);
        console.log(movies);
    } catch (error) {
        console.log("Erro ao carregar o filme:", error);
    }
};

const moviesIds = [
    "2baf70d1-42bb-4437-b551-e5fed5a87abe", // Castle in the Sky
    "12cfb892-0ac0-4c5b-94af-521852e46d6a", // Grave of the Fireflies
    "58611129-2dbc-4a81-a72f-77ddfc1b1b49", // My Neighbor Totoro
];

// loadMultipleMoviesAll(moviesIds);

const loadMultipleMoviesAllSettled = async (moviesIds) => {
    try {
        const promises = moviesIds.map(async (id) => {
            const response = await fetch(`${baseUrl}/films/${id}`);
            if (!response.ok) {
                throw new Error(`Erro ao carregar com id: ${id}`);
            }
            return response.json();
        });

        const movies = await Promise.allSettled(promises);
        console.log("Relatório final:");

        movies.forEach((movies, index) => {
            if (movies.status === "fulfilled") {
                console.log(`- Filme carregado: ${movies.value.title}`);
            } else {
                console.log(
                    `Erro no filme ${moviesIds[index]}`,
                    movies.reason.message
                );
            }
        });
    } catch (error) {
        console.log("Erro ao carregar o filme:", error);
    }
};

loadMultipleMoviesAllSettled(moviesIds);
