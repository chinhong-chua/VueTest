const app = Vue.createApp({
    //data, functions
    // template:'<h2> this is h2 template </h2>'

    data() {
        return {
            url: "https://chinhong96.com",
            showBooks: true,
            title: "the final empire",
            author: "Cruz",
            age: 25,
            x: 0,
            y: 0,
            books: [
                {
                    title: "the final empire",
                    author: "Cruz",
                    img:"assets/1.jpg"
                },
                {
                    title: "Harry potet",
                    author: "alan",
                    img:"assets/2.jpg"

                },
                {
                    title: "james brooke",
                    author: "selina",
                    img:"assets/3.jpg"

                },
            ]
        }
    },
    methods: {
        changeTitle(title) {
            console.log('clicked')
            this.title = title;
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data)
                console.log(data)
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY

        }
    }
});

app.mount('#app')