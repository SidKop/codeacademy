var getReview = function (name) {
    for (var key in movie){

        if (movie[key].review ===  name ){
            console.log(movies[key])
            return movies[key]
        }

    }

    // movie[key].name =
    // return movie[key].review

};
