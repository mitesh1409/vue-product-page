app.component(
    'review-list',
    {
        props: {
            reviews: {
                type: Array,
                required: true
            }
        },

        template:
        // Below is there for html syntax highlighting using es6-string-html extension.
        /*html*/
        `
        <div class="review-container">
            <h3>Reviews:</h3>

            <ul>
                <li v-for="(review, index) in reviews" :key="index">
                    {{ review.name }} gave this {{ review.rating }} stars
                    <br/>
                    "{{ review.review }}"
                </li>
            </ul>
        </div>
        `
    }
);