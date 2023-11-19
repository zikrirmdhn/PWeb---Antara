$(Document).ready(function(){

    $.ajax({
        URL: "https://api-berita-indonesia.vercel.app/antara/politik/",
        method: "GET",
        success: function (posts){
            display(posts);
        },
        error: function (error) {
            console.error("Error fetching data: ", error);
        }
    })

    function display(posts) {
        let output = '';

        $.each(posts, function(key, post) {
            output +=
            <div class="col-md-4">
                <div class="card">
                    <img src="${posts.thumbnail}"></img>
                    <div class="card-body">
                        <h5 class="card-title">${post.title}</h5>
                        <p>${post.desciprtion}</p>
                        <a href="${post.link}" class="btn">Lihat selengkapnya</a>
                    </div>
                </div>
            </div>
        })
    }
})